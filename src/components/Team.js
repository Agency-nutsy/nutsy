'use client';
import styles from './Team.module.css';

/* TEMPLATE: Replace with actual team data */
const team = [
  {
    name: 'Stylist Name',
    role: 'Senior Stylist',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Lead stylist celebrated for precision haircuts, creative styling, and expert facials. Calm professionalism and attention to detail.',
    tags: ['✂️ Haircuts', '🎨 Colour'],
    experience: '8 Years',
    certifications: ["L'Oréal Certified", "Advanced Colour Specialist"],
  },
  {
    name: 'Stylist Name',
    role: 'Hair Specialist',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Creative flair in colour transformations and keratin treatments. Delivers exactly what clients envision.',
    tags: ['💇 Styling', '✨ Keratin'],
    experience: '6 Years',
    certifications: ["Schwarzkopf Trained", "Keratin Expert"],
  },
  {
    name: 'Stylist Name',
    role: 'Beauty Expert',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    bio: 'Skincare and makeup specialist known for flawless bridal looks and rejuvenating facials. Gentle approach and keen eye.',
    tags: ['👰 Bridal', '🧖 Facials'],
    experience: '5 Years',
    certifications: ["Bridal Certified", "Skincare Specialist"],
  },
];

export default function Team() {
  return (
    <section id="team" className={`section ${styles.team}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">MEET THE EXPERTS</span>
          <h2 className="section-title">The Artists Behind Your <span className="gold-text">Look</span></h2>
        </div>

        <div className={styles.grid}>
          {team.map((member, i) => (
            <div className={styles.card} key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className={styles.imageWrap}>
                <img
                  src={member.photo}
                  alt={`${member.name} — ${member.role}`}
                  width={400}
                  height={500}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.imageOverlay}>
                  <h3 className={styles.cardName}>{member.name}</h3>
                </div>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardRole}>{member.role}</span>
                
                {/* Experience badge */}
                <span className="team-experience">📅 {member.experience}</span>
                
                <p className={styles.cardBio}>{member.bio}</p>

                {/* Certifications */}
                {member.certifications && member.certifications.length > 0 && (
                  <div className="team-certs">
                    {member.certifications.map((cert, j) => (
                      <span className="team-cert-badge" key={j}>🎖️ {cert}</span>
                    ))}
                  </div>
                )}

                <div className={styles.stars}>
                  {'★★★★★'.split('').map((s, j) => <span key={j} className={styles.star}>{s}</span>)}
                  <span className={styles.recommended}>Highly Recommended</span>
                </div>
                <div className={styles.tags}>
                  {member.tags.map((tag, j) => (
                    <span className={styles.tag} key={j}>{tag}</span>
                  ))}
                </div>

                {/* Book with this stylist CTA */}
                <a
                  href={`https://wa.me/+91XXXXXXXXXX?text=${encodeURIComponent(`Hi! I'd like to book an appointment with ${member.name} (${member.role}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bookStylistBtn}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Book with {member.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
