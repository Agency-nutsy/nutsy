'use client';
import styles from './BrandStrip.module.css';

/* TEMPLATE: Replace with actual brand partner names */
const brands = [
  "L'Oréal Professionnel",
  "Kérastase",
  "Schwarzkopf",
  "Wella",
  "Matrix",
  "O.P.I",
];

export default function BrandStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.label}>Trusted Brand Partners</p>
        <div className="brand-strip">
          {brands.map((brand, i) => (
            <span className="brand-logo" key={i}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
