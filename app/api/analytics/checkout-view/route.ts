import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { error } from "console";
import { toFormData } from "axios";

export async function POST(request: NextRequest) {
    try {
        const {
            productId,
        } = await request.json();

        if (!productId) {
            return NextResponse.json(
                { error: 'Product ID is required' },
                { status: 400 }
            );
        }

        await prisma.productAnalytics.upsert({
            where: {
                productId,
            },
            update: {
                views: {
                    increment: 1
                }
            },
            create: {
                productId,
                views: 1,
                purchases: 0,
            }
        });

        return NextResponse.json({
            success: true,
            message: "Analytics tracked successfully"
        });
    } catch (error) {
        console.error("Error Tracking Checkout view:", error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}