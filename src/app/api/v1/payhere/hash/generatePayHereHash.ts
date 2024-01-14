import * as crypto from 'crypto';

export function generatePayHereHash(merchantId: string, orderId: string, amount: number, currency: string, statusCode?: string) {
  const merchantSecret = merchantId === process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID ? process.env.PAYHERE_MERCHANT_SECRET ?? "" : "ERROR: Invalid Merchant ID";

  let hashInput: string;
  if (statusCode) {
    hashInput =
      merchantId +
      orderId +
      amount.toFixed(2) +
      currency +
      statusCode +
      crypto.createHash('md5').update(merchantSecret).digest('hex').toUpperCase();
  } else {
    hashInput =
      merchantId +
      orderId +
      amount.toFixed(2) +
      currency +
      crypto.createHash('md5').update(merchantSecret).digest('hex').toUpperCase();
  }

  const hash: string = crypto.createHash('md5').update(hashInput).digest('hex').toUpperCase();

  return hash;
}