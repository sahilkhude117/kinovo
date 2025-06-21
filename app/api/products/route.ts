// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const isActive = searchParams.get('active');
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');

    // Build where clause
    const where: any = {};
    
    if (category) {
      where.category = category;
    }
    
    if (isActive !== null) {
      where.isActive = isActive === 'true';
    } else {
      // Default to only active products
      where.isActive = true;
    }

    // Build query options
    const queryOptions: any = {
      where,
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
      orderBy: {
        createdAt: 'desc',
      },
    };

    // Add pagination if provided
    if (limit) {
      queryOptions.take = parseInt(limit, 10);
    }
    
    if (offset) {
      queryOptions.skip = parseInt(offset, 10);
    }

    // Fetch products
    const products = await prisma.product.findMany(queryOptions);

    // Get total count for pagination
    const total = await prisma.product.count({ where });

    return NextResponse.json({
      success: true,
      products,
      total,
      pagination: {
        limit: limit ? parseInt(limit, 10) : null,
        offset: offset ? parseInt(offset, 10) : null,
        total,
      },
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      slug,
      name,
      description,
      originalPrice,
      price,
      discount = 0,
      isActive = true,
      downloadUrl,
      thumbnailUrl,
      category,
    } = body;

    // Validate required fields
    if (!slug || !name || !description || originalPrice === undefined || price === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: slug, name, description, originalPrice, price' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingProduct = await prisma.product.findUnique({
      where: { slug },
    });

    if (existingProduct) {
      return NextResponse.json(
        { error: 'Product with this slug already exists' },
        { status: 409 }
      );
    }

    // Create product
    const product = await prisma.product.create({
      data: {
        slug,
        name,
        description,
        originalPrice,
        price,
        discount,
        isActive,
        downloadUrl,
        thumbnailUrl,
        category,
      },
    });

    return NextResponse.json({
      success: true,
      product,
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}