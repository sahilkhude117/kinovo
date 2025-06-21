
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Download, Mail, ArrowLeft } from 'lucide-react';
import prisma from '@/lib/db';

interface SuccessPageProps {
  params: Promise<{ transactionId: string }>;
}

export default async function PaymentSuccessPage({ params }: SuccessPageProps) {
  try {
    const { transactionId } = await params;

    // Fetch transaction details
    const transaction = await prisma.transaction.findUnique({
      where: { id: transactionId },
      include: { product: true }
    });

    if (!transaction || transaction.status !== 'COMPLETED') {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6 text-center">
              <div className="text-red-500 text-6xl mb-4">❌</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Transaction Not Found</h2>
              <p className="text-gray-600 mb-4">
                The transaction could not be found or is not completed yet.
              </p>
              <Button asChild>
                <Link href="/">Go Home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    const formatCurrency = (amount: number): string => {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
      }).format(amount);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-2xl mx-auto pt-8">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Payment Successful! 🎉
            </h1>
            <p className="text-lg text-gray-600">
              Thank you {transaction.firstName}! Your worksheet is ready.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="mb-6 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Order Confirmation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                    {transaction.id}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Product:</span>
                  <span className="font-semibold">{transaction.product.name}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Amount Paid:</span>
                  <span className="font-bold text-green-600 text-lg">
                    {formatCurrency(transaction.amount)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Email:</span>
                  <span className="text-sm">{transaction.email}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Purchase Date:</span>
                  <span className="text-sm">
                    {transaction.completedAt?.toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Section */}
          <Card className="mb-6 shadow-lg">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Download className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Download Your Worksheet</h3>
                <p className="text-gray-600 mb-4">
                  Your digital worksheet is ready for download. Click the button below to get started!
                </p>
                
                {transaction.product.downloadUrl ? (
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 text-lg"
                  >
                    <a 
                      href={transaction.product.downloadUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Now
                    </a>
                  </Button>
                ) : (
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 text-lg"
                  >
                    <Link href={`/download/${transaction.id}`}>
                      <Download className="w-5 h-5 mr-2" />
                      Download Now
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Email Confirmation */}
          <Card className="mb-6 bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">
                    Confirmation email sent!
                  </p>
                  <p className="text-sm text-blue-700">
                    Check your inbox at {transaction.email} for download instructions and receipt.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/products">
                Browse More Worksheets
              </Link>
            </Button>
          </div>

          {/* Support */}
          <div className="text-center mt-8 p-4 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-2">Need help? Contact our support team</p>
            <a 
              href="mailto:support@kinovo.com" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              support@kinovo.com
            </a>
          </div>
        </div>
      </div>
    );

  } catch (error) {
    console.error('Error loading success page:', error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-4">
              Unable to load transaction details. Please try again.
            </p>
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}