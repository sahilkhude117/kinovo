
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
  id: string,
  name: string,
  description: string,
  originalPrice: number,
  price: number,
  discount: number,
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

    const { product } = await productResponse.json();

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
    )
  } catch (error) {
    console.error('Error fetching product details:', error);
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-2xl font-bold text-[#2A5C8F] mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The requested resource could not be found.</p>
          <Button asChild className="bg-[#FFD700] hover:bg-[#FFB700] text-[#2A5C8F]">
            <Link href="/">Go to Home Page</Link>
          </Button>
        </div>
      </div>
    );
  }
}

