'use client';
import styles from './Contact.module.css';

/* TEMPLATE: Replace with actual salon hours */
const hours = [
  { day: 'Monday', time: '8:30 AM – 9:00 PM' },
  { day: 'Tuesday', time: '8:30 AM – 9:00 PM' },
  { day: 'Wednesday', time: '8:30 AM – 9:00 PM' },
  { day: 'Thursday', time: '8:30 AM – 9:00 PM' },
  { day: 'Friday', time: '8:30 AM – 9:00 PM' },
  { day: 'Saturday', time: '8:30 AM – 9:00 PM' },
  { day: 'Sunday', time: '8:30 AM – 9:00 PM' },
];

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={`container ${styles.grid}`}>
        {/* Left — Info */}
        <div className={styles.info} data-aos="fade-right">
          <span className="section-label">GET IN TOUCH</span>
          {/* TEMPLATE: Replace City */}
          <h2 className="section-title">Find Us in <span className="gold-text">Your City</span></h2>

          <div className={styles.addressCard}>
            <div className={styles.addressRow}>
              <span>📍</span>
              <div>
                <strong>Address</strong>
                {/* TEMPLATE: Replace Address */}
                <p>Your Full Address Here, City, State, PIN</p>
              </div>
            </div>
            <div className={styles.addressRow}>
              <span>🕐</span>
              <div>
                <strong>Open Hours</strong>
                {/* TEMPLATE: Replace Hours Summary */}
                <p>8:30 AM – 9:00 PM, All Days</p>
              </div>
            </div>
            <div className={styles.addressRow}>
              <span>📞</span>
              <div>
                <strong>Phone</strong>
                {/* TEMPLATE: Replace Phone */}
                <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
              </div>
            </div>

            <div className={styles.btns}>
              {/* TEMPLATE: Replace WhatsApp link */}
              <a href="https://wa.me/+91XXXXXXXXXX?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                💬 WhatsApp Us
              </a>
              {/* TEMPLATE: Replace Phone link */}
              <a href="tel:+91XXXXXXXXXX" className="btn-outline">
                📞 Call Now
              </a>
            </div>
          </div>

          {/* Hours Table */}
          <div className={styles.hours}>
            <h3 className={styles.hoursTitle}>Hours of Operation</h3>
            {hours.map((h, i) => (
              <div className={`${styles.hourRow} ${i % 2 === 0 ? styles.hourRowAlt : ''}`} key={i}>
                <span>{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className={styles.socials}>
            {/* TEMPLATE: Replace social links */}
            <a href="https://www.instagram.com/your_salon/" target="_blank" rel="noopener noreferrer" className={styles.socialPill}>
              📷 @your_salon
            </a>
            <a href="https://wa.me/+91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className={styles.socialPill}>
              💬 WhatsApp
            </a>
            <a href="https://www.google.com/maps/search/Your+Salon" target="_blank" rel="noopener noreferrer" className={styles.socialPill}>
              📍 Google Maps
            </a>
          </div>
        </div>

        {/* Right — Map */}
        <div className={styles.mapWrap} data-aos="fade-left">
          {/* TEMPLATE: Replace src with your salon's Google Maps Embed URL */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1683012345678!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{
              border: 0,
              borderRadius: 'var(--radius-lg)',
              filter: 'grayscale(30%) contrast(90%)',
            }}
            allowFullScreen
            loading="lazy"
            title="Salon Location on Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
