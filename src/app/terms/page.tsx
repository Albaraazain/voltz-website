'use client';
import React from 'react';
import Link from 'next/link';

export default function Terms() {
  const sections = [
    {
      title: "Platform Overview",
      content: [
        "Voltzy is a platform connecting homeowners with qualified electricians",
        "We verify electrician credentials and facilitate service bookings",
        "We do not provide electrical services directly",
        "Users must be 18 years or older to use the platform",
        "Users are responsible for maintaining account security"
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        "Provide accurate and complete information",
        "Maintain professional conduct and communication",
        "Respect intellectual property rights",
        "Report any suspicious or inappropriate behavior",
        "Comply with all applicable laws and regulations"
      ]
    },
    {
      title: "Service Terms",
      content: [
        "Booking confirmations are binding agreements",
        "Cancellation policies apply to all bookings",
        "Service quality standards must be maintained",
        "Payment processing through secure channels only",
        "Communication must be through the platform"
      ]
    },
    {
      title: "Platform Rules",
      content: [
        "No unauthorized commercial activities",
        "No harassment or discriminatory behavior",
        "No sharing of personal contact information",
        "No circumvention of platform fees",
        "No false reviews or feedback"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#EBE3D5]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#D6CCBB]/30 to-[#F5F0E8]/30"></div>
        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[#2D2D2D]">Terms of Service</h1>
            <p className="text-xl md:text-2xl text-[#666666] max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using Voltzy.
            </p>
            <p className="text-lg text-[#666666] mt-6">Last updated: January 2024</p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#FAFAFA] to-transparent"></div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, idx) => (
              <div key={idx} className="transform hover:-translate-y-1 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-8 text-[#2D2D2D]">{section.title}</h2>
                <div className="bg-[#FFFFFF] rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-[#E0E0E0]">
                  <ul className="space-y-6">
                    {section.content.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#4F4F4F] mt-2.5 mr-4 shrink-0"></span>
                        <span className="text-[#2D2D2D] text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Legal Notice */}
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <h2 className="text-3xl font-bold mb-8 text-[#2D2D2D]">Legal Notice</h2>
              <div className="bg-[#FFFFFF] rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-[#E0E0E0]">
                <p className="text-[#2D2D2D] text-lg mb-6 leading-relaxed">
                  By using Voltzy, you agree to these terms. We reserve the right to modify these terms at any time.
                  Significant changes will be notified through the platform or via email.
                </p>
                <div className="space-y-4">
                  <p className="text-[#2D2D2D] flex items-center">
                    <svg className="w-5 h-5 mr-3 text-[#4F4F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    For legal inquiries: <a href="mailto:legal@voltzy.com" className="text-[#4F4F4F] hover:text-[#6E6E6E] ml-1">legal@voltzy.com</a>
                  </p>
                  <p className="text-[#2D2D2D] flex items-center">
                    <svg className="w-5 h-5 mr-3 text-[#4F4F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Business Hours: Monday to Friday, 9 AM - 5 PM EST
                  </p>
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
              <Link href="/" className="text-lg hover:text-white transition-colors duration-300">
                Support Home
              </Link>
            </div>
            <p className="text-[#999999]">© 2024 Voltzy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 