import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const outfit = Outfit({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Voltzy Support",
  description: "Get help and support for Voltzy - connecting homeowners with qualified electricians.",
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased font-sans text-[#2D2D2D] bg-[#FAFAFA]">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] border-b border-[#E0E0E0]">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-3">
                <img src="/assets/logo.png" alt="Voltzy" className="h-10 w-10" />
                <span className="text-xl font-bold text-[#2D2D2D]">Voltzy</span>
              </Link>
            </div>
          </div>
        </nav>
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
