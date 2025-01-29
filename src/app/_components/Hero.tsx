import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="bg-[#BDDAE9]">
      <div className="max-w-6xl mx-auto py-28">
        <div className="flex items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h3
              className="animate-slide-up-fade font-bold text-[#333333] text-[54px] leading-[68px] font-ibmPlexSansSerif"
              style={{ animationDuration: '700ms' }}
            >
              Creating equal opportunities through technology.
            </h3>
            <p
              className="leading-[36px] text-[20px] text-[#333333] mt-10 animate-slide-up-fade font-poppins"
              style={{ animationDuration: '900ms' }}
            >
              Wilson&apos;s Digital Empowerment Foundation is a non-governmental organization (NGO)
              dedicated to achieving tech inclusion for all youth through active training,
              mentorship, and career development. We empower young people in residential care
              facilities and community programs with technology skills, digital education, and
              pathways to tech careers.
            </p>
          </div>
          <div className="hidden lg:block lg:w-1/2 relative">
            <div className="flex justify-center items-center absolute">
              <Image
                src="/images/hero.png"
                alt="hero"
                width={300}
                height={200}
                className="z-10 translate-y-[-50%] right-0 w-[94%] h-[70%]"
              />
            </div>
            <div className="bg-[#F3D16B] w-full h-[400px] absolute top-0 left-0 right-0 translate-y-[-20%] z-1" />
          </div>
        </div>
      </div>
    </section>
  )
}
