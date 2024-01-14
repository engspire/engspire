import { NextResponse } from 'next/server';
import { generatePayHereHash } from './generatePayHereHash';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const merchantId = searchParams.get("merchantId") ?? "";
  const orderId = searchParams.get("orderId") ?? "";
  const amount = searchParams.get("amount") ?? "";
  const currency = searchParams.get("currency") ?? "";

  const hash = generatePayHereHash(merchantId, orderId, +amount, currency);

  return NextResponse.json({ orderId, amount, currency, hash });
}