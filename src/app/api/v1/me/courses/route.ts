import prisma from '@/prisma';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId } = auth();

  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const coursesAsLearner = await prisma.batch_Learners.findMany({
    include: { batch: { include: { course: true } } },
    where: { learner: { externalId: userId } }
  });

  console.log({ coursesAsLearner });

  const coursesAsTeacher = await prisma.courses_Teachers.findMany({
    include: { course: true },
    where: { teacher: { externalId: userId } }
  });

  return NextResponse.json({ coursesAsLearner, coursesAsTeacher });
}