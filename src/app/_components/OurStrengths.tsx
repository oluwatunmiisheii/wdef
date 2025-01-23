import React from 'react'
import Image from 'next/image'

export const OurStrengths = () => {
  return (
    <section className="mt-14">
      <div className="max-w-6xl mx-auto py-10">
        <div className="flex items-start justify-between">
          <div className="w-[40%] relative">
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
              <Image src="/images/2nd.png" alt="our-strengths" width={231} height={211} />
              <Image
                src="/images/3rd_img.png"
                alt="our-strengths"
                width={231}
                height={239}
                className="mt-4"
              />
              <Image src="/images/4th_img.png" alt="our-strengths" width={231} height={186} />
            </div>
          </div>
          <div className="w-1/2 ">
            <h3 className="text-[#333333] font-bold text-3xl leading-10">
              What we are known for in <br /> transforming youth
            </h3>
            <p className="leading-8 text-[16px] text-[#7B7B7B] mt-6">
              We are a team of passionate tech enthusiasts and educators working to bridge the
              digital gap and create equal opportunities in the tech world. Our NGO stands at the
              forefront of digital inclusion, ensuring that youth from all backgrounds - especially
              those in residential care facilities and community programs - have access to the vast
              potential of technology. We believe in the power of tech literacy to transform lives,
              open doors, and shape a more equitable future. We go beyond providing hardware; we
              cultivate digital skills, spark innovation, and nurture the next generation of tech
              leaders. Through our programs, we are building a world where every young person can
              participate fully and confidently in our increasingly digital society.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
