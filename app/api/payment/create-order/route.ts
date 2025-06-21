import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import Razorpay from 'razorpay';
import { error } from "console";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            firstName,
            lastName,
            email,
            howDidYouHear,
            productId,
            amount
        } = body;

        // Validate required fields
        if (!firstName || !email || !howDidYouHear || !productId || !amount) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const product = await prisma.product.findUnique({
            where: { id: productId }
        });

        if (!product) {
            return NextResponse.json(
                { error: 'Product not fount' },
                { status: 404 }
            );
        }

        const transaction = await prisma.transaction.create({
            data: {
                firstName,
                lastName: lastName || '',
                email,
                howDidYouHear: howDidYouHear || '',
                productId,
                amount,
                currency: 'INR',
                status: "PENDING",
            }
        });

        // Create Razorpay order
        const razorpayOrder = await razorpay.orders.create({
            amount: Math.round(amount * 100),
            currency: 'INR',
            receipt: `order_${transaction.id}`,
            notes: {
                transactionId: transaction.id,
                productId: productId,
                email: email,
            }
        });

        // Update transaction with Razorpay order ID
        await prisma.transaction.update({
            where: { id: transaction.id },
            data: {
                razorpayOrderId: razorpayOrder.id
            }
        });

        return NextResponse.json({
            success: true,
            razorpayOrder: {
                id: razorpayOrder.id,
                amount: razorpayOrder.amount,
                currency: razorpayOrder.currency,
            },
            transactionId: transaction.id,
        });
    } catch (error) {
        console.error('Error creating order:', error);
        return NextResponse.json(
            { error: 'Failed to create order' },
            { status: 500 }
        );
    }
}