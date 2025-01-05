import { OurStrengths } from '@/components/OurStrengths'
import { Hero } from '@/components/Hero'
import { Values } from '@/components/Values'
import { Objectives } from '@/components/Objectives'
import { VisionAndMission } from '../components/VisionAndMission'

export default function Home() {
  return (
    <div>
      <Hero />
      <OurStrengths />
      <Values />
      <VisionAndMission />
      <Objectives />
    </div>
  )
}
