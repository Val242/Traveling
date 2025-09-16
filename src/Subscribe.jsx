import React from 'react'

function Subscribe() {
  return (
        <div className="grid gap-4 md:grid-cols-2 items-center mt-8 border-b border-b-[#C4C4C4] px-4 py-6">
        <p className="font-bold text-xl sm:text-2xl md:text-3xl text-center md:text-left">
          Join 98,641 Monthly Readers. <br /> Subscribe Today!
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
          <input
            type="email"
            placeholder="Email Address"
            className="border border-[#9B9DB3] p-2 rounded-[5px] flex-1"
          />
          <button className="bg-[#0336FF] text-white px-6 py-2 rounded-[5px]">
            Subscribe
          </button>
        </div>
      </div>
  )
}

export default Subscribe