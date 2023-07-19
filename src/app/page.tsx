import ArkanaInfo from '@/layout/ArkanaInfo/ArkanaInfo'
import Jumbotron from '@/layout/Jumbotron/Jumbotron'
import Rangkaian from '@/layout/Rangkaian/Rangkaian'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Jumbotron></Jumbotron>
    <ArkanaInfo />
    <Rangkaian />
    </>
  )
}
