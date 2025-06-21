// app/payment/failed/page.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { XCircle, ArrowLeft, RefreshCw, Mail } from 'lucide-react';

interface FailedPageProps {
  searchParams: Promise<{ transactionId?: string }>;
}

export default async function PaymentFailedPage({ searchParams }: FailedPageProps) {
  const { transactionId } = await searchParams;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        {/* Failed Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Payment Failed
          </h1>
          <p className="text-lg text-gray-600">
            Unfortunately, we couldn't process your payment.
          </p>
        </div>

        {/* Error Details Card */}
        <Card className="mb-6 shadow-lg border-red-200">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-red-700">
                What happened?
              </h3>
              <div className="text-left space-y-3 bg-red-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  <strong>Possible reasons for payment failure:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Insufficient balance in your account</li>
                  <li>Network connectivity issues</li>
                  <li>Bank server temporarily unavailable</li>
                  <li>Payment cancelled by user</li>
                  <li>Card/UPI transaction limit exceeded</li>
                </ul>
              </div>

              {transactionId && (
                <div className="bg-gray-100 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-600">
                    <strong>Transaction Reference:</strong>
                  </p>
                  <p className="font-mono text-sm">{transactionId}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Actions Card */}
        <Card className="mb-6 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              What can you do now?
            </h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <RefreshCw className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium mb-2">Try Again</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Go back and retry your payment
                </p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/checkout">
                    Retry Payment
                  </Link>
                </Button>
              </div>

              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-medium mb-2">Contact Support</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Need help with your payment?
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:support@kinovo.com">
                    Get Help
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips Card */}
        <Card className="mb-6 bg-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <h4 className="font-medium text-yellow-800 mb-2">💡 Tips for successful payment:</h4>
            <ul className="text-sm text-yellow-700 space-y-1 list-disc list-inside">
              <li>Check your internet connection</li>
              <li>Ensure sufficient balance in your account</li>
              <li>Try using a different payment method</li>
              <li>Clear your browser cache and cookies</li>
              <li>Contact your bank if the issue persists</li>
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/products">
              Browse Worksheets
            </Link>
          </Button>
        </div>

        {/* Support Footer */}
        <div className="text-center mt-8 p-4 bg-white rounded-lg shadow">
          <p className="text-gray-600 mb-2">
            Still having trouble? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <a 
              href="mailto:support@kinovo.com" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              support@kinovo.com
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="text-gray-600">Response within 24 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}