'use client';

import { useState, useEffect } from 'react';

export default function TermsOfService() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl font-serif font-bold text-terracotta-400 mb-4 text-center">
          Terms of Service
        </h1>
        <p className="text-center text-terracotta-300 mb-12">
          Last Updated: January 2025
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-amber-200 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Agreement to Terms</h2>
            <p className="text-terracotta-300 leading-relaxed">
              By accessing and using the Therapy With Tharad website and services, you agree to be bound by
              these Terms of Service and all applicable laws and regulations. If you do not agree with any
              of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Description of Services</h2>
            <p className="text-terracotta-300 leading-relaxed mb-4">
              Therapy With Tharad provides professional counselling psychology services to students and
              young adults. Our services include:
            </p>
            <ul className="list-disc list-inside text-terracotta-300 space-y-2 ml-4">
              <li>Individual counselling sessions</li>
              <li>Mental health support for students</li>
              <li>Evidence-based therapeutic interventions</li>
              <li>Educational resources and mental health information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Professional Relationship</h2>
            <h3 className="text-xl font-semibold text-terracotta-400 mb-3 mt-6">Therapeutic Boundaries</h3>
            <p className="text-terracotta-300 leading-relaxed">
              The relationship between counsellor and client is a professional therapeutic relationship.
              This is not a social relationship, and interactions outside of scheduled sessions are not
              appropriate. Social media connections and personal friendships are not permitted during and
              after the therapeutic relationship.
            </p>

            <h3 className="text-xl font-semibold text-terracotta-400 mb-3 mt-6">Scope of Practice</h3>
            <p className="text-terracotta-300 leading-relaxed">
              As a trainee psychologist pursuing my Master's in Counselling Psychology, I work within my
              scope of competence and training. For issues requiring specialized care or emergency
              intervention, I will provide appropriate referrals to qualified professionals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Appointments and Cancellations</h2>
            <h3 className="text-xl font-semibold text-terracotta-400 mb-3 mt-6">Scheduling</h3>
            <p className="text-terracotta-300 leading-relaxed">
              Sessions are scheduled by mutual agreement. It is your responsibility to arrive on time for
              your scheduled appointment. Late arrivals may result in a shortened session.
            </p>

            <h3 className="text-xl font-semibold text-terracotta-400 mb-3 mt-6">Cancellation Policy</h3>
            <p className="text-terracotta-300 leading-relaxed mb-4">
              We require at least 24 hours notice for cancellations or rescheduling. Cancellations made with
              less than 24 hours notice may be subject to a cancellation fee. Exceptions may be made for
              emergencies or unforeseen circumstances.
            </p>

            <h3 className="text-xl font-semibold text-terracotta-400 mb-3 mt-6">No-Shows</h3>
            <p className="text-terracotta-300 leading-relaxed">
              If you miss a scheduled appointment without prior notice (no-show), you may be charged for
              the full session fee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Payment and Fees</h2>
            <p className="text-terracotta-300 leading-relaxed mb-4">
              Payment for services is due at the time of service unless other arrangements have been made
              in advance. We accept various payment methods as specified during the booking process.
            </p>
            <ul className="list-disc list-inside text-terracotta-300 space-y-2 ml-4">
              <li>First consultation sessions are offered free of charge</li>
              <li>Subsequent session fees will be discussed and agreed upon during the initial consultation</li>
              <li>Student discounts and package rates are available</li>
              <li>Payment plans can be arranged in certain circumstances</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Confidentiality</h2>
            <p className="text-terracotta-300 leading-relaxed mb-4">
              All information shared during counselling sessions is confidential and will be protected in
              accordance with professional ethics and applicable laws. Please refer to our Privacy Policy
              for detailed information about confidentiality and its limitations.
            </p>
            <p className="text-terracotta-300 leading-relaxed">
              Note: Confidentiality has legal and ethical limits, including situations involving risk of
              harm to self or others, suspected child abuse, or when disclosure is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Emergency Situations</h2>
            <p className="text-terracotta-300 leading-relaxed mb-4">
              <strong className="text-terracotta-400">Important:</strong> Our counselling services are not
              appropriate for emergency mental health situations. If you are experiencing a mental health
              emergency, please:
            </p>
            <ul className="list-disc list-inside text-terracotta-300 space-y-2 ml-4">
              <li>Call emergency services (Ambulance: 108)</li>
              <li>Contact a 24/7 crisis helpline such as AASRA (+91 98204 66726)</li>
              <li>Go to the nearest hospital emergency department</li>
              <li>Contact the police (100) if you or someone else is in immediate danger</li>
            </ul>
            <p className="text-terracotta-300 leading-relaxed mt-4">
              Between sessions, regular counselling appointments are not suitable for crisis intervention.
              Please use emergency services for urgent situations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Client Responsibilities</h2>
            <p className="text-terracotta-300 leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside text-terracotta-300 space-y-2 ml-4">
              <li>Provide accurate information about your mental health history and current concerns</li>
              <li>Participate actively and honestly in the therapeutic process</li>
              <li>Inform me of any changes in your mental health status or medications</li>
              <li>Respect appointment times and cancellation policies</li>
              <li>Treat the therapeutic relationship with professionalism and respect</li>
              <li>Contact emergency services if you are in crisis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Termination of Services</h2>
            <p className="text-terracotta-300 leading-relaxed mb-4">
              Either party may terminate the counselling relationship at any time. Reasons for termination
              may include:
            </p>
            <ul className="list-disc list-inside text-terracotta-300 space-y-2 ml-4">
              <li>Completion of therapeutic goals</li>
              <li>Client request to discontinue services</li>
              <li>Lack of progress or therapeutic fit</li>
              <li>Non-payment of fees</li>
              <li>Violation of professional boundaries</li>
              <li>The need for a level of care beyond my scope of practice</li>
            </ul>
            <p className="text-terracotta-300 leading-relaxed mt-4">
              In case of termination, I will provide appropriate referrals to other mental health professionals
              when clinically indicated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Limitation of Liability</h2>
            <p className="text-terracotta-300 leading-relaxed">
              While I strive to provide high-quality professional counselling services, I cannot guarantee
              specific outcomes from therapy. Mental health treatment outcomes vary based on many factors.
              Our services are provided "as is" and I make no warranties regarding the results of counselling.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Intellectual Property</h2>
            <p className="text-terracotta-300 leading-relaxed">
              All content on this website, including text, graphics, logos, and images, is the property of
              Therapy With Tharad and is protected by copyright laws. You may not reproduce, distribute, or
              create derivative works from any content without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Disclaimer</h2>
            <p className="text-terracotta-300 leading-relaxed">
              The information provided on this website is for educational and informational purposes only
              and does not constitute professional medical advice, diagnosis, or treatment. Always seek the
              advice of qualified health providers with any questions you may have regarding a medical or
              mental health condition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Changes to Terms</h2>
            <p className="text-terracotta-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be posted on this page
              with an updated "Last Updated" date. Your continued use of our services after changes are
              posted constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Governing Law</h2>
            <p className="text-terracotta-300 leading-relaxed">
              These terms are governed by and construed in accordance with the laws of India. Any disputes
              arising from these terms or our services shall be subject to the exclusive jurisdiction of
              the courts of Bangalore, Karnataka.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-terracotta-400 mb-4">Contact Information</h2>
            <p className="text-terracotta-300 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us through:
            </p>
            <ul className="text-terracotta-300 space-y-2">
              <li>Instagram: <a href="https://instagram.com/therapywiththarad" target="_blank" rel="noopener noreferrer" className="text-terracotta-400 hover:text-terracotta-500 underline">@therapywiththarad</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/anushka-tharad-a47b3320a/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-terracotta-400 hover:text-terracotta-500 underline">Anushka Tharad</a></li>
            </ul>
          </section>

          <section className="bg-coral-50 p-6 rounded-xl border-l-4 border-coral-300">
            <h3 className="text-xl font-semibold text-coral-400 mb-3">Acknowledgment</h3>
            <p className="text-terracotta-300 leading-relaxed">
              By using our services, you acknowledge that you have read, understood, and agree to be bound
              by these Terms of Service and our Privacy Policy.
            </p>
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
