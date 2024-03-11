import prisma from '@/prisma';
import { auth } from '@clerk/nextjs';
import { connect } from 'http2';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  if (body?.emailAddress) NextResponse.json({ error: "Bad request" }, { status: 400 });

  const { userId: clerkUserId } = auth();

  let creatorId: number | undefined;

  if (clerkUserId) {
    const creator = await prisma.user.findUnique({ where: { externalId: clerkUserId } });

    if (creator) NextResponse.json({ error: "Not found: Invalid user" }, { status: 404 });

    creatorId = creator?.id;
  }

  const user = await prisma.user.findUnique({ where: { emailAddress: body.emailAddress } });

  if (body?.batchCode === undefined) throw new Error("Bad Request: Missing batchCode");
  if (body?.emailAddress === undefined) throw new Error("Bad Request: Missing emailAddress");

  let courseSignUp = await prisma.batch_Learners.findFirst({
    where: {
      batchCode: String(body.batchCode),
      learner: {
        emailAddress: body.emailAddress,
      }
    }
  });

  if (courseSignUp) {
    await prisma.batch_Learners.update({ where: { id: courseSignUp.id }, data: { updatedAt: new Date() } });
  } else {
    courseSignUp = await prisma.batch_Learners.create({
      data: {
        batchCode: String(body.batchCode),
        learnerId: user?.id as any,
        creatorId: creatorId,
      }
    });
  }

  return NextResponse.json(courseSignUp);
}