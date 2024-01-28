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

export async function PUT(request: Request) {
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