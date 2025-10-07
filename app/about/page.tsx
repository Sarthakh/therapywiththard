'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [crisisExpanded, setCrisisExpanded] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Generate sparkles for maximum effect
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* MAXIMUM Animated background */}
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

        <div className={`max-w-4xl mx-auto relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl font-serif font-bold text-terracotta-400 mb-8 text-center">
            About Me
          </h1>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-amber-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden group hover:scale-110 transition-transform duration-300 shadow-xl border-4 border-amber-200">
                <Image
                  src="/anushka-photo.jpg"
                  alt="Anushka Tharad"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <h2 className="text-3xl font-serif font-semibold text-terracotta-400 text-center mb-4">
                Hi, I'm Anushka Tharad
              </h2>
              <p className="text-lg text-terracotta-300 leading-relaxed mb-6">
                I'm a trainee psychologist currently pursuing my Master's in Counselling Psychology at Christ University, Bangalore.
                I believe that everyone deserves a safe, warm space to explore their thoughts and feelings. My approach to counselling
                isn't about fitting you into a box. It's about understanding your unique story and supporting you exactly where you are.
              </p>
              <p className="text-lg text-terracotta-300 leading-relaxed mb-6">
                Currently working as a Trainee School Counsellor at Christ State Board School, I bring hands-on experience from
                internships at Marga – A Mind Wellness Studio, community service with adolescents, and specialized training in
                evidence-based therapeutic frameworks like DBT and CBT. I understand the unique pressures of student life: the
                academic stress, identity questions, relationship challenges, and anxiety about the future.
              </p>
              <p className="text-lg text-terracotta-300 leading-relaxed">
                My counselling style is warm, evidence-based, and practical. I'm trained in Mental Status Examination, case history
                taking, and various therapeutic interventions. Think of our sessions as a collaboration where you're the expert on
                your life, and I'm here to provide support, insight, and tools rooted in psychological science that actually work
                in the real world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-mint-50 to-mint-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-terracotta-400 mb-12 text-center">
            My Therapy Philosophy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-cream-50 to-cream-100 p-8 rounded-3xl border-3 border-terracotta-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer hover:border-terracotta-300 hover:rotate-1">
              <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">🌱</div>
              <h3 className="text-2xl font-semibold text-terracotta-400 mb-3 group-hover:text-terracotta-400 transition-colors">Growth-Oriented</h3>
              <p className="text-terracotta-300">
                I believe therapy isn't about "fixing" you. You're not broken. It's about helping you
                grow, understand yourself better, and develop tools to thrive.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-cream-50 to-cream-100 p-8 rounded-3xl border-3 border-coral-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer hover:border-coral-300 hover:scale-105">
              <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">🤗</div>
              <h3 className="text-2xl font-semibold text-coral-400 mb-3 group-hover:text-coral-400 transition-colors">Non-Judgmental</h3>
              <p className="text-coral-400">
                This is a judgment-free zone. Whatever you're going through, however you're feeling,
                it's valid and deserves to be heard with compassion.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-cream-50 to-cream-100 p-8 rounded-3xl border-3 border-mint-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer hover:border-mint-300 hover:-rotate-1">
              <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">🎨</div>
              <h3 className="text-2xl font-semibold text-terracotta-400 mb-3 group-hover:text-terracotta-400 transition-colors">Individualized</h3>
              <p className="text-terracotta-300">
                No two people are the same, so no two therapy journeys should be either.
                I tailor my approach to what works best for you.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-cream-50 to-cream-100 p-8 rounded-3xl border-3 border-terracotta-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer hover:border-terracotta-300 hover:rotate-1">
              <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">💪</div>
              <h3 className="text-2xl font-semibold text-coral-400 mb-3 group-hover:text-coral-400 transition-colors">Strengths-Based</h3>
              <p className="text-coral-400">
                We'll build on what you're already doing well, recognizing your resilience
                and inner resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-terracotta-400 mb-12 text-center">
            What to Expect in Our Sessions
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-amber-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="space-y-6">
              <div className="group flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-terracotta-200 transition-all duration-300">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-terracotta-400 mb-2">A Comfortable Start</h3>
                  <p className="text-terracotta-300">
                    First sessions are about getting to know each other. No pressure, no judgment. Just
                    a conversation about what brought you here and how I can help.
                  </p>
                </div>
              </div>
              <div className="group flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-terracotta-200 transition-all duration-300">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-terracotta-400 mb-2">Your Space to Share</h3>
                  <p className="text-terracotta-300">
                    You set the pace. Share as much or as little as you're comfortable with.
                    This is your time, and we'll use it however works best for you.
                  </p>
                </div>
              </div>
              <div className="group flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-coral-200 transition-all duration-300">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-terracotta-400 mb-2">Practical Tools & Insights</h3>
                  <p className="text-terracotta-300">
                    Together, we'll explore strategies and perspectives that you can actually use
                    in your daily life. Real solutions, not just theory.
                  </p>
                </div>
              </div>
              <div className="group flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-coral-200 transition-all duration-300">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-terracotta-400 mb-2">Ongoing Support</h3>
                  <p className="text-terracotta-300">
                    We'll work together at a pace that feels right for you, checking in regularly
                    on your progress and adjusting our approach as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coral-50 to-coral-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-terracotta-400 mb-8">
            Beyond the Therapy Room
          </h2>
          <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-2xl p-8 md:p-12 border-2 border-rose-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <p className="text-lg text-terracotta-400 leading-relaxed mb-6">
              Beyond my professional work, I'm a certified QPR Suicide Prevention Gatekeeper and hold a Black Belt
              (1st Shodan) in Karate. I've also competed internationally in karate championships and have a passion
              for writing and content creation in psychology. I believe in practicing what I preach: maintaining balance,
              pursuing passions, and making time for self-care.
            </p>
            <p className="text-lg text-terracotta-300 leading-relaxed">
              I bring this same holistic, balanced approach to our work together. With experience working with diverse
              populations (from adolescents in government child care institutions to students dealing with stress and
              mental health challenges), I understand that counselling isn't just about addressing problems. It's about
              building a richer, more fulfilling life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-terracotta-300 to-terracotta-400 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white opacity-95 mb-8">
            I'd love to support you on your journey. Let's start with a conversation.
          </p>
          <a
            href="/booking"
            className="group inline-block bg-white text-terracotta-300 px-10 py-4 rounded-full text-lg font-semibold hover:bg-cream-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 transform"
          >
            <span className="inline-block group-hover:scale-110 transition-transform">Book Your First Session</span>
          </a>
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
