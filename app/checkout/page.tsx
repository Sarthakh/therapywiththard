'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

type SessionPackage = {
  id: string;
  name: string;
  sessions: number;
  price: number;
  popular?: boolean;
  description: string;
};

const packages: SessionPackage[] = [
  {
    id: 'consultation',
    name: 'Free Consultation',
    sessions: 1,
    price: 0,
    description: 'Get to know each other and see if we\'re a good fit',
  },
  {
    id: 'single',
    name: 'Single Session',
    sessions: 1,
    price: 85,
    description: 'One 50-minute individual therapy session',
  },
  {
    id: 'four-pack',
    name: '4-Session Package',
    sessions: 4,
    price: 320,
    popular: true,
    description: 'Save $20 - Best for short-term goals',
  },
  {
    id: 'eight-pack',
    name: '8-Session Package',
    sessions: 8,
    price: 600,
    description: 'Save $80 - Ideal for ongoing support',
  },
  {
    id: 'twelve-pack',
    name: '12-Session Package',
    sessions: 12,
    price: 840,
    description: 'Save $180 - Best value for long-term therapy',
  },
];

export default function Checkout() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState<string>(
    searchParams.get('package') || 'single'
  );
  const [paymentStep, setPaymentStep] = useState<'select' | 'details' | 'payment' | 'success'>('select');
  const [formData, setFormData] = useState({
    name: searchParams.get('name') || '',
    email: searchParams.get('email') || '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [crisisExpanded, setCrisisExpanded] = useState(false);

  const currentPackage = packages.find(p => p.id === selectedPackage) || packages[1];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    setPaymentStep('details');
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPackage.price === 0) {
      // Free consultation - skip payment
      setPaymentStep('success');
    } else {
      setPaymentStep('payment');
    }
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would process the payment via Stripe
    console.log('Processing payment...', { formData, package: currentPackage });
    setPaymentStep('success');
  };

  if (paymentStep === 'success') {
    return (
      <main className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-terracotta-200 text-center">
            <div className="text-6xl mb-6">✓</div>
            <h2 className="text-3xl font-bold text-terracotta-400 mb-4">
              {currentPackage.price === 0 ? 'Consultation Booked!' : 'Payment Successful!'}
            </h2>
            <p className="text-lg text-terracotta-300 mb-6">
              Thank you for booking your therapy session{currentPackage.sessions > 1 ? 's' : ''}.
            </p>
            <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-xl p-6 mb-8 border border-terracotta-200">
              <h3 className="font-semibold text-terracotta-400 mb-3">Order Summary</h3>
              <div className="space-y-2 text-terracotta-300">
                <p><strong>Package:</strong> {currentPackage.name}</p>
                <p><strong>Sessions:</strong> {currentPackage.sessions}</p>
                {currentPackage.price > 0 && (
                  <p className="text-2xl font-bold text-terracotta-400 mt-4">
                    ${currentPackage.price}
                  </p>
                )}
              </div>
            </div>
            <p className="text-terracotta-300 mb-8">
              A confirmation email has been sent to <strong>{formData.email}</strong> with next steps
              and scheduling instructions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-terracotta-300 text-white px-8 py-3 rounded-full font-semibold hover:bg-terracotta-400 transition-all"
              >
                Return Home
              </Link>
              <Link
                href="/booking"
                className="bg-white text-terracotta-300 px-8 py-3 rounded-full font-semibold border-2 border-terracotta-300 hover:bg-cream-100 transition-all"
              >
                Book Another Session
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-terracotta-400 mb-4">
            Complete Your Booking
          </h1>
          <p className="text-xl text-terracotta-300">
            Choose your package and complete the checkout process
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <div className={`flex items-center gap-2 ${paymentStep === 'select' ? 'text-terracotta-400 font-semibold' : 'text-terracotta-300'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                paymentStep === 'select' ? 'bg-terracotta-300 text-white' : 'bg-terracotta-100'
              }`}>
                1
              </div>
              <span className="hidden md:inline">Select Package</span>
            </div>
            <div className="h-px w-8 md:w-16 bg-terracotta-200"></div>
            <div className={`flex items-center gap-2 ${paymentStep === 'details' || paymentStep === 'payment' ? 'text-terracotta-400 font-semibold' : 'text-terracotta-300'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                paymentStep === 'details' || paymentStep === 'payment' ? 'bg-terracotta-300 text-white' : 'bg-terracotta-100'
              }`}>
                2
              </div>
              <span className="hidden md:inline">Your Details</span>
            </div>
            <div className="h-px w-8 md:w-16 bg-terracotta-200"></div>
            <div className={`flex items-center gap-2 ${paymentStep === 'payment' ? 'text-terracotta-400 font-semibold' : 'text-terracotta-300'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                paymentStep === 'payment' ? 'bg-terracotta-300 text-white' : 'bg-terracotta-100'
              }`}>
                3
              </div>
              <span className="hidden md:inline">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {paymentStep === 'select' && (
              <div>
                <h2 className="text-2xl font-bold text-terracotta-400 mb-6">Choose Your Package</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`relative bg-white rounded-3xl p-6 border-2 cursor-pointer transition-all hover:shadow-lg ${
                        selectedPackage === pkg.id
                          ? 'border-terracotta-300 shadow-lg'
                          : 'border-terracotta-200'
                      } ${pkg.popular ? 'ring-2 ring-coral-300' : ''}`}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral-300 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      )}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-terracotta-400 mb-2">{pkg.name}</h3>
                        <div className="text-3xl font-bold text-terracotta-300 mb-2">
                          {pkg.price === 0 ? 'Free' : `$${pkg.price}`}
                        </div>
                        {pkg.price > 0 && (
                          <p className="text-sm text-terracotta-300 mb-3">
                            ${(pkg.price / pkg.sessions).toFixed(0)} per session
                          </p>
                        )}
                        <p className="text-terracotta-300 text-sm mb-4">{pkg.description}</p>
                        <div className="text-sm text-terracotta-300">
                          {pkg.sessions} session{pkg.sessions > 1 ? 's' : ''}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handlePackageSelect(selectedPackage)}
                  className="w-full mt-8 bg-terracotta-300 text-white py-4 rounded-full text-lg font-semibold hover:bg-terracotta-400 transition-all"
                >
                  Continue to Details
                </button>
              </div>
            )}

            {paymentStep === 'details' && (
              <div className="bg-white rounded-3xl p-8 border-2 border-terracotta-200">
                <h2 className="text-2xl font-bold text-terracotta-400 mb-6">Your Details</h2>
                <form onSubmit={handleDetailsSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-terracotta-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-terracotta-200 focus:border-terracotta-300 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-terracotta-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-terracotta-200 focus:border-terracotta-300 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-terracotta-400 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-terracotta-200 focus:border-terracotta-300 focus:outline-none"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentStep('select')}
                      className="flex-1 bg-white text-terracotta-300 py-3 rounded-full font-semibold border-2 border-terracotta-300 hover:bg-cream-100 transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-terracotta-300 text-white py-3 rounded-full font-semibold hover:bg-terracotta-400 transition-all"
                    >
                      {currentPackage.price === 0 ? 'Complete Booking' : 'Continue to Payment'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {paymentStep === 'payment' && (
              <div className="bg-white rounded-3xl p-8 border-2 border-terracotta-200">
                <h2 className="text-2xl font-bold text-terracotta-400 mb-6">Payment Information</h2>
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-semibold text-terracotta-400 mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      required
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      maxLength={19}
                      className="w-full px-4 py-3 rounded-lg border-2 border-terracotta-200 focus:border-terracotta-300 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-semibold text-terracotta-400 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        required
                        placeholder="MM/YY"
                        value={formData.expiry}
                        onChange={handleChange}
                        maxLength={5}
                        className="w-full px-4 py-3 rounded-lg border-2 border-terracotta-200 focus:border-terracotta-300 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-semibold text-terracotta-400 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        required
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleChange}
                        maxLength={4}
                        className="w-full px-4 py-3 rounded-lg border-2 border-terracotta-200 focus:border-terracotta-300 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="bg-cream-50 p-4 rounded-lg border border-terracotta-200">
                    <div className="flex items-center gap-2 text-sm text-terracotta-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Your payment information is secure and encrypted</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentStep('details')}
                      className="flex-1 bg-white text-terracotta-300 py-3 rounded-full font-semibold border-2 border-terracotta-300 hover:bg-cream-100 transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-terracotta-300 text-white py-3 rounded-full font-semibold hover:bg-terracotta-400 transition-all"
                    >
                      Pay ${currentPackage.price}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 border-2 border-terracotta-200 sticky top-24">
              <h3 className="text-xl font-bold text-terracotta-400 mb-4">Order Summary</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-terracotta-200">
                  <p className="text-sm text-terracotta-300 mb-1">Package</p>
                  <p className="font-semibold text-terracotta-400">{currentPackage.name}</p>
                </div>
                <div className="pb-4 border-b border-terracotta-200">
                  <p className="text-sm text-terracotta-300 mb-1">Sessions</p>
                  <p className="font-semibold text-terracotta-400">{currentPackage.sessions} session{currentPackage.sessions > 1 ? 's' : ''}</p>
                </div>
                <div className="pb-4 border-b border-terracotta-200">
                  <p className="text-sm text-terracotta-300 mb-1">Duration</p>
                  <p className="font-semibold text-terracotta-400">50 minutes each</p>
                </div>
                <div className="pt-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-terracotta-300">Subtotal</span>
                    <span className="font-semibold text-terracotta-400">
                      {currentPackage.price === 0 ? 'Free' : `$${currentPackage.price}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold text-terracotta-400 pt-2 border-t border-terracotta-200">
                    <span>Total</span>
                    <span>{currentPackage.price === 0 ? 'Free' : `$${currentPackage.price}`}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-br from-cream-50 to-cream-100 rounded-lg border border-terracotta-200">
                <p className="text-sm text-terracotta-300">
                  <strong>Note:</strong> All sessions are 50 minutes. You'll receive scheduling instructions after checkout.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Crisis Resources */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-coral-50 to-coral-100 rounded-3xl p-6 shadow-xl border-t-4 border-coral-300">
              <button
                onClick={() => setCrisisExpanded(!crisisExpanded)}
                className="w-full flex items-center justify-between text-2xl font-serif font-bold text-coral-400 mb-6 hover:text-coral-500 transition-colors"
              >
                <span>Crisis Resources - India</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${crisisExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`transition-all duration-500 overflow-hidden ${crisisExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white rounded-3xl p-6 shadow-xl">
                  <p className="text-coral-400 mb-6 font-semibold text-center">
                    If you're in crisis or need immediate support:
                  </p>
                  <div className="space-y-4 text-coral-400">
                    <div className="border-l-4 border-coral-300 pl-4">
                      <p className="font-semibold text-coral-400">
                        AASRA - 24/7 Crisis Helpline
                      </p>
                      <p>Phone: +91 98204 66726 (All days, 24 hours)</p>
                      <p className="text-sm">Email: aasrahelpline@yahoo.com</p>
                    </div>

                    <div className="border-l-4 border-coral-300 pl-4">
                      <p className="font-semibold text-coral-400">
                        Vandrevala Foundation - Mental Health Helpline
                      </p>
                      <p>Phone: 1860-2662-345 / 1800-2333-330 (All days, 24 hours)</p>
                    </div>

                    <div className="border-l-4 border-coral-300 pl-4">
                      <p className="font-semibold text-coral-400">
                        iCall - TISS Psychosocial Helpline
                      </p>
                      <p>Phone: 9152987821 (Mon-Sat, 8 AM - 10 PM)</p>
                      <p className="text-sm">Email: icall@tiss.edu</p>
                    </div>

                    <div className="border-l-4 border-coral-300 pl-4">
                      <p className="font-semibold text-coral-400">
                        Snehi - Emotional Support Centre
                      </p>
                      <p>Phone: +91 22 2772 6771 / +91 22 2772 6774</p>
                      <p>(Mon-Sat, 10 AM - 1 PM & 5 PM - 7 PM)</p>
                    </div>

                    <div className="border-l-4 border-coral-300 pl-4">
                      <p className="font-semibold text-coral-400">
                        NIMHANS Crisis Helpline - Bangalore
                      </p>
                      <p>Phone: 080-46110007 (Mon-Sat, 10 AM - 5 PM)</p>
                    </div>

                    <div className="border-l-4 border-coral-300 pl-4">
                      <p className="font-semibold text-coral-400">
                        Emergency Services
                      </p>
                      <p>Ambulance: 108 | Police: 100 | Women Helpline: 181</p>
                    </div>
                  </div>

                  <p className="text-center text-sm text-coral-400 mt-6">
                    You matter. Your life matters. Please reach out for help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
