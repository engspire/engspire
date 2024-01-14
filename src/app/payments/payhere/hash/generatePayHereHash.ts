import * as crypto from 'crypto';

export function generatePayHereHash(merchantId: string, merchantSecret: string, orderId: string, amount: number, currency: string, statusCode?: string) {
  merchantId = process.env.PAYHERE_MERCHANT_ID ?? "";
  merchantSecret = process.env.PAYHERE_MERCHANT_SECRET ?? "";

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