import React from 'react';
import styles from './Perkenalan.module.css';
import Heading from '@/components/Heading/Heading';

export default function Perkenalan() {
  return (
    <div className="mt-14">
      <Heading direction={'center'} top="Pengenalan" bottom="RAJA Brawijaya"></Heading>
      <p className="text-grey text-center lg:text-xl md:text-lg w-2/3 mx-auto py-4">
        <span className=" font-montserrat font-bold text-accent">RAJA Brawijaya</span> atau Rangkaian <span className="font-montserrat font-bold text-accent"> Acara Jelajah Almamater Universitas Brawijaya </span> merupakan serangkaian
        kegiatan yang bertujuan untuk memfasilitasi mahasiswa baru Universitas Brawijaya untuk mengetahui hal-hal terkait kehidupan kampus dimana RAJA Brawijaya terdiri dari dua rangkaian yaitu PKKMB, OH.
      </p>
    </div>
  );
}
