import Navbar from '@/components/Navbar/Navbar';
import './globals.css';

export const metadata = {
  title: 'RAJA Brawijaya 2023',
  keywords: 'raja brawijaya, rajabrawijaya, ospek ub, ospek ub 2023, raja brawijaya 2023, rabraw 2023',
  author: 'PIT RAJA Brawijaya',
  description:
    'RAJA Brawijaya adalah singkatan dari Rangkaian Acara Jelajah Almamater Universitas Brawijaya, merupakan serangkaian kegiatan yang bertujuan untuk memfasilitasi mahasiswa baru Universitas Brawijaya untuk mengetahui hal-hal terkait dengan kehidupan kampus, termasuk di dalamnya Pengenalan Kehidupan Kampus Mahasiswa Baru (PK2MB), Open House Lembaga Kedaulatan Mahasiswa dalam (OH).',
  openGraph: {
    title: 'RAJA Brawijaya 2023',
    image: 'https://rajabrawijaya.ub.ac.id/assets/favicon.ico',
    url: 'https://rajabrawijaya.ub.ac.id',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
