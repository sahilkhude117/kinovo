import prisma from "@/lib/db";
import { Phone } from "lucide-react";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export const POST = async (req: Request) => {
    try {

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID || 'default',
            key_secret: process.env.RAZORPAY_KEY_SECRET || 'default',
        })

        // parse request body
        const body = await req.json();
        const { 
            amount,
            currency = 'INR',
            receipt,
            userId,
            email,
            name,
            productId,
            phone,
            howDidYouHear,
        } = body;

        // validate input
        if (!amount || !phone || !receipt || !email || !name || !productId) {
            return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
        }

        const product = await prisma.product.findUnique({
            where: {
                id: productId
            }
        });

        if (!product) {
            return NextResponse.json(
                { error: 'Product Not Found' },
                { status: 404 } 
            );
        }

        //Create Razorpay order
        const order = await razorpay.orders.create({
            amount: amount * 100,
            currency,
            receipt,
        })

        const purchase = await prisma.purchase.create({
            data: {
                email,
                name,
                whatappNumber: phone,
                howHeardAboutUs: howDidYouHear || "",
                amount,
                currency,
                productId,
                razorpayOrderId: order.id,
                paymentStatus: 'PENDING',
                userId: userId || null
            }
        })

        return NextResponse.json({
            success: true,
            order,
            purchaseId: purchase.id
        },{
            status: 200
        })
    } catch(e){
        console.error(e);
        return NextResponse.json({
            error: 'Failed to create order'
        },{
            status : 500
        })
    }
};