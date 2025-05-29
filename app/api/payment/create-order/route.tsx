import prisma from "@/lib/db";
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
            currency,
            receipt,
            userId,
            email,
            name,
            productId
        } = body;

        // validate input
        // if (!amount || !currency || !receipt || !email || !name || !productId) {
        //     return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
        // }

        //Create Razorpay order
        const order = await razorpay.orders.create({
            amount: amount * 100,
            currency,
            receipt,
        })

        // await prisma.purchase.create({
        //     data:{
        //         orderId: order.id,
        //         userId: userId || null,
        //         productId,
        //         status: 'PENDING',
        //         email,
        //         name,
        //     }
        // });

        return NextResponse.json({
            order,
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