import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import crypto from 'crypto';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            transactionId,
            razorpayOrderId,
            razorpayPaymentId,
            razorpaySignature,
        } = body;

        const razorpay_secret = process.env.RAZORPAY_KEY_SECRET! || '';

        if (!transactionId || !razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
            return NextResponse.json(
                { error: "Missing required fields"},
                { status: 400 }
            );
        }

        const transaction = await prisma.transaction.findUnique({
            where: { id: transactionId },
            include: { product: true }
        });

        if (!transaction) {
            return NextResponse.json(
                { error: 'Transaction Not Found!'},
                { status: 404 }
            )
        }

        const expectedSignature = crypto
            .createHmac('sha256', razorpay_secret)
            .update(`${razorpayOrderId}|${razorpayPaymentId}`)
            .digest('hex');

        const isSignatureValid = expectedSignature === razorpaySignature;

        if (!isSignatureValid) {
            // update transaction status to FAILED
            await prisma.transaction.update({
                where: { id: transactionId },
                data: {
                    status: 'FAILED',
                    razorpayPaymentId,
                    razorpaySignature,
                    updatedAt: new Date(),
                }
            });

            return NextResponse.json(
                { success: false, error: "Invalid Signature" },
                { status: 400 }
            );
        }

        // Update transaction status to COMPLETED
        const updatedTransaction = await prisma.transaction.update({
            where: { id: transactionId },
            data: {
                status: 'COMPLETED',
                razorpayPaymentId,
                razorpaySignature,
                completedAt: new Date(),
                updatedAt: new Date(),
            },
            include: { product: true }
        });

        // Send success email (trigger edge function)
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/send-purchase-email`, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({
                    transactionId: updatedTransaction.id,
                    email: updatedTransaction.email,
                    firstName: updatedTransaction.product.name,
                    productName: updatedTransaction.product.name,
                    downloadUrl: updatedTransaction.product.downloadUrl,
                }),
            });
        } catch (emailError) {
            console.error('Failed to send purchase email:', emailError);
        }

        return NextResponse.json({
            success: true,
            transaction: {
                id: updatedTransaction.id,
                status: updatedTransaction.status,
                product: updatedTransaction.product
            }
        });
    } catch (error) {
        console.error("Error verifying payment:", error);
        return NextResponse.json(
            { error: 'Failed to verify payment' },
            { status: 500 }
        );
    }
}