import React from 'react'
import styles from './Jumbotron.module.css'

export default function Jumbotron() {
    return (
        <>
            <div className='relative h-screen overflow-y-hidden'>
                <div className={`relative w-full h-screen ${styles.video}`}>
                    <video className='object-cover z-10 w-full h-full' autoPlay={true} loop controls={false} muted>
                        <source src='/assets/videos/v.mp4' type='video/mp4'></source>
                    </video>
                </div>
                <div className='absolute inset-0'>
                    <div className='container mx-auto relative flex flex-col h-full lg:flex-row lg:items-center'>
                        <div className='relative z-20'>
                            <h1 className='font-esthetique text-white  mt-52 text-7xl lg:mt-0 md:text-[120px]'>RAJA</h1>
                            <h1 className='font-esthetique text-white text-7xl lg:mt-0 md:text-[120px]'>Brawijaya 2023</h1>
                            <p className='font-esthetique text-white text-xl mt-3 md:text-3xl'>
                                Rangkaian Acara Jelajah Almamater Universitas Brawijaya
                            </p>
                        </div>
                        <img src='/assets/images/NAGA_1.png' className='z-10 absolute top-32 md:top-36 lg:top-28 lg:left-16 '></img>
                    </div>
                </div>
                <img src='/assets/images/awan_atas.png' className='w-full object-cover absolute lg:-bottom-20 -bottom-1'></img>
            </div>
        </>
    )
}
