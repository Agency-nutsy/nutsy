'use client';
import styles from './Offers.module.css';

/* TEMPLATE: Replace with actual offers and validity dates */
const offers = [
  { icon: '🎁', title: 'First Visit Offer', desc: '20% off on any service for new clients. Valid on weekdays.', badge: '20% OFF', validity: 'Valid until [date]' },
  { icon: '💆', title: 'Weekend Refresh', desc: 'Haircut + Cleanup + Threading combo at ₹799 (worth ₹1,050).', badge: '₹799', validity: 'Weekends only' },
  { icon: '👫', title: 'Couple Package', desc: 'His & Hers combo: Haircut + Facial for both, ₹2,200.', badge: 'DUO', validity: 'Valid until [date]' },
  { icon: '🎂', title: 'Birthday Special', desc: 'Free deep conditioning with any colour service on your birthday month.', badge: 'FREE', validity: 'Your birthday month' },
  { icon: '💍', title: 'Pre-Wedding Glow', desc: 'Book any bridal package, get a free gold facial (₹900 value).', badge: '₹900', validity: 'Valid until [date]' },
  { icon: '📱', title: 'Instagram Referral', desc: 'Refer a friend, both get 15% off their next visit.', badge: '15%', validity: 'Ongoing offer' },
];

const memberships = [
  {
    tier: 'Silver',
    price: '₹2,999',
    period: '/year',
    perks: [
      '10% off all services',
      'Priority appointment booking',
      '1 free haircut per month',
      'Free hair spa on birthday',
    ],
  },
  {
    tier: 'Gold',
    price: '₹5,999',
    period: '/year',
    perks: [
      '20% off all services',
      'Skip the queue — priority always',
      '2 free services per month (any)',
      'Exclusive member-only offers',
      'Free bridal consultation',
    ],
  },
];

const vouchers = ['₹500', '₹1,000', '₹2,000', '₹5,000'];

export default function Offers() {
  return (
    <section id="offers" className={`section ${styles.offers}`}>
      <div className="container">
        {/* Active Offers */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">SPECIAL OFFERS</span>
          <h2 className="section-title">Exclusive <span className="gold-text">Deals</span> for You</h2>
        </div>

        <div className={styles.offersGrid}>
          {offers.map((offer, i) => (
            <div className={styles.offerCard} key={i} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className={styles.offerBadge}>{offer.badge}</div>
              <span className={styles.offerIcon}>{offer.icon}</span>
              <h3 className={styles.offerTitle}>{offer.title}</h3>
              <p className={styles.offerDesc}>{offer.desc}</p>
              {/* Offer validity */}
              <p className="offer-validity">{offer.validity}</p>
              {/* TEMPLATE: Replace WhatsApp number */}
              <a
                href={`https://wa.me/+91XXXXXXXXXX?text=${encodeURIComponent(`Hi! I'd like to claim the "${offer.title}" offer.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.offerBtn}
              >
                Claim via WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Membership */}
        <div className={styles.membershipSection}>
          <div className="section-header" data-aos="fade-up">
            <span className="section-label">MEMBERSHIP</span>
            {/* TEMPLATE: Replace club name */}
            <h2 className="section-title">Join the <span className="gold-text">V Club</span></h2>
          </div>

          <div className={styles.membershipGrid}>
            {memberships.map((m, i) => (
              <div className={`${styles.memberCard} ${i === 1 ? styles.memberCardGold : ''}`} key={i} data-aos="fade-up" data-aos-delay={i * 150}>
                <span className={styles.memberTier}>{m.tier} Membership</span>
                <div className={styles.memberPrice}>
                  <span>{m.price}</span>
                  <span className={styles.memberPeriod}>{m.period}</span>
                </div>
                <ul className={styles.memberPerks}>
                  {m.perks.map((p, j) => (
                    <li key={j} className={styles.memberPerk}>
                      <span className={styles.perkCheck}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                {/* TEMPLATE: Replace WhatsApp number */}
                <a
                  href={`https://wa.me/+91XXXXXXXXXX?text=${encodeURIComponent(`Hi! I'd like to join the ${m.tier} Membership (${m.price}/year).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
                >
                  Join Now via WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Gift Vouchers */}
        <div className={styles.voucherSection} data-aos="fade-up">
          <div className={styles.voucherCard}>
            <h3 className={styles.voucherTitle}>🎁 Gift Vouchers</h3>
            <p className={styles.voucherDesc}>Gift the gift of beauty — for birthdays, anniversaries, and every celebration.</p>
            <div className={styles.voucherAmounts}>
              {vouchers.map((v, i) => (
                <span className={styles.voucherAmount} key={i}>{v}</span>
              ))}
            </div>
            {/* TEMPLATE: Replace WhatsApp number */}
            <a
              href="https://wa.me/+91XXXXXXXXXX?text=Hi!%20I'd%20like%20to%20order%20a%20Gift%20Voucher."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Order Gift Voucher
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
