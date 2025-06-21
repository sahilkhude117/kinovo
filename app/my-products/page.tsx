// app/my-products/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, Calendar, Mail, Package, ExternalLink, ShoppingBag, Search } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';

interface UserProduct {
  transactionId: string;
  purchaseDate: string;
  amount?: number;
  product: {
    id: string;
    name: string;
    description: string;
    downloadUrl?: string;
    thumbnailUrl?: string;
  };
  downloadLink: string;
}

interface UserProductsResponse {
  success: boolean;
  products: UserProduct[];
  totalProducts: number;
}

export default function MyProductsPage() {
  const [email, setEmail] = useState('');
  const [products, setProducts] = useState<UserProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const fetchUserProducts = async () => {
    if (!email.trim()) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');
    setEmailError('');
    
    try {
      const response = await axios.post('/api/user/products', {
        email: email.trim()
      });

      const data: UserProductsResponse = response.data;
      
      if (data.success) {
        setProducts(data.products);
      } else {
        setError('Failed to fetch your products. Please try again.');
      }
    } catch (err: any) {
      if (err.response?.status === 404) {
        // No products found - this is handled in the UI
        setProducts([]);
      } else {
        setError('An error occurred while fetching your products. Please try again.');
      }
      console.error('Error:', err);
    } finally {
      setLoading(false);
      setHasSearched(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchUserProducts();
  };

  const handleDownload = async (downloadLink: string, productName: string) => {
    try {
      const link = document.createElement('a');
      link.href = downloadLink;
      link.download = productName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
      window.open(downloadLink, '_blank');
    }
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            My Products
          </h1>
          <p className="text-lg text-gray-600">
            Enter your email to view your purchased products
          </p>
        </div>

        {/* Email Input Form */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError('');
                      }}
                      className={emailError ? 'border-red-500' : ''}
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                  </div>
                  <Button type="submit" disabled={loading} className="flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    {loading ? 'Searching...' : 'Find Products'}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Loading State */}
        {loading && (
          <Card className="mb-8 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading your products...</p>
            </CardContent>
          </Card>
        )}

        {/* Error State */}
        {error && (
          <Alert variant="destructive" className="mb-8">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Current Email Display */}
        {hasSearched && email && !loading && (
          <div className="mb-6 text-center">
            <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Showing products for: {email}
            </p>
          </div>
        )}

        {/* Products List */}
        {hasSearched && products.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900">
                Your Products ({products.length})
              </h2>
            </div>

            <div className="grid gap-6">
              {products.map((userProduct) => (
                <Card key={userProduct.transactionId} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        {userProduct.product.thumbnailUrl ? (
                          <img
                            src={userProduct.product.thumbnailUrl}
                            alt={userProduct.product.name}
                            className="w-32 h-32 object-cover rounded-lg border"
                          />
                        ) : (
                          <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Package className="w-12 h-12 text-gray-400" />
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-grow">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {userProduct.product.name}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {userProduct.product.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              Purchased: {formatDate(userProduct.purchaseDate)}
                            </div>
                            {userProduct.amount && (
                              <div className="flex items-center gap-1">
                                <span>Amount: {formatCurrency(userProduct.amount)}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-1">
                              <span>Order ID: {userProduct.transactionId.slice(-8)}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                          <Button
                            onClick={() => handleDownload(userProduct.downloadLink, userProduct.product.name)}
                            className="flex items-center gap-2"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </Button>
                          
                          {userProduct.product.downloadUrl && (
                            <Button
                              variant="outline"
                              onClick={() => window.open(userProduct.product.downloadUrl, '_blank')}
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              View Online
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* No Products State */}
        {hasSearched && products.length === 0 && !loading && !error && (
          <Card className="text-center py-12 shadow-lg">
            <CardContent>
              <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any Kinovo worksheets purchased with this email address. 
                Make sure you're using the same email you used for your purchase.
              </p>
              <div className="space-y-4">
                <Button asChild size="lg" className="bg-[#FFD700] hover:bg-[#FFB700] text-[#2A5C8F]">
                  <Link href="/checkout/combo">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Buy Combo Pack
                  </Link>
                </Button>
                <div className="text-sm text-gray-500">
                  Or{' '}
                  <Link href="/products" className="text-blue-600 hover:text-blue-800 underline">
                    browse individual products
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Help Section */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Need Help?
            </h3>
            <div className="text-blue-800 space-y-2">
              <p>• Use the same email address you used when making your purchase</p>
              <p>• Downloads are available immediately after successful payment</p>
              <p>• All purchases are linked to your account email</p>
              <p>• You can re-download your products anytime</p>
              <p>• Contact support if you're having trouble accessing your products</p>
            </div>
            <div className="mt-4">
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Contact Support →
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}