'use client'

import { About } from '@/app/_components/About'
import { Values } from './_components/Values'
import { Objectives } from './_components/Objectives'
import { VisionAndMission } from './_components/VisionAndMission'
import { Hero } from './_components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <VisionAndMission />
      <Objectives />
    </>
  )
}
