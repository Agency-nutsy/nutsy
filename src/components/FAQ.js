'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'Do I need to book an appointment or can I walk in?',
    a: 'Both are welcome! However, for specific stylists or weekend slots, booking ahead via WhatsApp is recommended.',
  },
  {
    q: 'What hair product brands do you use?',
    a: 'We are an authorised L\'Oréal Professionnel partner salon and use only professional-grade Majirel and Kérastase products.',
  },
  {
    q: 'Is the salon LGBTQ+ friendly?',
    a: 'Absolutely. V Unisex Salon is a safe, welcoming, and inclusive space for everyone.',
  },
  {
    q: 'Do you offer bridal packages for North Indian weddings?',
    a: 'Yes, we offer complete bridal packages including pre-bridal prep, bridal makeup, saree draping, and grooming packages for grooms too.',
  },
  {
    q: 'What is the cost of a basic haircut?',
    a: 'Women\'s haircuts start from ₹400, men\'s from ₹200, and kids\' from ₹150.',
  },
  {
    q: 'How long does a keratin treatment take?',
    a: 'Typically 2.5 to 4 hours depending on hair length and thickness.',
  },
  {
    q: 'Can I get bridal makeup done for a destination wedding outside Delhi?',
    a: 'Yes, our artists can travel for destination wedding bookings. Please contact us for quotes.',
  },
  {
    q: 'Do you offer home services?',
    a: 'Currently, all services are available in-salon only for best quality results.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept Cash, UPI (PhonePe, GPay, Paytm), and all major cards.',
  },
  {
    q: 'Where exactly are you located in Saket?',
    a: 'We are at Shop No. 10, Mini Market, 27, J Block, Saket, New Delhi 110017 — near the J Block market, easily accessible from the Saket Metro Station.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(prev => prev === i ? null : i);
  };

  return (
    <section className={`section ${styles.faq}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">FREQUENTLY ASKED</span>
          <h2 className="section-title">Questions & <span className="gold-text">Answers</span></h2>
        </div>

        <div className={styles.list} data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, i) => (
            <div className={`faq-item ${openIndex === i ? 'active' : ''}`} key={i}>
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{faq.q}</span>
                <svg
                  className="faq-chevron"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${i}`}
                role="region"
                style={{
                  maxHeight: openIndex === i ? '300px' : '0',
                }}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
