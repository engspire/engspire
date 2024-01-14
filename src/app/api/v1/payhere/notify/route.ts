import { NextResponse } from 'next/server';
import { generatePayHereHash } from '../hash/generatePayHereHash';

export async function POST(request: Request) {
  const formData = await request.formData();

  const merchantId = formData.get("merchant_id") as string;
  const orderId = formData.get("order_id") as string;
  const amount = formData.get("payhere_amount") as string;
  const currency = formData.get("payhere_currency") as string;
  const statusCode = formData.get("status_code") as string;
  const md5sig = formData.get("md5sig") as string;

  if (!merchantId) throw new Error("merchant_id is missing.");
  if (!orderId) throw new Error("order_id is missing.");
  if (!amount) throw new Error("payhere_amount is missing.");
  if (!currency) throw new Error("payhere_currency is missing.");
  if (!statusCode) throw new Error("status_code is missing.");
  if (!md5sig) throw new Error("md5sig is missing.");

  const localMerchantId = process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID ?? "";
  const localMerchantSecret = process.env.PAYHERE_MERCHANT_SECRET ?? "";

  const { hash: localMd5sig } = generatePayHereHash(merchantId, orderId, +amount, currency, statusCode);

  if (localMd5sig === md5sig && statusCode === '2') {
    console.log("Save the record to the database.");
    console.log({ localMerchantId, merchantId, localMerchantSecret, orderId, amount, currency, statusCode, md5sig, localMd5sig });
    return NextResponse.json({ ok: true });
  } else {
    console.log("Payment attempt failed.");
    console.log({ localMerchantId, merchantId, localMerchantSecret, orderId, amount, currency, statusCode, md5sig, localMd5sig });
    return NextResponse.json({ ok: false });
  }
}