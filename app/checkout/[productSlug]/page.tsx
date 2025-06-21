// app/checkout/[productSlug]/page.tsx
import Checkout from '@/components/ll/Checkout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Type definitions
interface OrderItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface Product {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  price: number;
  discount: number;
  slug: string;
  downloadUrl?: string;
  thumbnailUrl?: string;
  category?: string;
  isActive: boolean;
}

interface OrderData {
  items: OrderItem[];
  subtotal: number;
  tax?: number;
  discount?: number;
  total: number;
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) {
  try {
    const { productSlug } = await params;

    const productResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productSlug}`, {
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!productResponse.ok) {
      throw new Error('Product not found');
    }

    const { product }: { product: Product } = await productResponse.json();

    if (!product || !product.isActive) {
      throw new Error('Product not available');
    }

    const Order: OrderData = {
      items: [
        {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.originalPrice,
          quantity: 1
        }
      ],
      subtotal: product.originalPrice,
      discount: product.discount,
      total: (product.originalPrice - product.discount)
    };

    return (
      <Checkout order={Order} />
    );
  } catch (error) {
    console.error('Error fetching product details:', error);
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-2xl font-bold text-[#2A5C8F] mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The requested product could not be found or is no longer available.</p>
          <div className="space-y-4">
            <Button asChild className="bg-[#FFD700] hover:bg-[#FFB700] text-[#2A5C8F] w-full">
              <Link href="/checkout/combo">Go to Combo Pack</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}