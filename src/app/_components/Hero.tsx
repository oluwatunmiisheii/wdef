import { VideoPlayer } from './VideoPlayer'
import { Button } from '@/components/button'
import { Download } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="bg-[#BDDAE9] w-full flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <h3
              className="animate-slide-up-fade font-bold tracking-tight text-3xl sm:text-[42px] text-[#333333] leading-tight font-ibmPlexSansSerif"
              style={{ animationDuration: '700ms' }}
            >
              Creating equal opportunities through technology.
            </h3>
            <p
              className="text-base sm:text-lg text-[#333333] leading-relaxed animate-fade-in"
              style={{ animationDuration: '900ms' }}
            >
              Wilson&apos;s Digital Empowerment Foundation is a non-governmental organization (NGO)
              dedicated to achieving tech inclusion for all youth through active training,
              mentorship, and career development. We empower young people in residential care
              facilities and community programs with technology skills, digital education, and
              pathways to tech careers.
            </p>
            <Button variant="primary" className="py-2.5 hidden">
              <Download size={16} className="mr-2" />
              Download Handbook
            </Button>
          </div>
          <div
            className="w-full lg:w-1/2 mt-6 lg:mt-0 relative animate-fade-in"
            style={{ animationDelay: '500ms' }}
          >
            <div className="bg-transparent w-full rounded-2xl flex items-center justify-center">
              <VideoPlayer videoId="UxACmIxisig" thumbnailUrl="/images/wilson.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
