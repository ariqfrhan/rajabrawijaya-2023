import Jumbotron from '@/layout/Jumbotron/Jumbotron';
import Perkenalan from '@/layout/Perkenalan/Perkenalan';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Jumbotron></Jumbotron>
      <Perkenalan></Perkenalan>
    </>
  );
}
