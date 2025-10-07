'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [crisisExpanded, setCrisisExpanded] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Generate fewer sparkles for better performance
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream-50 via-mint-50 to-coral-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* MAXIMUM Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-terracotta-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-coral-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-mint-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          <div className="absolute top-20 right-20 w-60 h-60 bg-terracotta-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob"></div>

          {/* Multiple Shooting stars */}
          <div className="shooting-star"></div>
          <div className="shooting-star" style={{ top: '30%', animationDelay: '2s' }}></div>
          <div className="shooting-star" style={{ top: '50%', animationDelay: '4s' }}></div>

          {/* Rainbow gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 opacity-50 animate-rainbow-slide"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 via-green-400 via-yellow-400 to-red-400 opacity-50 animate-rainbow-slide"></div>

          {/* ALL THE SPARKLES */}
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

        <div className="max-w-7xl mx-auto relative">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-terracotta-400 mb-6 animate-fade-in-up relative">
              <span className="relative inline-block">
                Welcome to a Safe Space
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-coral-300 via-mint-200 to-terracotta-300 rounded-full animate-pulse"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-terracotta-300 mb-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Professional counselling psychology support for students navigating life's challenges
            </p>
            <p className="text-lg text-terracotta-300 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Whether you're dealing with academic stress, anxiety, relationships, or just need someone to talk to,
              I'm here to support you with evidence-based, compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Link
                href="/booking"
                className="group bg-terracotta-300 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-terracotta-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 transform"
              >
                <span className="inline-block group-hover:scale-110 transition-transform">Book Your First Session</span>
              </Link>
              <Link
                href="/about"
                className="group bg-white text-terracotta-300 px-8 py-4 rounded-full text-lg font-semibold border-2 border-terracotta-300 hover:bg-cream-100 transition-all duration-300 hover:scale-110 transform hover:shadow-2xl"
              >
                <span className="inline-block group-hover:scale-110 transition-transform">Learn More About Me</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-cream-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-terracotta-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-coral-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta-400 text-center mb-12 animate-glow">
            How I Can Help You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-cream-50 to-cream-100 p-8 rounded-3xl border-3 border-terracotta-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer hover:border-terracotta-300 hover:rotate-1">
              <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-bounce">🎓</div>
              <h3 className="text-2xl font-semibold text-terracotta-400 mb-3 group-hover:text-terracotta-300 transition-colors">Academic Stress</h3>
              <p className="text-terracotta-300 leading-relaxed">
                Navigate the pressures of academic life, exam anxiety, and finding balance between studies and wellbeing.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-coral-50 to-coral-100 p-8 rounded-3xl border-3 border-coral-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer hover:border-coral-300 hover:scale-105">
              <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-bounce animation-delay-200">💭</div>
              <h3 className="text-2xl font-semibold text-terracotta-400 mb-3 group-hover:text-coral-400 transition-colors">Mental Wellbeing</h3>
              <p className="text-terracotta-300 leading-relaxed">
                Address anxiety, depression, and other mental health challenges in a supportive, judgment-free environment.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-mint-50 to-mint-100 p-8 rounded-3xl border-3 border-mint-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer hover:border-mint-300 hover:-rotate-1">
              <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-bounce animation-delay-400">🤝</div>
              <h3 className="text-2xl font-semibold text-terracotta-400 mb-3 group-hover:text-mint-400 transition-colors">Life Transitions</h3>
              <p className="text-terracotta-300 leading-relaxed">
                Support through relationship issues, identity exploration, and the challenges of growing up and finding yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-mint-50 to-mint-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-mint-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-coral-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta-400 text-center mb-12 animate-glow">
            A Different Kind of Therapy
          </h2>
          <div className="space-y-6">
            <div className="group bg-gradient-to-r from-cream-50 to-cream-100 p-6 rounded-3xl border-2 border-terracotta-200 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer hover:border-terracotta-300 animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-terracotta-400 mb-2 group-hover:text-terracotta-300 transition-colors">🌟 Student-Centered Approach</h3>
              <p className="text-terracotta-300 text-lg leading-relaxed">
                I understand student life because I work specifically with students like you. Your challenges are unique, and so is my approach.
              </p>
            </div>
            <div className="group bg-gradient-to-r from-coral-50 to-coral-100 p-6 rounded-3xl border-2 border-coral-200 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer hover:border-coral-300 animate-slide-in-right animation-delay-200">
              <h3 className="text-2xl font-semibold text-terracotta-400 mb-2 group-hover:text-coral-400 transition-colors">🏡 Warm & Welcoming Space</h3>
              <p className="text-terracotta-300 text-lg leading-relaxed">
                This isn't your typical clinical therapy. Our sessions feel like talking to someone who genuinely cares, in a space that feels like home.
              </p>
            </div>
            <div className="group bg-gradient-to-r from-mint-50 to-mint-100 p-6 rounded-3xl border-2 border-mint-200 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer hover:border-mint-300 animate-slide-in-left animation-delay-400">
              <h3 className="text-2xl font-semibold text-terracotta-400 mb-2 group-hover:text-mint-400 transition-colors">🎯 Practical & Supportive</h3>
              <p className="text-terracotta-300 text-lg leading-relaxed">
                Together, we'll develop real strategies that work for your life, not just textbook solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-coral-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-mint-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta-400 text-center mb-12 animate-glow">
            What Students Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-cream-50 to-cream-100 p-8 rounded-3xl border-3 border-terracotta-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-terracotta-300 hover:rotate-1 cursor-pointer">
              <div className="text-6xl mb-4 opacity-50 text-terracotta-400 animate-pulse">"</div>
              <p className="text-lg text-terracotta-400 mb-4 italic leading-relaxed">
                Anushka created such a safe, warm environment. I finally felt heard and understood. The sessions have genuinely changed how I approach my anxiety.
              </p>
              <p className="text-terracotta-400 font-bold">— Second-year Psychology Student</p>
            </div>
            <div className="group bg-gradient-to-br from-coral-50 to-coral-100 p-8 rounded-3xl border-3 border-coral-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-coral-300 hover:-rotate-1 cursor-pointer">
              <div className="text-6xl mb-4 opacity-50 text-terracotta-400 animate-pulse animation-delay-200">"</div>
              <p className="text-lg text-terracotta-400 mb-4 italic leading-relaxed">
                I was nervous about therapy, but Anushka made it feel so natural and comfortable. It's like talking to a friend who also happens to be incredibly insightful.
              </p>
              <p className="text-terracotta-400 font-bold">— First-year Engineering Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* LGBTQIA+ Ally Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-terracotta-50 to-terracotta-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* VIBGYOR Rainbow overlays */}
          <div className="absolute top-0 left-0 w-full h-4 opacity-80 animate-rainbow-slide" style={{
            background: 'linear-gradient(to right, #9400D3, #4B0082, #0000FF, #00FF00, #FFFF00, #FF7F00, #FF0000)'
          }}></div>
          <div className="absolute bottom-0 left-0 w-full h-4 opacity-80 animate-rainbow-slide" style={{
            background: 'linear-gradient(to right, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)',
            animationDirection: 'reverse'
          }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="relative inline-block mb-8 w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-indigo-400 to-purple-400 p-1 rounded-3xl rainbow-border">
              <div className="bg-white rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
                  A Safe Space for Everyone
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-bold mb-2">
                  Proud LGBTQIA+ Ally 🏳️‍🌈
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Everyone deserves to be seen, heard, and celebrated for who they truly are. This is a safe,
                  affirming space where you can explore your identity, relationships, and mental health without
                  fear of judgment. Your authentic self is welcome here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-terracotta-300 via-coral-300 to-terracotta-400 text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '50px 50px',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>

        {/* MAXIMUM Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-particle" style={{ left: '5%', animationDelay: '0s' }}></div>
          <div className="floating-particle" style={{ left: '15%', animationDelay: '1s' }}></div>
          <div className="floating-particle" style={{ left: '25%', animationDelay: '0.5s' }}></div>
          <div className="floating-particle" style={{ left: '40%', animationDelay: '2s' }}></div>
          <div className="floating-particle" style={{ left: '50%', animationDelay: '1.5s' }}></div>
          <div className="floating-particle" style={{ left: '60%', animationDelay: '0.3s' }}></div>
          <div className="floating-particle" style={{ left: '75%', animationDelay: '1.8s' }}></div>
          <div className="floating-particle" style={{ left: '85%', animationDelay: '0.8s' }}></div>
          <div className="floating-particle" style={{ left: '95%', animationDelay: '1.2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in animate-pulse">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed animate-fade-in animation-delay-200">
            Taking the first step is often the hardest. Let's make it easier together.
          </p>
          <Link
            href="/booking"
            className="group inline-block bg-white text-terracotta-300 px-10 py-4 rounded-full text-lg font-semibold hover:bg-cream-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-125 transform animate-bounce"
          >
            <span className="inline-block group-hover:scale-110 transition-transform">Schedule Your Free Consultation</span>
          </Link>
          <p className="mt-6 text-base opacity-90 animate-fade-in animation-delay-400">
            All sessions are confidential and conducted in a safe, supportive environment
          </p>
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
