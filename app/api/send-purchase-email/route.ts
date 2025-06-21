// app/api/send-purchase-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface PurchaseEmailData {
  transactionId: string;
  email: string;
  firstName: string;
  productName: string;
  downloadUrl?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: PurchaseEmailData = await request.json();
    const { transactionId, email, firstName, productName, downloadUrl } = body;

    // Validate required fields
    if (!transactionId || !email || !firstName || !productName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const downloadLink = downloadUrl || `${process.env.NEXT_PUBLIC_API_URL}/download/${transactionId}`;

    // Send purchase confirmation email
    const emailResponse = await resend.emails.send({
      from: 'Kinovo support@kinovo.in',
      to: [email],
      subject: `🎉 Your Kinovo Worksheet is Ready! - ${productName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Purchase Confirmation - Kinovo</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #13C0FA; font-size: 32px; margin-bottom: 10px;">🎉 Thank You for Your Purchase!</h1>
            <p style="font-size: 18px; color: #666;">Your Kinovo worksheet is ready to download</p>
          </div>

          <div style="background: linear-gradient(135deg, #13C0FA 0%, #FBB406 100%); border-radius: 12px; padding: 25px; margin-bottom: 30px; color: white; text-align: center;">
            <h2 style="margin: 0 0 15px 0; font-size: 24px;">Hi ${firstName}! 👋</h2>
            <p style="margin: 0; font-size: 16px; opacity: 0.9;">Your digital worksheet "${productName}" is ready for download!</p>
          </div>

          <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <h3 style="color: #333; margin-top: 0;">📋 Order Details:</h3>
            <p><strong>Product:</strong> ${productName}</p>
            <p><strong>Transaction ID:</strong> ${transactionId}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${downloadLink}" 
               style="background: #13C0FA; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block; transition: background-color 0.3s;">
              📥 Download Your Worksheet
            </a>
          </div>

          <div style="background: #e8f5ff; border-left: 4px solid #13C0FA; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0;">
            <h4 style="margin: 0 0 10px 0; color: #13C0FA;">💡 Pro Tips:</h4>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Save this email for future reference</li>
              <li>Print multiple copies for repeated use</li>
              <li>Check your downloads folder if the file doesn't appear</li>
            </ul>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <p style="font-size: 16px; margin-bottom: 15px;">Need help? We're here for you!</p>
            <p style="margin: 5px 0;">
              <a href="mailto:support@kinovo.com" style="color: #13C0FA; text-decoration: none;">📧 support@kinovo.com</a>
            </p>
          </div>

          <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; text-align: center; color: #666; font-size: 14px;">
            <p>Thanks for choosing Kinovo for your child's learning journey!</p>
            <p style="margin: 10px 0;">
              <a href="${process.env.NEXT_PUBLIC_API_URL}" style="color: #13C0FA; text-decoration: none;">Visit Kinovo</a> | 
              <a href="${process.env.NEXT_PUBLIC_API_URL}/products" style="color: #13C0FA; text-decoration: none;">Browse More Worksheets</a>
            </p>
            <p style="margin-top: 20px; font-size: 12px; color: #999;">
              This email was sent to ${email}. If you have any questions, please contact our support team.
            </p>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Purchase confirmation email sent successfully',
      emailId: emailResponse.data?.id,
    });

  } catch (error) {
    console.error('Error sending purchase email:', error);
    return NextResponse.json(
      { error: 'Failed to send purchase email' },
      { status: 500 }
    );
  }
}