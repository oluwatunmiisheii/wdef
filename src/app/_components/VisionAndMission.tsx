import React from 'react'
import Image from 'next/image'

export const VisionAndMission = () => {
  return (
    <section className="mt-14">
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-between gap-20">
          <div className="w-1/2">
            <h3 className="text-[#333333] font-bold text-3xl leading-10">
              What we are known for in <br /> transforming youth
            </h3>
            <div>
              <h5 className="font-bold text-[#333333] mt-6 text-[20px] mb-6">Vision</h5>
              <p className="text-[#7B7B7B] leading-8">
                A world where every youth, regardless of background, has equal access to digital
                resources and opportunities, empowering them to thrive in the technology-driven
                future..
              </p>
            </div>
            <div>
              <h5 className="font-bold text-[#333333] mt-6 text-[20px] mb-6">Mission</h5>
              <p className="text-[#7B7B7B] leading-8">
                Wilson&apos;s Digital Empowerment Foundation bridges the digital divide by providing
                youth in residential care and community programs with technology access, education,
                and mentorship. We distribute laptops, deliver comprehensive tech training, and
                foster long-term partnerships to inspire and prepare the next generation of tech
                innovators and leaders.
              </p>
            </div>
          </div>
          <div className="w-1/2 ml-auto relative justify-end ">
            {/* First image (on top) */}
            <Image
              src="/images/first_img.png"
              alt="first image"
              width={468}
              height={475}
              className="relative z-10"
            />

            <Image
              src="/images/vision_and_missionbg.png"
              alt="vision and mission"
              width={260}
              height={423}
              className="absolute z-0  bottom-[-40] left-[300] transform rotate-360"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
