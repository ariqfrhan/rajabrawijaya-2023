'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Navbar.module.css'



export default function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [show, setShow] = useState(false);

    const pathname = usePathname();
    const changeOnScroll = () => {
        window.scrollY >= 50 ? setScrolled(true) : setScrolled(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeOnScroll)
        return () => {
            window.removeEventListener('scroll', changeOnScroll)
        }
    })

    return (
        <div className={`${pathname !== '/' ? 'bg-transparent' : scrolled ? 'bg-secondary transition duration-300' : 'bg-transparent'}
    fixed w-full px-8 py-2 top-0 z-50 flex items-center justify-between md:px-12`}>
            <div className='hover:cursor-pointer lg-w-fit'>
                <Link href={'/'}>
                    <Image
                        src={`/assets/logo.png`}
                        alt='logo'
                        objectFit='cover'
                        width={140}
                        height={121}
                    >
                    </Image>
                </Link>
            </div>
            <div className={`flex lg:static grow lg:pl-12 lg:justify-between fixed flex-col lg:flex-row top-0 bottom-0
            ${show ? 'left-20 right-0' : 'left-full -right-0'} bg-accent lg:bg-trans top-[80px] md:top-[90px] transition-all duration-500`}>
                <Link href={'/'}
                    className={`font-montserrat font-semibold whitespace-nowrap my-4 relative ${pathname !== '/' ? 'text-primary' : 'text-white'}
                    ${styles.a} ${pathname == '/' ? styles.active : ''}`}
                >
                    Beranda
                </Link>
                <Link href={'/berita-arkana'}
                    className={`font-montserrat font-semibold whitespace-nowrap my-4 relative ${pathname !== '/' ? 'text-primary' : 'text-white'}
                    ${styles.a} ${pathname == '/berita-arkana' ? styles.active : ''}`}
                >
                    Berita Arkana
                </Link>
                <Link href={'/keliling-brawijaya'}
                    className={`font-montserrat font-semibold whitespace-nowrap my-4 relative ${pathname !== '/' ? 'text-primary' : 'text-white'}
                    ${styles.a} ${pathname == '/keliling-brawijaya' ? styles.active : ''}`}
                >
                    Keliling Brawijaya
                </Link>
                <Link href={'/galeri'}
                    className={`font-montserrat font-semibold whitespace-nowrap my-4 relative ${pathname !== '/' ? 'text-primary' : 'text-white'}
                    ${styles.a} ${pathname == '/galeri' ? styles.active : ''}`}
                >
                    Galeri
                </Link>
                <Link href={'/ukm'}
                    className={`font-montserrat font-semibold whitespace-nowrap my-4 relative ${pathname !== '/' ? 'text-primary' : 'text-white'}
                    ${styles.a} ${pathname == '/ukm' ? styles.active : ''}`}
                >
                    UKM
                </Link>
                <Link href={'/faq'}
                    className={`font-montserrat font-semibold whitespace-nowrap my-4 relative ${pathname !== '/' ? 'text-primary' : 'text-white'}
                    ${styles.a} ${pathname == '/faq' ? styles.active : ''}`}
                >
                    FAQ
                </Link>
                <a href='/rajaapps' target='_blank'>
                    <button className='lg:hidden bg-accent bg-trans border-2 py-2 px-4 font-montserrat font-semibold rounded-lg text-white'>
                        RAJA Apps
                    </button>
                </a>
            </div>
            <div>
                <div className='w-full'>
                    <a href='/rajaapps' target='_blank'>
                        <button className={`hidden lg:block bg:trans border-2 px-4 py-2 rounded-lg font-semibold ${pathname !== '/' ? 'text-primary border-primary' : 'text-white border-white'}`}>
                            RAJA Apps
                        </button>
                    </a>
                </div>
                <button
                    type='button'
                    className='w-6 h-6 lg:hidden'
                    onClick={() => {
                        if (!show) {
                            setShow(true);
                        } else {
                            setShow(false);
                        }
                    }}
                >
                    {!show && (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className={` opacity-80 ${pathname !== '/' ? 'fill-secondary' : 'fill-primary'}`}
                            viewBox='0 0 448 512'
                        >
                            <path d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z' />
                        </svg>
                    )}
                    {show && (
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' className='opacity-80 fill-primary'>
                            <path d='M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z' />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    )
}
