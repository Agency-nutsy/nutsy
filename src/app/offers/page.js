import Offers from '@/components/Offers';

export const metadata = {
  title: 'Offers & Memberships | Your Salon Name',
  description: 'Exclusive salon offers, discounts, and memberships at Your Salon Name.',
};

export default function OffersPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <Offers />
    </>
  );
}
