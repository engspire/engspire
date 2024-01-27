import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";
import { auth } from '@clerk/nextjs';

export async function GET(request: Request) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const prisma = new PrismaClient();
  
  const profile = await prisma.user.findUnique({ where: { externalId: userId } });

  return NextResponse.json(profile);
}