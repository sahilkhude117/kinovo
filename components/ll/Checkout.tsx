'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '../ui/button';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  howDidYouHear: string;
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  howDidYouHear?: string;
}

interface CheckoutPageProps {
  order: OrderData;
}

interface OrderData {
  items: OrderItem[];
  subtotal: number;
  tax?: number;
  discount?: number;
  total: number;
}

interface OrderItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const Checkout: React.FC<CheckoutPageProps> = ({ order }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    howDidYouHear: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [generalError, setGeneralError] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const router = useRouter();

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // How did you hear validation
    if (!formData.howDidYouHear) {
      newErrors.howDidYouHear = "Please select how you heard about us";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setGeneralError('');

    if (!validateForm()) {
      setLoading(false);
      router.push('#billing')
      return;
    }

    try {
      await onBuy();
    } catch (error) {
      console.error('Failed to buy product', error);
      setGeneralError('Failed to process your order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const onBuy = async () => {
    try {
      const isLoaded = await loadRazorpay();
      if (!isLoaded) {
        throw new Error('Razorpay script failed to load');
      }

      // Create transaction first
      const response = await axios.post(`${baseUrl}/api/payment/create-order`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        howDidYouHear: formData.howDidYouHear,
        productId: order.items[0].id,
        amount: order.total,
      });

      const { razorpayOrder, transactionId } = response.data;
      await handlePurchase(razorpayOrder, transactionId);
    } catch (error) {
      console.error('Error during purchase:', error);
      throw error;
    }
  }

  const handlePurchase = useCallback(
    async (razorpayOrder: any, transactionId: string) => {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: razorpayOrder.amount,
        currency: 'INR',
        name: 'Kinovo',
        description: 'Digital Worksheet Purchase',
        order_id: razorpayOrder.id,
        handler: async (response: RazorpayResponse) => {
          const payload = {
            transactionId,
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          };

          try {
            const verify = await axios.post(`${baseUrl}/api/payment/verify-payment`, payload);

            if (verify.data.success) {
              router.push(`/payment/success/${transactionId}`);
            } else {
              router.push(`/payment/failed?transactionId=${transactionId}`);
            }
          } catch (e) {
            console.error('Payment verification failed', e);
            router.push(`/payment/failed?transactionId=${transactionId}`);
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email
        },
        theme: {
          color: '#13C0FA'
        }
      };
      // @ts-ignore
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    },
    [formData, router]
  );

  const loadRazorpay = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      }
      script.onerror = () => {
        resolve(false);
      }
      document.body.appendChild(script);
    })
  }, []);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8 mb-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Billing Details Section */}
          <div id='billing' className="space-y-2">
            <div>
              <h1 className="text-2xl md:text-5xl font-baloo font-bold mb-2 md:mb-8 tracking-tight">
                Billing details
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2 md:space-y-6">
              {/* General Error */}
              {generalError && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                  {generalError}
                </div>
              )}

              {/* Name Fields */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-600 text-xs md:text-sm font-antique-olive">
                    First name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    placeholder='Tony'
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`bg-gray-50 text-sm md:text-base border transition-all duration-200 font-antique-olive ${
                      errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#13C0FA]'
                    } text-black focus:ring-[#13C0FA]/20`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-600 text-xs md:text-sm font-antique-olive">
                    Last name (Optional)
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    placeholder='Stark'
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`bg-gray-50 text-sm md:text-base border transition-all duration-200 font-antique-olive ${
                      errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#13C0FA]'
                    } text-black focus:ring-[#13C0FA]/20`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-600 text-xs md:text-sm font-antique-olive">
                  Email address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`bg-gray-50 border text-sm md:text-base transition-all duration-200 font-antique-olive ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#13C0FA]'
                  } text-black focus:ring-[#13C0FA]/20`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* How did you hear about us */}
              <div className="space-y-2">
                <Label htmlFor="howDidYouHear" className="text-gray-600 text-xs md:text-sm">
                  How did you hear about us? <span className="text-red-500">*</span>
                </Label>
                <Select 
                  value={formData.howDidYouHear} 
                  onValueChange={(value) => handleInputChange('howDidYouHear', value)}
                >
                  <SelectTrigger className={`border transition-all duration-200 text-sm md:text-base ${
                    errors.howDidYouHear ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#13C0FA]'
                  } focus:ring-[#13C0FA]`}>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent className="border-gray-500">
                    <SelectItem value="Already Customer" className="hover:bg-gray-800">Already Customer</SelectItem>
                    <SelectItem value="Google Search" className="hover:bg-gray-800">Google Search</SelectItem>
                    <SelectItem value="Instagram" className="hover:bg-gray-800">Instagram</SelectItem>
                    <SelectItem value="Friend Referral" className="hover:bg-gray-800">Friend Referral</SelectItem>
                    <SelectItem value="Facebook" className="hover:bg-gray-800">Facebook</SelectItem>
                    <SelectItem value="Other" className="hover:bg-gray-800">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.howDidYouHear && (
                  <p className="text-red-500 text-xs mt-1">{errors.howDidYouHear}</p>
                )}
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="space-y-2 md:space-y-6">
            <Card className="bg-white border-blue-50 shadow-xl border-2">
              <CardHeader className="pb-4">
                <CardTitle className="text-black text-xl font-semibold font-baloo">Your order</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Order Items */}
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div>
                      <h3 className="text-black pr-2 font-bold font-antique-olive">{item.name}</h3>
                      <p className="text-gray-500 text-xs md:text-sm font-antique-olive">
                        {item.description} ✦ {item.quantity}
                      </p>
                    </div>
                    <p className="text-black font-semibold font-antique-olive">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                ))}

                <Separator className="bg-gray-300" />

                <div className="flex justify-between">
                  <p className="text-gray-600 text-sm md:text-base font-antique-olive">Subtotal</p>
                  <p className="text-black font-antique-olive">{formatCurrency(order.subtotal)}</p>
                </div>

                {order.tax && (
                  <div className="flex justify-between">
                    <p className="text-gray-600 text-sm md:text-base font-antique-olive">Tax</p>
                    <p className="text-black font-antique-olive">{formatCurrency(order.tax)}</p>
                  </div>
                )}

                {order.discount && (
                  <div className="flex justify-between">
                    <p className="text-green-600 text-sm md:text-base font-antique-olive">Discount</p>
                    <p className="text-green-600 font-antique-olive">-{formatCurrency(order.discount)}</p>
                  </div>
                )}

                <Separator className="bg-gray-300" />

                <div className="flex justify-between text-lg font-bold">
                  <p className="text-black font-antique-olive">Total</p>
                  <p className="text-black font-antique-olive">{formatCurrency(order.total)}</p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Section */}
            <Card className="bg-gray-900 border-gray-800 shadow-2xl">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-400 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <span className="text-white font-medium">Pay with UPI QR</span>
                  <span className="text-blue-400 text-xs bg-blue-400/20 px-2 py-1 rounded">UPI</span>
                </div>

                <p className="text-gray-400 text-xs md:text-sm pl-7">
                  It uses UPI apps like BHIM, Paytm, Google Pay, PhonePe or any Banking UPI app to make payment.
                </p>

                <div className="pt-4">
                  <form onSubmit={handleSubmit}>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#FBB406] hover:bg-[#13C0FA] text-black font-semibold py-4 text-lg transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <span className={`transition-all duration-300 ${isHovered ? 'tracking-wider' : ''}`}>
                        {loading ? 'Processing...' : 'Proceed to Payment'}
                      </span>
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;