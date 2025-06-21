// app/api/products/[productSlug]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ productSlug: string }> }
) {
  try {
    const { productSlug } = await params;

    if (!productSlug) {
      return NextResponse.json(
        { error: 'Product slug is required' },
        { status: 400 }
      );
    }

    // Fetch product by slug
    const product = await prisma.product.findUnique({
      where: {
        slug: productSlug,
      },
      select: {
        id: true,
        slug: true,
        name: true,
        description: true,
        originalPrice: true,
        price: true,
        discount: true,
        isActive: true,
        downloadUrl: true,
        thumbnailUrl: true,
        category: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Check if product is active
    if (!product.isActive) {
      return NextResponse.json(
        { error: 'Product is not available' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      product,
    });

  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: Add other HTTP methods if needed
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ productSlug: string }> }
) {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ productSlug: string }> }
) {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ productSlug: string }> }
) {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}