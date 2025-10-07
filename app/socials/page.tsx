'use client';

import { useState, useEffect } from 'react';

export default function Socials() {
  const [isVisible, setIsVisible] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

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

  const socialLinks = [
    {
      name: 'Instagram',
      icon: '[icon]',
      handle: '@therapywiththarad',
      url: 'https://instagram.com/therapywiththarad',
      description: 'Daily mental health tips, motivational content, and behind-the-scenes',
      color: 'from-pink-50 to-rose-50',
      border: 'border-coral-200',
      buttonColor: 'bg-coral-300 hover:bg-coral-400',
    },
    {
      name: 'LinkedIn',
      icon: '[icon]',
      handle: 'Tharad - Student Counselor',
      url: 'https://linkedin.com/in/therapywiththarad',
      description: 'Professional updates, articles on student mental health, and resources',
      color: 'from-blue-50 to-indigo-50',
      border: 'border-mint-300',
      buttonColor: 'bg-mint-300 hover:bg-mint-400',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Let's Connect
          </h1>
          <p className="text-xl text-terracotta-300 mb-4">
            Follow me on social media for mental health tips, inspiration, and community support
          </p>
          <p className="text-lg text-terracotta-300">
            Join a supportive community focused on student wellbeing and mental health awareness
          </p>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {socialLinks.map((social) => (
              <div
                key={social.name}
                className={`group bg-gradient-to-br ${social.color} rounded-3xl p-8 border-3 ${social.border} shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer hover:border-coral-300 hover:rotate-1`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-5xl text-terracotta-300 font-medium group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{social.icon}</div>
                    <div>
                      <h2 className="text-2xl font-semibold text-terracotta-400 mb-1">
                        {social.name}
                      </h2>
                      <p className="text-terracotta-300 font-medium mb-3">{social.handle}</p>
                      <p className="text-terracotta-300">{social.description}</p>
                    </div>
                  </div>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.buttonColor} text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110 transform whitespace-nowrap text-center`}
                  >
                    <span className="inline-block hover:scale-110 transition-transform">Follow</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-terracotta-300 to-terracotta-400 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-6 font-medium">[icon]</div>
            <h2 className="text-3xl font-serif font-bold mb-4">
              Join the Newsletter
            </h2>
            <p className="text-xl opacity-95 mb-8">
              Get monthly mental health tips, resources, and exclusive content delivered to your inbox
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-terracotta-400 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="group bg-white text-terracotta-300 px-8 py-4 rounded-full font-semibold hover:bg-cream-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 transform"
                >
                  <span className="inline-block group-hover:scale-110 transition-transform">Subscribe</span>
                </button>
              </div>
            </form>
            <p className="text-sm opacity-90 mt-4">
              No spam, unsubscribe anytime. Your email is safe with me.
            </p>
          </div>
        </div>
      </section>

      {/* Community Guidelines Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-mint-50 to-mint-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-terracotta-400 mb-10 text-center">
            Community Guidelines
          </h2>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-amber-200">
            <div className="space-y-6">
              <div className="group flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 text-5xl text-terracotta-300 font-medium group-hover:scale-125 transition-transform">[icon]</div>
                <div>
                  <h3 className="text-xl font-semibold text-terracotta-400 mb-2">Be Kind & Respectful</h3>
                  <p className="text-terracotta-300">
                    Our online community is a safe space for everyone. Treat others with compassion
                    and respect, just as you would want to be treated.
                  </p>
                </div>
              </div>
              <div className="group flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 text-5xl text-terracotta-300 font-medium group-hover:scale-125 transition-transform">[icon]</div>
                <div>
                  <h3 className="text-xl font-semibold text-terracotta-400 mb-2">Protect Privacy</h3>
                  <p className="text-terracotta-300">
                    Please don't share personal details or seek crisis intervention through social media.
                    For urgent support, contact emergency services or crisis hotlines.
                  </p>
                </div>
              </div>
              <div className="group flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 text-5xl text-terracotta-300 font-medium group-hover:scale-125 transition-transform">[icon]</div>
                <div>
                  <h3 className="text-xl font-semibold text-terracotta-400 mb-2">Engage Thoughtfully</h3>
                  <p className="text-terracotta-300">
                    Share your thoughts, ask questions, and support others. Remember that social media
                    content is educational and not a substitute for professional therapy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-terracotta-400 mb-6">
            Want to Work Together?
          </h2>
          <p className="text-xl text-terracotta-300 mb-8">
            While social media is great for staying connected, for actual therapy sessions
            please use the booking system
          </p>
          <a
            href="/booking"
            className="group inline-block bg-terracotta-300 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-terracotta-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 transform"
          >
            <span className="inline-block group-hover:scale-110 transition-transform">Book a Session</span>
          </a>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coral-50 to-coral-100 border-t-4 border-coral-300">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-coral-400 mb-6 text-center">
            Crisis Resources - India
          </h3>
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
      </section>
    </main>
  );
}
