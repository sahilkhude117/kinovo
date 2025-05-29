import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import prisma from '@/lib/db';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = body;

    // Validate input
    if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    // Generate expected signature
    const secret = process.env.RAZORPAY_KEY_SECRET!;
    const sign = `${razorpayOrderId}|${razorpayPaymentId}`;
    const expectedSignature = crypto.createHmac('sha256', secret).update(sign).digest('hex');

    // Verify signature
    if (razorpaySignature === expectedSignature) {
      try {
        // Update database
        // await prisma.purchase.update({
        //   where: { orderId: razorpayOrderId },
        //   data: {
        //     status: 'COMPLETED',
        //     paymentId: razorpayPaymentId,
        //     purchasedAt: new Date(),
        //   },
        // });

        return NextResponse.json(
          { success: true, message: 'Payment verified' },
          { status: 200 }
        );
      } catch (dbError) {
        console.error('Database update failed:', dbError);
        return NextResponse.json(
          { error: 'Failed to update purchase record' },
          { status: 500 }
        );
      }
    } else {
      // Update database for failed payment
    //   await prisma.purchase.update({
    //     where: { orderId: razorpayOrderId },
    //     data: {
    //       status: 'FAILED',
    //       paymentId: razorpayPaymentId,
    //       purchasedAt: new Date(),
    //     },
    //   });

      return NextResponse.json(
        { success: false, message: 'Payment verification failed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to verify order' }, { status: 500 });
  }
};