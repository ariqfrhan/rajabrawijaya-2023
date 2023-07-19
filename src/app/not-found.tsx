import React from 'react'

export default function Custom404() {
  return (
    <div className='container w-screen min-h-screen flex justify-center'>
        <div className='w-full h-full absolute overflow-hidden  drop-shadow-md'
            style={{
                backgroundImage :`url(/assets/images/greenpattern.png)`
            }}
        ></div>
        <div className='space-y-2'>
            <div className='w-full md:w-[50vw] h-full mx-auto'>
                <h1>404</h1>
            </div>
        </div>
    </div>
  )
}
