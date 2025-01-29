import React from 'react'
import Image from 'next/image'

export const About = () => {
  return (
    <section className="mt-14">
      <div className="max-w-6xl mx-auto py-10">
        <div className="grid grid-cols-2 items-start justify-between gap-12">
          <div className="col-span-2 md:col-span-1 relative order-2 md:order-1">
            <Image
              src="/images/strength_bg.png"
              alt="our-strengths"
              width={450}
              height={367}
              className="absolute top-30 left-[-25] z-0 blur-lg"
            />
            <div className="grid grid-cols-2 gap-x-0 gap-y-2 relative z-10">
              <Image
                src="/images/first_img.png"
                alt="our-strengths"
                width={231}
                height={203}
                className="mt-8"
              />
              <Image
                src="/images/2nd.png"
                alt="our-strengths"
                width={231}
                height={211}
                className="object-cover"
              />
              <Image
                src="/images/3rd_img.png"
                alt="our-strengths"
                width={231}
                height={239}
                className="mt-4 rounded-md"
              />
              <Image
                src="/images/4th_img.png"
                alt="our-strengths"
                width={231}
                height={186}
                className="rounded-md"
              />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 order-1 md:order-2">
            <h3 className="text-[#333333] font-bold text-3xl leading-10 font-ibmPlexSansSerif">
              About Us
            </h3>
            <p className="leading-8 text-[16px] text-[#7B7B7B] mt-6 font-poppins">
              We are a team of passionate tech enthusiasts and educators dedicated to achieving tech
              inclusion for all youth. Our NGO leads transformative initiatives that empower young
              people from all backgrounds - especially those in residential care facilities and
              community programs - with the digital skills and opportunities needed to thrive in the
              tech industry. We believe in technology&apos;s power to transform lives and create
              equal opportunities. Going beyond hardware distribution, we provide comprehensive tech
              education, mentorship, and career guidance to nurture the next generation of digital
              innovators. Through our programs, we&apos;re building pathways to tech careers and
              ensuring every young person can confidently participate in our digital future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
