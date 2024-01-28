import prisma from '@/prisma';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function PATCH() {
  const { userId } = auth();

  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const profile = await prisma.user.upsert({
    create: {
      externalId: userId,
    },
    update: {
      updatedAt: new Date(),
      lastOnlineAt: new Date(),
    },
    where: { externalId: userId }
  });

  return NextResponse.json(profile);
}