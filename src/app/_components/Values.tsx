import React from 'react'
import Image from 'next/image'

const values = [
  {
    title: 'Digital Access',
    image: '/images/digital-access.svg',
    description:
      'We ensure every youth has equal access to digital resources and technology education, bridging the gap for those in residential care facilities and community programs.',
    imageProps: { width: 50, height: 40 },
  },
  {
    title: 'Tech Innovation',
    image: '/images/innovation.svg',
    description:
      'We cultivate digital skills and spark creativity, empowering youth to become confident innovators and active participants in the tech industry.',
    imageProps: { width: 28, height: 40 },
  },
  {
    title: 'Future Building',
    image: '/images/future-building.svg',
    description:
      'We create sustainable pathways to tech careers through comprehensive education, mentorship, and ongoing support, shaping a more equitable digital future.',
    imageProps: { width: 45, height: 40 },
  },
  {
    title: 'Youth Empowerment',
    image: '/images/youth-empowerment.svg',
    description:
      'We nurture confidence and capability through hands-on training, interactive workshops, and personalized guidance, helping youth realize their full potential in technology.',
    imageProps: { width: 40, height: 40 },
  },
]

export const Values = () => {
  return (
    <section className="bg-[#F5F5F5] py-10 px-4">
      <div className="max-w-6xl mx-auto py-10 flex justify-center flex-col items-center">
        <div className="text-center mb-8">
          <h3 className="text-[#8F8F8F] font-extrabold mb-4">Values</h3>
          <h2 className="text-[#333333] font-bold text-2xl font-ibmPlexSansSerif">
            Guiding Principles in Youth <br /> Empowerment
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div className="col-span-1 flex flex-col items-start gap-1" key={value.title}>
              <Image src={value.image} alt="logo" {...value.imageProps} className="mr-2 mt-2" />
              <div>
                <h3 className="text-[#333333] mb-2 font-bold text-[20px] font-ibmPlexSansSerif">
                  {value.title}
                </h3>
                <p className="text-[#7B7B7B] text-base leading-[28px] text-left text-balance">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
