import prisma from '@/prisma';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function PATCH(request: Request) {
  const { userId } = auth();

  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();

  const user = await prisma.user.update({
    where: { externalId: userId },
    data: {
      updatedAt: new Date(),
      externalId: userId,
      firstName: body?.firstName,
      lastName: body?.lastName,
      emailAddress: body?.emailAddress,
      phoneNumber: body?.phoneNumber,
    },
  });

  return NextResponse.json(user);
}