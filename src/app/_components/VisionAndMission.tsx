import React from 'react'
import Image from 'next/image'

export const VisionAndMission = () => {
  return (
    <section className="mt-14">
      <div className="max-w-6xl mx-auto py-10">
        <div className="grid grid-cols-2 gap-20">
          <div className="col-span-2 md:col-span-1">
            <div>
              <h5 className="font-bold text-[#333333] mt-6 text-[20px] mb-6 font-ibmPlexSansSerif">
                Vision
              </h5>
              <p className="text-[#7B7B7B] leading-8 font-poppins">
                A world where every youth, regardless of background, has equal access to digital
                resources and opportunities, empowering them to thrive in the technology-driven
                future..
              </p>
            </div>
            <div>
              <h5 className="font-bold text-[#333333] mt-6 text-[20px] mb-6 font-ibmPlexSansSerif">
                Mission
              </h5>
              <p className="text-[#7B7B7B] leading-8 font-poppins">
                Wilson&apos;s Digital Empowerment Foundation bridges the digital divide by providing
                youth in residential care and community programs with technology access, education,
                and mentorship. We distribute laptops, deliver comprehensive tech training, and
                foster long-term partnerships to inspire and prepare the next generation of tech
                innovators and leaders.
              </p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 relative">
            <Image
              src="/images/first_img.png"
              alt="first image"
              width={468}
              height={475}
              className="z-10 relative"
            />
            <Image
              src="/images/vision_and_missionbg.png"
              alt="vision and mission"
              width={260}
              height={423}
              className="absolute z-0 left-[10%] transform rotate-360 hidden"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
