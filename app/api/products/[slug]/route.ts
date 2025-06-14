import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";


export async function GET (
    request: NextRequest,
    { params }: { params: Promise<{ slug: string}> }
) {
    try {
        const {slug} = await params;
        const product = await prisma.product.findUnique({
            where: {
                slug: slug
            },
            select: {
                id: true,
                name: true,
                description: true,
                originalPrice: true,
                discount: true,
            }
        });

        if (!product) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            product
        })
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
