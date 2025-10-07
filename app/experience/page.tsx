'use client';

import { useState, useEffect } from 'react';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream-50 via-mint-50 to-coral-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Experience & Qualifications
          </h1>
          <p className="text-xl text-terracotta-300">
            Building expertise through education, training, and meaningful connections with students
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-terracotta-400 mb-12 text-center">
            Education & Training
          </h2>
          <div className="space-y-8">
            <div className="group bg-gradient-to-br from-cream-50 to-cream-100 rounded-3xl p-8 border-3 border-terracotta-200 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 hover:border-terracotta-300 hover:rotate-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-terracotta-300 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  M
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-terracotta-400 mb-2">
                    MSc Counselling Psychology
                  </h3>
                  <p className="text-terracotta-300 font-medium mb-3">Christ University, Bangalore • July 2024 - June 2026 (In Progress)</p>
                  <p className="text-terracotta-300 leading-relaxed">
                    Pursuing advanced training in counselling psychology with specialization in evidence-based
                    therapeutic interventions, including Dialectical Behavior Therapy (DBT) and Cognitive Behavioral
                    Therapy (CBT). Gaining hands-on experience through practicum placements in school counselling
                    and clinical settings.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-cream-50 to-cream-100 rounded-3xl p-8 border-3 border-coral-200 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 hover:border-coral-300 hover:scale-105">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-coral-300 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  B
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-terracotta-400 mb-2">
                    Bachelor of Arts in Applied Psychology
                  </h3>
                  <p className="text-terracotta-300 font-medium mb-3">Amity University Kolkata • September 2021 - September 2024</p>
                  <p className="text-terracotta-300 leading-relaxed">
                    Comprehensive foundation in psychological theory, research methods, and human development.
                    Developed strong skills in Mental Status Examination (MSE), case history taking, and psychological
                    assessment. Focused on applied psychology with emphasis on adolescent and young adult mental health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coral-50 to-coral-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-terracotta-400 mb-12 text-center">
            Certifications & Specialized Training
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-white p-6 rounded-3xl border-l-4 border-amber-600 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-terracotta-400 mb-2 group-hover:text-terracotta-300 transition-colors">
                <span className="text-5xl inline-block group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">🛡️</span> QPR Suicide Prevention Gatekeeper
              </h3>
              <p className="text-terracotta-300">
                Certified by QPR Institute India in suicide prevention and crisis intervention techniques
              </p>
            </div>
            <div className="group bg-white p-6 rounded-3xl border-l-4 border-rose-600 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-terracotta-400 mb-2 group-hover:text-coral-400 transition-colors">
                <span className="text-5xl inline-block group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">🧠</span> Dialectical Behavior Therapy (DBT)
              </h3>
              <p className="text-terracotta-300">
                Created and delivered DBT-informed treatment plans focusing on emotion regulation and identity disturbance
              </p>
            </div>
            <div className="group bg-white p-6 rounded-3xl border-l-4 border-orange-600 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-terracotta-400 mb-2 group-hover:text-terracotta-400 transition-colors">
                <span className="text-5xl inline-block group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">📋</span> Mental Status Examination (MSE)
              </h3>
              <p className="text-terracotta-300">
                Advanced proficiency in conducting comprehensive mental status examinations and psychological assessments
              </p>
            </div>
            <div className="group bg-white p-6 rounded-3xl border-l-4 border-pink-600 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-terracotta-400 mb-2 group-hover:text-coral-400 transition-colors">
                <span className="text-5xl inline-block group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">📝</span> Case History Taking
              </h3>
              <p className="text-terracotta-300">
                Skilled in gathering comprehensive case histories and developing evidence-based treatment plans
              </p>
            </div>
            <div className="group bg-white p-6 rounded-3xl border-l-4 border-terracotta-300 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-terracotta-400 mb-2 group-hover:text-terracotta-300 transition-colors">
                <span className="text-5xl inline-block group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">👥</span> Adolescent Counselling
              </h3>
              <p className="text-terracotta-300">
                Specialized experience working with adolescents on emotional processing, trauma awareness, and prosocial behaviors
              </p>
            </div>
            <div className="group bg-white p-6 rounded-3xl border-l-4 border-rose-700 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-terracotta-400 mb-2 group-hover:text-coral-400 transition-colors">
                <span className="text-5xl inline-block group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">🌟</span> Neurodevelopmental Disorders
              </h3>
              <p className="text-terracotta-300">
                Experience supporting and observing interventions for children with neurodevelopmental disorders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-terracotta-400 mb-12 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div className="group bg-gradient-to-br from-cream-50 to-cream-100 rounded-3xl p-8 border border-amber-200 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 hover:rotate-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">🎓</span>
                <h3 className="text-2xl font-semibold text-terracotta-400">
                  Trainee School Counsellor
                </h3>
              </div>
              <p className="text-terracotta-300 font-medium mb-4">Christ State Board School, Bengaluru • June 2025 - Present</p>
              <ul className="space-y-2 text-terracotta-300">
                <li className="flex gap-2">
                  <span className="text-terracotta-300">•</span>
                  <span>Providing individual counselling to students dealing with academic stress, anxiety, and developmental challenges</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-terracotta-300">•</span>
                  <span>Conducting mental status examinations and case history assessments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-terracotta-300">•</span>
                  <span>Collaborating with teachers and parents to support student wellbeing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-terracotta-300">•</span>
                  <span>Implementing evidence-based interventions in school counselling settings</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-cream-50 to-cream-100 rounded-3xl p-8 border border-rose-200 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">💼</span>
                <h3 className="text-2xl font-semibold text-terracotta-400">
                  Counselling Psychology Intern
                </h3>
              </div>
              <p className="text-terracotta-300 font-medium mb-4">Marga – A Mind Wellness Studio, Kolkata • April 2025 - May 2025</p>
              <ul className="space-y-2 text-terracotta-300">
                <li className="flex gap-2">
                  <span className="text-rose-600">•</span>
                  <span>Completed 137 hours of intensive clinical internship with multi-dimensional exposure</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-rose-600">•</span>
                  <span>Observed 60+ counselling sessions and conducted 5 hours of supervised individual therapy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-rose-600">•</span>
                  <span>Created and presented a 5-session DBT-informed treatment plan for Borderline Personality traits</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-rose-600">•</span>
                  <span>Assisted in workshops on stress management for students and represented the organization at networking events</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-rose-600">•</span>
                  <span>Worked with special educators supporting children with neurodevelopmental disorders</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-cream-50 to-cream-100 rounded-3xl p-8 border border-orange-200 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 hover:-rotate-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">🤝</span>
                <h3 className="text-2xl font-semibold text-terracotta-400">
                  Community Service Volunteer – Adolescent Well-being Facilitator
                </h3>
              </div>
              <p className="text-terracotta-300 font-medium mb-4">Christ University & DPCU, Government Child Care Institutions • July 2024 - October 2024</p>
              <ul className="space-y-2 text-terracotta-300">
                <li className="flex gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Completed 30 hours of community service under the Adolescent Girls'/Boys' Well-being Program</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Conducted interactive, evidence-based sessions on emotional processing and prosocial behaviors</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Delivered sessions on good touch/bad touch and facilitated ice-breaking activities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Worked under supervision of Dr. Ngaitlang Mary Tariang (Psychiatric Social Worker)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-mint-50 to-mint-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-terracotta-400 mb-12 text-center">
            Areas of Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-white p-6 rounded-3xl shadow-xl border-3 border-terracotta-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer hover:border-terracotta-300 hover:rotate-1">
              <h3 className="text-lg font-semibold text-terracotta-400 mb-3">Academic Challenges</h3>
              <ul className="space-y-2 text-terracotta-300 text-sm">
                <li>• Exam anxiety</li>
                <li>• Academic pressure</li>
                <li>• Time management</li>
                <li>• Procrastination</li>
                <li>• Performance stress</li>
              </ul>
            </div>
            <div className="group bg-white p-6 rounded-3xl shadow-xl border-3 border-coral-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer hover:border-coral-300 hover:scale-105">
              <h3 className="text-lg font-semibold text-terracotta-400 mb-3">Mental Health</h3>
              <ul className="space-y-2 text-terracotta-300 text-sm">
                <li>• Anxiety & worry</li>
                <li>• Depression</li>
                <li>• Stress management</li>
                <li>• Self-esteem issues</li>
                <li>• Emotional regulation</li>
              </ul>
            </div>
            <div className="group bg-white p-6 rounded-3xl shadow-xl border-3 border-terracotta-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer hover:border-terracotta-300 hover:-rotate-1">
              <h3 className="text-lg font-semibold text-terracotta-400 mb-3">Life Transitions</h3>
              <ul className="space-y-2 text-terracotta-300 text-sm">
                <li>• Identity exploration</li>
                <li>• Relationship issues</li>
                <li>• Family dynamics</li>
                <li>• Career uncertainty</li>
                <li>• Life changes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Memberships Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-terracotta-400 mb-12 text-center">
            Professional Memberships
          </h2>
          <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-2xl p-8 border-2 border-amber-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <ul className="space-y-4 text-lg text-terracotta-300">
              <li className="group flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-2xl group-hover:scale-125 transition-transform">✓</span>
                <span>QPR Institute India - Certified Suicide Prevention Gatekeeper</span>
              </li>
              <li className="group flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-2xl group-hover:scale-125 transition-transform">✓</span>
                <span>Christ University MSc Counselling Psychology Program (Current Student)</span>
              </li>
              <li className="group flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-2xl group-hover:scale-125 transition-transform">✓</span>
                <span>Amity University Kolkata - BA Applied Psychology Graduate</span>
              </li>
            </ul>
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
            Let's Work Together
          </h2>
          <p className="text-xl text-white opacity-95 mb-8">
            My experience and training are here to support your growth and wellbeing.
          </p>
          <a
            href="/booking"
            className="group inline-block bg-white text-terracotta-300 px-10 py-4 rounded-full text-lg font-semibold hover:bg-cream-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 transform"
          >
            <span className="inline-block group-hover:scale-110 transition-transform">Schedule a Session</span>
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
