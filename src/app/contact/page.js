import Contact from '@/components/Contact';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Contact Us | Your Salon Name',
  description: 'Book an appointment, view our location, or get answers to frequently asked questions.',
};

export default function ContactPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <BookingForm />
      <Contact />
      <FAQ />
    </>
  );
}
