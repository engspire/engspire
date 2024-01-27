import { auth } from '@clerk/nextjs';
import { PrismaClient } from "@prisma/client";
import { NextResponse } from 'next/server';

export async function PATCH() {
  const { user } = auth();

  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const prisma = new PrismaClient();

  const profile = await prisma.user.upsert({
    create: {
      externalId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    update: {
      updatedAt: new Date(),
      lastOnlineAt: new Date(),
    },
    where: { externalId: user.id }
  });

  return NextResponse.json(profile);
}