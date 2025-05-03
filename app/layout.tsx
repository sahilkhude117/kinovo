import type React from "react"
import "@/styles/globals.css"
import { Baloo_2 } from "next/font/google"
import localFont from 'next/font/local'
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/AuthProvider"

const baloo = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-baloo',
  weight: ['400','500','600','700','800']
});

const antiqueOlive = localFont({
  src: [
    {
      path: '../public/fonts/Antique Olive Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Antique Olive Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: "--font-antique-olive"
});

export const metadata: Metadata = {
  title: "Kinovo",
  description: "Learning Made Simple",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${baloo.variable} ${antiqueOlive.variable}`}>
           <AuthProvider>
              {children}
              <Toaster/>
            </AuthProvider>
      </body>
    </html>
  )
}




