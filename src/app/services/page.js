import Services from '@/components/Services';

export const metadata = {
  title: 'Our Services | Your Salon Name',
  description: 'Explore our wide range of premium salon services including haircuts, styling, keratin, facials, and more.',
};

export default function ServicesPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <Services />
    </>
  );
}
