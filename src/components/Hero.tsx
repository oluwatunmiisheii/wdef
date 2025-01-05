import React from 'react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="bg-[#BDDAE9]">
      <div className="container mx-auto py-20">
        <div className="bg-[#BDDAE9]">
          <Image
            src="/images/wdef-logo.png"
            alt="logo"
            width={150}
            height={150}
            className="mix-blend-multiply"
          />
        </div>
        <div className="flex items-center">
          <div className="w-1/2">
            <h3 className="text-[#333333] font-bold text-6xl leading-normal">
              <span className="block">Creating equal </span>
              <span className="block">opportunities in</span>
              <span className="block">the tech world</span>
            </h3>
            <p className="leading-normal text-md text-[#333333] mt-10">
              Wilson&apos;s Digital Empowerment Foundation is a non-governmental <br />
              organization NGO dedicated to achieving tech <br /> inclusion for all youth.
            </p>
          </div>
          <div className="w-1/2 relative flex justify-center items-center">
            <div className="bg-[#F3D16B] w-full h-[500px] px-12 pb-8 relative z-0 top-10 flex items-center justify-center">
              <Image
                src="/images/hero.png"
                alt="hero"
                width={600}
                height={695}
                className="absolute z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
