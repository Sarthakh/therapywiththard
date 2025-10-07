'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Booking() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    sessionType: 'first-time',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [crisisExpanded, setCrisisExpanded] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Generate 8 sparkles to match homepage
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setSparkles(newSparkles);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create calendar event
    try {
      const response = await fetch('/api/calendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.preferredDate,
          time: formData.preferredTime,
          sessionType: formData.sessionType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to create booking. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-amber-200 text-center">
            <div className="text-6xl mb-6">✓</div>
            <h2 className="text-3xl font-serif font-bold text-terracotta-400 mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-lg text-terracotta-300 mb-6">
              Your session has been booked! A Google Calendar invite has been sent to your email.
            </p>
            <p className="text-terracotta-300 mb-8">
              Please check your email (including spam folder) for the calendar invitation.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-terracotta-300 text-white px-8 py-3 rounded-full font-semibold hover:bg-terracotta-400 transition-all"
            >
              Book Another Session
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* MAXIMUM Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 4 animated blobs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-terracotta-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-coral-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-mint-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          <div className="absolute top-20 right-20 w-60 h-60 bg-terracotta-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob"></div>

          {/* 3 Shooting stars with different delays */}
          <div className="shooting-star"></div>
          <div className="shooting-star" style={{ top: '30%', animationDelay: '2s' }}></div>
          <div className="shooting-star" style={{ top: '50%', animationDelay: '4s' }}></div>

          {/* 2 Rainbow gradient overlays - top and bottom */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 opacity-50 animate-rainbow-slide"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 via-green-400 via-yellow-400 to-red-400 opacity-50 animate-rainbow-slide"></div>

          {/* ALL THE SPARKLES - 8 total */}
          {sparkles.map(sparkle => (
            <div
              key={sparkle.id}
              className="sparkle"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                animationDelay: `${sparkle.delay}s`
              }}
            />
          ))}
        </div>

        <div className={`max-w-4xl mx-auto text-center relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl font-serif font-bold text-terracotta-400 mb-6">
            Book Your Session
          </h1>
          <p className="text-xl text-terracotta-300 mb-4">
            Take the first step towards better mental health and wellbeing
          </p>
          <p className="text-lg text-terracotta-300">
            Fill out the form below and you'll receive a calendar invite instantly
          </p>
        </div>
      </section>

      {/* Session Info Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group bg-white p-6 rounded-3xl shadow-xl border-3 border-terracotta-200 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer hover:border-terracotta-300 hover:rotate-1">
              <div className="text-5xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">⏰</div>
              <h3 className="text-xl font-semibold text-terracotta-400 mb-2">Session Length</h3>
              <p className="text-terracotta-300">50-60 minutes</p>
            </div>
            <div className="group bg-white p-6 rounded-3xl shadow-xl border-3 border-coral-200 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer hover:border-coral-300 hover:scale-105">
              <div className="text-5xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">💰</div>
              <h3 className="text-xl font-semibold text-terracotta-400 mb-2">Investment</h3>
              <p className="text-terracotta-300">$XX per session</p>
              <p className="text-sm text-terracotta-300 mt-2">Student rates available</p>
            </div>
            <div className="group bg-white p-6 rounded-3xl shadow-xl border-3 border-terracotta-200 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer hover:border-terracotta-300 hover:-rotate-1">
              <div className="text-5xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">📍</div>
              <h3 className="text-xl font-semibold text-terracotta-400 mb-2">Location</h3>
              <p className="text-terracotta-300">Online or In-Person</p>
              <p className="text-sm text-terracotta-300 mt-2">Flexible options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-amber-200 hover:shadow-3xl transition-shadow duration-300">
            <h2 className="text-3xl font-serif font-bold text-terracotta-400 mb-8 text-center">
              Schedule Your Appointment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    placeholder="Your name"
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
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-terracotta-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="(Optional)"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold text-terracotta-400 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-semibold text-terracotta-400 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 7PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="sessionType" className="block text-sm font-semibold text-terracotta-400 mb-2">
                  Session Type *
                </label>
                <select
                  id="sessionType"
                  name="sessionType"
                  required
                  value={formData.sessionType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="first-time">First Time Session (Free Consultation)</option>
                  <option value="individual">Individual Therapy Session</option>
                  <option value="follow-up">Follow-up Session</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-terracotta-400 mb-2">
                  What would you like to discuss? (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Feel free to share what's on your mind or any specific concerns you'd like to address..."
                />
              </div>

              <div className="bg-cream-50 p-6 rounded-xl border border-amber-200">
                <p className="text-sm text-terracotta-300">
                  <strong>Note:</strong> After submitting, you'll receive a Google Calendar invite to confirm your session.
                  All information is kept strictly confidential.
                </p>
              </div>

              <button
                type="submit"
                className="group w-full bg-terracotta-300 text-white py-4 rounded-full text-lg font-semibold hover:bg-terracotta-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform relative overflow-hidden"
              >
                <span className="relative z-10 inline-block group-hover:scale-110 transition-transform">Book Session</span>
                <div className="absolute inset-0 bg-gradient-to-r from-terracotta-300 to-terracotta-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-mint-50 to-mint-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-terracotta-400 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cream-50 to-cream-100 p-6 rounded-3xl border-3 border-terracotta-200 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 hover:border-terracotta-300 hover:rotate-1 cursor-pointer">
              <h3 className="text-lg font-semibold text-terracotta-400 mb-2">
                What should I expect in my first session?
              </h3>
              <p className="text-terracotta-300">
                Your first session is a free 30-minute consultation where we'll get to know each other,
                discuss what brought you to therapy, and determine if we're a good fit. No pressure, just conversation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cream-50 to-cream-100 p-6 rounded-3xl border-3 border-coral-200 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 hover:border-coral-300 hover:scale-105 cursor-pointer">
              <h3 className="text-lg font-semibold text-coral-400 mb-2">
                How do I prepare for my session?
              </h3>
              <p className="text-coral-400">
                Just come as you are! There's no special preparation needed. If you have specific topics
                you'd like to discuss, jotting them down beforehand can be helpful, but it's not required.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cream-50 to-cream-100 p-6 rounded-3xl border-3 border-terracotta-200 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 hover:border-terracotta-300 hover:-rotate-1 cursor-pointer">
              <h3 className="text-lg font-semibold text-terracotta-400 mb-2">
                Is everything I share confidential?
              </h3>
              <p className="text-terracotta-300">
                Absolutely. Everything we discuss is confidential, with rare exceptions required by law
                (such as risk of harm to self or others). Your privacy and trust are my top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coral-50 to-coral-100 border-t-4 border-coral-300">
        <div className="max-w-4xl mx-auto">
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
      </section>
    </main>
  );
}
