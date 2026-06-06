import Gallery from '@/components/Gallery';

export const metadata = {
  title: 'Gallery | Your Salon Name',
  description: 'View the stunning transformations and our premium salon interior at Your Salon Name.',
};

export default function GalleryPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <Gallery />
    </>
  );
}
