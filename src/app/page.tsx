'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  const supportCategories = [
    {
      title: "For Homeowners",
      description: "Everything you need to know about finding and working with electricians",
      items: [
        "Finding and booking electricians",
        "Managing appointments and payments",
        "Rating and reviewing services",
        "Emergency service requests",
        "Account settings and preferences"
      ]
    },
    {
      title: "For Electricians",
      description: "Resources to help you manage and grow your electrical business",
      items: [
        "Profile setup and verification",
        "Managing service availability",
        "Handling job requests",
        "Payment processing",
        "Professional guidelines"
      ]
    }
  ];

  const contactMethods = [
    {
      title: "Support",
      email: "support@voltzy.com",
      description: "For general inquiries and assistance",
      response: "Response within 24 hours"
    },
    {
      title: "Business Inquiries",
      email: "business@voltzy.com",
      description: "For partnerships and business opportunities",
      response: "Response within 48 hours"
    }
  ];

  const colors = {
    primary: '#EBE3D5',
    primaryDark: '#D6CCBB',
    primaryLight: '#F5F0E8',
    accent: '#4F4F4F',
    accentLight: '#6E6E6E',
    textPrimary: '#2D2D2D',
    textSecondary: '#666666',
    textLight: '#999999',
    success: '#4CAF50',
    error: '#E57373',
    warning: '#FFB74D',
    background: '#FAFAFA',
    surface: '#FFFFFF',
    cardBg: '#F8F8F8',
    border: '#E0E0E0',
    divider: '#EEEEEE',
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#EBE3D5]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#D6CCBB]/30 to-[#F5F0E8]/30"></div>
        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[#2D2D2D]">
              How can we help?
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions and get support for Voltzy.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#FAFAFA] to-transparent"></div>
      </section>

      {/* Support Categories */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-20">
            {supportCategories.map((category, idx) => (
              <div key={idx} className="transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-4 text-[#2D2D2D]">{category.title}</h2>
                  <p className="text-lg text-[#666666]">{category.description}</p>
                </div>
                <div className="bg-[#FFFFFF] rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-[#E0E0E0]">
                  <ul className="space-y-6">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#4F4F4F] mt-2.5 mr-4 shrink-0"></span>
                        <span className="text-[#2D2D2D] text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Contact Section */}
            <div className="pt-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-[#2D2D2D]">Contact Us</h2>
                <p className="text-lg text-[#666666]">Get in touch with our team for assistance</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {contactMethods.map((method, idx) => (
                  <div key={idx} className="bg-[#FFFFFF] rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-[#E0E0E0]">
                    <h3 className="text-2xl font-semibold mb-4 text-[#2D2D2D]">{method.title}</h3>
                    <p className="text-[#666666] mb-6 text-lg">{method.description}</p>
                    <div className="space-y-3">
                      <p className="text-[#2D2D2D] flex items-center">
                        <svg className="w-5 h-5 mr-3 text-[#4F4F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${method.email}`} className="text-[#4F4F4F] hover:text-[#6E6E6E] font-medium">
                          {method.email}
                        </a>
                      </p>
                      <p className="text-[#666666] flex items-center">
                        <svg className="w-5 h-5 mr-3 text-[#4F4F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {method.response}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* App Download */}
            <div className="pt-12">
              <div className="bg-[#EBE3D5] rounded-2xl shadow-md p-12 text-center border border-[#D6CCBB]">
                <h2 className="text-3xl font-bold mb-6 text-[#2D2D2D]">Get the App</h2>
                <p className="text-lg text-[#666666] mb-8 max-w-2xl mx-auto">
                  Download Voltzy to connect with qualified electricians or manage your electrical service business.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href="#" className="inline-flex items-center px-8 py-4 rounded-xl bg-[#4F4F4F] text-white hover:bg-[#6E6E6E] transition-colors duration-300">
                    <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    Download on the App Store
                  </a>
                  <a href="#" className="inline-flex items-center px-8 py-4 rounded-xl bg-[#4F4F4F] text-white hover:bg-[#6E6E6E] transition-colors duration-300">
                    <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Get it on Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4F4F4F] text-[#EEEEEE] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-12 mb-8">
              <Link href="/privacy" className="text-lg hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-lg hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
            <p className="text-[#999999]">© 2024 Voltzy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
