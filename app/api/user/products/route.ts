// app/api/user/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Find all completed transactions for this email
    const userTransactions = await prisma.transaction.findMany({
      where: {
        email: email,
        status: 'COMPLETED'
      },
      include: {
        product: true
      },
      orderBy: {
        completedAt: 'desc'
      }
    });

    // Format the response
    const userProducts = userTransactions.map(transaction => ({
      transactionId: transaction.id,
      purchaseDate: transaction.completedAt,
      product: {
        id: transaction.product.id,
        name: transaction.product.name,
        description: transaction.product.description,
        downloadUrl: transaction.product.downloadUrl,
        thumbnailUrl: transaction.product.thumbnailUrl,
      },
      downloadLink: transaction.product.downloadUrl || `/download/${transaction.id}`
    }));

    return NextResponse.json({
      success: true,
      products: userProducts,
      totalProducts: userProducts.length
    });

  } catch (error) {
    console.error('Error fetching user products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user products' },
      { status: 500 }
    );
  }
}

// GET method for authenticated users (when they have an account)
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');
    const email = url.searchParams.get('email');

    if (!userId && !email) {
      return NextResponse.json(
        { error: 'User ID or email is required' },
        { status: 400 }
      );
    }

    let whereCondition: any = {
      status: 'COMPLETED'
    };

    if (userId) {
      whereCondition.userId = userId;
    } else if (email) {
      whereCondition.email = email;
    }

    const userTransactions = await prisma.transaction.findMany({
      where: whereCondition,
      include: {
        product: true
      },
      orderBy: {
        completedAt: 'desc'
      }
    });

    const userProducts = userTransactions.map(transaction => ({
      transactionId: transaction.id,
      purchaseDate: transaction.completedAt,
      amount: transaction.amount,
      product: {
        id: transaction.product.id,
        name: transaction.product.name,
        description: transaction.product.description,
        downloadUrl: transaction.product.downloadUrl,
        thumbnailUrl: transaction.product.thumbnailUrl,
      },
      downloadLink: transaction.product.downloadUrl || `/download/${transaction.id}`
    }));

    return NextResponse.json({
      success: true,
      products: userProducts,
      totalProducts: userProducts.length
    });

  } catch (error) {
    console.error('Error fetching user products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user products' },
      { status: 500 }
    );
  }
}