'use client';
import styles from './Testimonials.module.css';

const reviews = [
  {
    text: "I had an amazing experience with Faizan at this salon! He was extremely professional, knowledgeable, and super helpful throughout the entire service.",
    name: 'Akshit Bansal',
    service: 'Facial',
    stars: 5,
  },
  {
    text: "I got a mullet haircut and beard styling done. The stylist Faizan did an excellent job and styled both the haircut and beard perfectly.",
    name: 'Naresh (Local Guide)',
    service: 'Haircut + Beard',
    stars: 5,
  },
  {
    text: "Kashish Rajput gave me an awesome haircut, the services are top notch!",
    name: 'Anonymous',
    service: 'Haircut',
    stars: 5,
  },
  {
    text: "Very good service, very good behaviour of Owner and every staff.",
    name: 'Google Review',
    service: '',
    stars: 5,
  },
  {
    text: "I did my hair cut and waxing and had a fantastic experience.",
    name: 'Google Review',
    service: 'Haircut + Waxing',
    stars: 5,
  },
  {
    text: "He carefully understood exactly what I wanted and delivered the perfect haircut just the way I had imagined.",
    name: 'Ajay Singh',
    service: 'Haircut',
    stars: 5,
  },
];

// Duplicate reviews to create a seamless infinite loop
const duplicatedReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section id="reviews" className={`section ${styles.testimonials}`}>
      <div className={styles.grain} aria-hidden="true"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className={styles.headerRow} data-aos="fade-up">
          <div className={styles.headerLeft}>
            <span className="section-label">WHAT CLIENTS SAY</span>
            <h2 className="section-title">126 Reasons to <span className="gold-text">Trust</span> Us</h2>
          </div>
        </div>

        <div className={styles.carouselWrap} data-aos="fade-up" data-aos-delay="100">
          <div className={styles.track}>
            {duplicatedReviews.map((review, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.stars}>
                  {'★'.repeat(review.stars).split('').map((s, j) => (
                    <span key={j} className={styles.star}>★</span>
                  ))}
                </div>
                <div className={styles.quoteDecor}>&ldquo;</div>
                <p className={styles.text}>{review.text}</p>
                <div className={styles.footer}>
                  <span className={styles.name}>{review.name}</span>
                  {review.service && <span className={styles.service}>{review.service}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Rating Bar */}
        <div className={styles.googleBar} data-aos="fade-up">
          <div className={styles.googleRating}>
            <span className={styles.googleStar}>⭐</span>
            <span className={styles.googleScore}>4.9 / 5 on Google</span>
            <span className={styles.googleCount}>Based on 126 reviews</span>
          </div>
          {/* TEMPLATE: Replace with your Google Maps link */}
          <a
            href="https://www.google.com/maps/search/Your+Salon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
