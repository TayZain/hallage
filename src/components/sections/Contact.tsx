'use client';

import React from 'react'

const Contact = () => {
  return (
    <div className="relative z-10 h-screen bg-black text-white">


      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[35%] ml-10">
        <h2 className="-rotate-90 origin-center text-[14vw] font-tanker uppercase tracking-wider whitespace-nowrap">
          Contact
        </h2>
      </div>

      <div className="h-full flex items-center pl-[30vw] pr-10">
        <form className="w-full">

          <div className="grid grid-cols-3 gap-8 py-6 border-t border-b border-white/30">
            <label className="font-tanker uppercase tracking-wider text-lg">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="col-span-2 bg-transparent font-bespoke text-lg focus:outline-none placeholder:text-white/40"
            />
          </div>

          <div className="grid grid-cols-3 gap-8 py-6 border-b border-white/30">
            <label className="font-tanker uppercase tracking-wider text-lg">Your Email</label>
            <input
              type="email"
              placeholder="john.doe@email.com"
              className="col-span-2 bg-transparent font-bespoke text-lg focus:outline-none placeholder:text-white/40"
            />
          </div>

          <div className="grid grid-cols-3 gap-8 py-6 border-b border-white/30">
            <label className="font-tanker uppercase tracking-wider text-lg">Your Company</label>
            <input
              type="tel"
              placeholder="Company Name"
              className="col-span-2 bg-transparent font-bespoke text-lg focus:outline-none placeholder:text-white/40"
            />
          </div>

          <div className="grid grid-cols-3 gap-8 py-6 border-b border-white/30">
            <label className="font-tanker uppercase tracking-wider text-lg">Subject</label>
            <select
              className="col-span-2 bg-transparent font-bespoke text-lg focus:outline-none placeholder:text-white/40"
            >
              <option value="">Select a subject</option>
              <option value="subject1">Subject 1</option>
              <option value="subject2">Subject 2</option>
              <option value="subject3">Subject 3</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-8 py-6 border-b border-white/30">
            <label className="font-tanker uppercase tracking-wider text-lg">YourMessage</label>
            <textarea
              rows={3}
              placeholder="Tell us more..."
              className="col-span-2 bg-transparent font-bespoke text-lg focus:outline-none placeholder:text-white/40 resize-none"
            />
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="font-tanker uppercase tracking-wider text-lg border border-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Contact