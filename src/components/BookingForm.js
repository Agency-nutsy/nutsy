'use client';
import { useState, useRef } from 'react';
import styles from './BookingForm.module.css';

const serviceOptions = [
  'Hair', 'Skin & Face', 'Makeup', 'Nails', 'Body',
  "Men's Grooming", 'Bridal', 'Not Sure — Suggest Me'
];

const timeSlots = [
  '8:30 AM – 10:00 AM', '10:00 AM – 12:00 PM',
  '12:00 PM – 2:00 PM', '2:00 PM – 4:00 PM',
  '4:00 PM – 6:00 PM', '6:00 PM – 8:00 PM'
];

export default function BookingForm() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.querySelector('[name="name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const service = form.querySelector('[name="service"]').value;
    const date = form.querySelector('[name="date"]').value;
    const time = form.querySelector('[name="time"]').value;
    const message = form.querySelector('[name="message"]').value.trim();

    // Validate
    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!phone) newErrors.phone = true;
    if (!date) newErrors.date = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const waText = `Hello V Unisex Salon! 🙏\n\nI would like to book an appointment.\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n✂️ Service: ${service}\n📅 Date: ${date}\n⏰ Time: ${time}\n📝 Notes: ${message || 'None'}\n\nPlease confirm my booking. Thank you!`;

    setShowConfirmation(true);

    setTimeout(() => {
      const encodedText = encodeURIComponent(waText);
      window.open(`https://wa.me/+919990285515?text=${encodedText}`, '_blank');
      setShowConfirmation(false);
    }, 1200);
  };

  return (
    <section className={`section ${styles.booking}`}>
      <div className={styles.topGlow}></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">BOOK YOUR VISIT</span>
          <h2 className="section-title">Reserve Your <span className="gold-text">Appointment</span></h2>
          <p className="section-subtitle">
            Fill in your details below and you&apos;ll be redirected to WhatsApp with your booking details pre-filled — just tap Send!
          </p>
        </div>

        <div className={styles.formWrap} data-aos="fade-up" data-aos-delay="100">
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="booking-name">Full Name</label>
              <input
                id="booking-name"
                name="name"
                type="text"
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="booking-phone">Phone Number</label>
              <input
                id="booking-phone"
                name="phone"
                type="tel"
                className={`form-input ${errors.phone ? 'error' : ''}`}
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="booking-service">Service Interested In</label>
              <select id="booking-service" name="service" className="form-input">
                {serviceOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className={styles.row}>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label" htmlFor="booking-date">Preferred Date</label>
                <input
                  id="booking-date"
                  name="date"
                  type="date"
                  className={`form-input ${errors.date ? 'error' : ''}`}
                  min={today}
                  required
                />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label" htmlFor="booking-time">Preferred Time</label>
                <select id="booking-time" name="time" className="form-input">
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="booking-message">Special Requests</label>
              <textarea
                id="booking-message"
                name="message"
                className="form-input"
                rows={3}
                placeholder="Any specific stylist request, bridal consultation, or notes..."
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Send Booking Request on WhatsApp
            </button>

            {/* Confirmation Overlay */}
            <div className={`confirmation-overlay ${showConfirmation ? 'active' : ''}`}>
              <span className="check">✅</span>
              <p>Redirecting to WhatsApp...</p>
            </div>
          </form>
        </div>

        {/* Alternative Contact */}
        <div className={styles.altContact} data-aos="fade-up">
          <a href="tel:+919990285515" className={styles.altItem}>
            <span>📞</span>
            <div>
              <strong>Call Us</strong>
              <span>+91 99902 85515</span>
            </div>
          </a>
          <a href="https://www.google.com/maps/search/V+Unisex+Salon+Saket+New+Delhi" target="_blank" rel="noopener noreferrer" className={styles.altItem}>
            <span>📍</span>
            <div>
              <strong>Visit Us</strong>
              <span>Shop No. 10, Mini Market, J Block, Saket, New Delhi 110017</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
