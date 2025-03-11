import { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Play, X } from 'lucide-react'

interface VideoPlayerProps {
  videoId: string
  thumbnailUrl: string
}

export const VideoPlayer = ({ videoId, thumbnailUrl }: VideoPlayerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`

  return (
    <>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20" />
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          onClick={() => setIsOpen(true)}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
          <div className="relative z-10 flex items-center justify-center">
            <div
              className="
              bg-white/90 rounded-full p-6
              transform transition-all duration-300 ease-out
              group-hover:scale-110 group-hover:bg-white
              shadow-lg group-hover:shadow-xl
            "
            >
              <Play
                className="w-12 h-12 text-[#333333] transform transition-all duration-300"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-4xl p-1 bg-black border-none"
          onInteractOutside={(e) => e.preventDefault()}
          showClose={false}
        >
          <DialogTitle />
          <DialogClose className="absolute right-0 -top-8 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground bg-white rounded-full p-1">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="aspect-video w-full">
            {isOpen && (
              <iframe
                src={videoUrl}
                className="w-full h-full"
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
