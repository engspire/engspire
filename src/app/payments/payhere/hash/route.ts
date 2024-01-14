import { NextResponse } from 'next/server';
import { generatePayHereHash } from './generatePayHereHash';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const merchantId = process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID ?? "";
  const merchantSecret = process.env.PAYHERE_MERCHANT_SECRET ?? "";
  const orderId = searchParams.get("orderId") ?? "";
  const amount = searchParams.get("amount") ?? "";
  const currency = searchParams.get("currency") ?? "";

  const hash = generatePayHereHash(merchantId, merchantSecret, orderId, +amount, currency);

  return NextResponse.json({ orderId, amount, currency, hash });
}