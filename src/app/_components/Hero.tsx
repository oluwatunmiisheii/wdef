import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import { useState } from 'react'

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(true)
  const videoId = 'UxACmIxisig'
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`
  return (
    <>
      <section className="bg-[#BDDAE9]">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h3
                className="animate-slide-up-fade font-bold text-[#333333] text-4xl leading-[50px] md:text-[52px] md:leading-[68px] font-ibmPlexSansSerif"
                style={{ animationDuration: '700ms' }}
              >
                Creating equal opportunities through technology.
              </h3>
              <p
                className="text-base leading-8 md:leading-9 md:text-[20px] text-[#333333] mt-10 animate-slide-up-fade font-poppins"
                style={{ animationDuration: '900ms' }}
              >
                Wilson&apos;s Digital Empowerment Foundation is a non-governmental organization
                (NGO) dedicated to achieving tech inclusion for all youth through active training,
                mentorship, and career development. We empower young people in residential care
                facilities and community programs with technology skills, digital education, and
                pathways to tech careers.
              </p>
            </div>
            <div className="hidden lg:block lg:w-1/2 relative">
              <div className="flex justify-center items-center absolute">
                <iframe
                  hidden
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/UxACmIxisig?si=QfJ1MqwcPOKSietM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
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
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>Watch Video</DialogTrigger>
        <DialogContent className="max-w-3xl overflow-hidden bg-white">
          <div className="aspect-video relative">
            {isOpen && (
              <iframe
                src={videoUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
