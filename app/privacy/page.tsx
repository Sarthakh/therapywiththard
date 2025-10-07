'use client';

import { useState, useEffect } from 'react';

export default function PrivacyPolicy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl font-serif font-bold text-terracotta-400 mb-4 text-center">
          Privacy Policy
        </h1>
        <p className="text-center text-terracotta-300 mb-12">
          Last Updated: January 2025
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-amber-200 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Introduction</h2>
            <p className="text-terracotta-300 leading-relaxed">
              At Therapy With Tharad, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website and use our services.
              Please read this privacy policy carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-terracotta-400 mb-3 mt-6">Personal Information</h3>
            <p className="text-terracotta-300 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-terracotta-300 space-y-2 ml-4">
              <li>Book a counselling session</li>
              <li>Sign up for our newsletter</li>
              <li>Contact us through our website</li>
              <li>Participate in our services</li>
            </ul>
            <p className="text-terracotta-300 leading-relaxed mt-4">
              This information may include: name, email address, phone number, and any other information
              you choose to provide during our therapeutic relationship.
            </p>

            <h3 className="text-xl font-semibold text-terracotta-400 mb-3 mt-6">Session Information</h3>
            <p className="text-terracotta-300 leading-relaxed">
              As a mental health professional, I maintain confidential records of our counselling sessions
              in accordance with professional ethics guidelines and applicable laws. This includes session
              notes, treatment plans, and relevant clinical documentation.
            </p>

            <h3 className="text-xl font-semibold text-terracotta-400 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-terracotta-300 leading-relaxed">
              When you visit our website, we may automatically collect certain information about your device,
              including information about your web browser, IP address, time zone, and some of the cookies
              installed on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">How We Use Your Information</h2>
            <p className="text-terracotta-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-terracotta-300 space-y-2 ml-4">
              <li>Provide, operate, and maintain our counselling services</li>
              <li>Schedule and manage appointments</li>
              <li>Communicate with you about your sessions and our services</li>
              <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
              <li>Improve and develop our services</li>
              <li>Comply with legal obligations and professional ethical standards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Confidentiality in Counselling</h2>
            <p className="text-terracotta-300 leading-relaxed mb-4">
              As a professional counsellor, I am bound by strict confidentiality requirements. Information
              shared during counselling sessions is protected and will not be disclosed without your explicit
              consent, except in the following legally mandated circumstances:
            </p>
            <ul className="list-disc list-inside text-terracotta-300 space-y-2 ml-4">
              <li>If there is a risk of serious harm to yourself or others</li>
              <li>In cases of suspected child abuse or neglect</li>
              <li>When required by law or court order</li>
              <li>For clinical supervision purposes (with identifying information protected)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Data Security</h2>
            <p className="text-terracotta-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal
              information. However, please note that no method of transmission over the Internet or electronic
              storage is 100% secure. While we strive to protect your personal information, we cannot guarantee
              its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Data Retention</h2>
            <p className="text-terracotta-300 leading-relaxed">
              We retain your personal information and clinical records for as long as necessary to fulfill the
              purposes outlined in this privacy policy and to comply with professional standards and legal
              obligations. Clinical records are typically maintained for 7 years after the last session, in
              accordance with professional guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Your Rights</h2>
            <p className="text-terracotta-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-terracotta-300 space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Request corrections to your information</li>
              <li>Request deletion of your information (subject to professional and legal obligations)</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your clinical records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Third-Party Services</h2>
            <p className="text-terracotta-300 leading-relaxed">
              We may use third-party services for scheduling, payment processing, and communication. These
              service providers are contractually obligated to protect your information and use it only for
              the purposes for which it was disclosed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Children's Privacy</h2>
            <p className="text-terracotta-300 leading-relaxed">
              Our services are not directed to individuals under the age of 18 without parental consent.
              If you are a parent or guardian and believe your child has provided us with personal information
              without your consent, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-terracotta-300 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting
              the new privacy policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Contact Us</h2>
            <p className="text-terracotta-300 leading-relaxed mb-4">
              If you have questions or concerns about this privacy policy or our privacy practices, please contact us through:
            </p>
            <ul className="text-terracotta-300 space-y-2">
              <li>Instagram: <a href="https://instagram.com/therapywiththarad" target="_blank" rel="noopener noreferrer" className="text-terracotta-400 hover:text-terracotta-500 underline">@therapywiththarad</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/anushka-tharad-a47b3320a/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-terracotta-400 hover:text-terracotta-500 underline">Anushka Tharad</a></li>
            </ul>
          </section>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block bg-terracotta-300 text-white px-8 py-3 rounded-full font-semibold hover:bg-terracotta-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Return to Home
          </a>
        </div>
      </div>
    </main>
  );
}
