import { HiLocationMarker } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill, BsSpotify } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="bg-[#C6A477] w-full px-12 py-4 items-center">
            <p className="font-esthetique text-primary text-2xl">Sekretariat RAJA Brawijaya</p>
            <div>
                <div className="flex flex-row justify-start items-center">
                    <HiLocationMarker className='text-primary' />
                    <p className='ml-2 text-white font'>Gedung EM-DPM UB Lantai 1, Jln. Veteran 06C Malang 65145</p>
                </div>
                <div className="flex flex-row justify-start items-center">
                    <MdEmail className='text-primary' />
                    <p className='ml-2 text-white font'>rajabrawijaya2021@gmail.com</p>
                </div>
                <div className="flex flex-row justify-start items-center">
                    <BsFillTelephoneFill className='text-primary' />
                    <p className='ml-2 text-white font'>0816-552-514</p>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center my-3'>
                <div className='flex flex-row gap-3'>
                    <div className='rounded-full p-2 bg-primary'>
                        <Image src='/assets/icons/Line.svg' width={20} height={20} alt={'logo-line'} />
                    </div>
                    <div className='rounded-full p-2 bg-primary'>
                        <BsInstagram className='text-[#f89434]' style={{ height: '20px', width: '20px' }} />
                    </div>
                    <div className='rounded-full p-2 bg-primary'>
                        <AiOutlineTwitter className='text-[#f89434]' style={{ height: '20px', width: '20px' }} />
                    </div>
                    <div className='rounded-full p-2 bg-primary'>
                        <FaTiktok className='text-[#f89434]' style={{ height: '20px', width: '20px' }} />
                    </div>
                    <div className='rounded-full p-2 bg-primary'>
                        <AiFillYoutube className='text-[#f89434]' style={{ height: '20px', width: '20px' }} />
                    </div>
                    <div className='rounded-full p-2 bg-primary'>
                        <BsSpotify className='text-[#f89434]' style={{ height: '20px', width: '20px' }} />
                    </div>

                </div>
                <div>
                    <p className='text-white font-montserrat font-medium text-lg'>©2023, Tim IT RAJA Brawijaya 2023</p>
                </div>
            </div>
        </footer>

    )
}
