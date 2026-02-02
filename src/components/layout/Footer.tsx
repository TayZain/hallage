"use client"

import React from 'react'

export default function Footer() {
  return (
    <div
      className='relative h-screen'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='fixed bottom-0 h-screen w-full'>
        <div className='w-full h-full bg-white relative'>
          <div className="grid grid-cols-4 h-full">
            <div className="absolute top-0 left-10 col-span-1 pt-10">
              <div className="flex flex-row gap-10 pl-10">
                <ul className='flex flex-col gap-2 mr-10'>
                  <h2 className='text-[1.5vw] pr-20 font-tanker mb-6 uppercase tracking-wider text-gray-500'>Address</h2>
                  <li className='text-black font-bespoke text-sm'>129 Bis Jean Dupont</li>
                  <li className='text-black font-bespoke text-sm'>75015 Paris</li>
                  <li className='text-black font-bespoke text-sm mt-2'>06 96 54 16 05</li>
                  <li className='text-black font-bespoke text-sm mt-2'>makeeeitstudio@gmail.com</li>
                </ul>
                <ul className='flex flex-col gap-2 mr-10'>
                  <h2 className='text-[1.5vw] font-bold font-tanker mb-6 uppercase tracking-wider text-gray-500'>Follow us</h2>
                  <li className='text-black font-bespoke text-sm mt-2'>Instagram</li>
                  <li className='text-black font-bespoke text-sm mt-2'>X</li>
                </ul>
                <ul className='flex flex-col gap-2'>
                  <h2 className='text-[1.5vw] font-bold font-tanker mb-6 uppercase tracking-wider text-gray-500'>Services</h2>
                  <li className='text-black font-bespoke text-sm mt-2'>Create</li>
                  <li className='text-black font-bespoke text-sm mt-2'>Accelerate</li>
                  <li className='text-black font-bespoke text-sm mt-2'>Innovation</li>
                  <li className='text-black font-bespoke text-sm mt-2'>Media</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-30 left-10 col-span-1 p-10">
              <h2 className='text-[2.5vw] font-tanker uppercase tracking-wider text-black'>REAL ESTATE</h2>
              <h2 className='text-[2.5vw] font-tanker uppercase tracking-wider text-black'>Spaces</h2>
              <h2 className='text-[2.5vw] font-tanker uppercase tracking-wider text-black'>crafted for life</h2>
            </div>
            <div className="absolute bottom-30 right-10 col-span-2">
              <h1 className='text-[9vw] font-tanker uppercase tracking-wider text-black'>HALLAGE</h1>
            </div>
          </div>
          <div className='absolute border-t border-black w-full bottom-0 left-0 right-0'>
            <div className='flex flex-row justify-between p-10'>
              <nav>
                <ul className='flex flex-row gap-10 pl-10'>
                  <li className='text-black font-tanker uppercase tracking-wider text-sm'>Privacy Policy</li>
                  <li className='text-black font-tanker uppercase tracking-wider text-sm'>Terms of Service</li>
                  <li className='text-black font-tanker uppercase tracking-wider text-sm'>Contact</li>
                </ul>
              </nav>
              <h2 className='text-sm font-tanker uppercase tracking-wider text-black pr-2'>© Makeee It Studio 2026</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
