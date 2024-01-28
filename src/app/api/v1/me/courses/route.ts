import prisma from '@/prisma';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId } = auth();

  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const coursesAsLearner = await prisma.courses_Learners.findMany({
    include: { course: true },
    where: { learner: { externalId: userId } }
  });

  const coursesAsTeacher = await prisma.courses_Teachers.findMany({
    include: { course: true },
    where: { teacher: { externalId: userId } }
  });

  return NextResponse.json({ coursesAsLearner, coursesAsTeacher });
}