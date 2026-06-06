import Team from '@/components/Team';

export const metadata = {
  title: 'Our Team | Your Salon Name',
  description: 'Meet the expert stylists and beauty professionals at Your Salon Name.',
};

export default function TeamPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <Team />
    </>
  );
}
