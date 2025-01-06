'use client'

import { OurStrengths } from '@/app/_components/OurStrengths'
import { Values } from './_components/Values'
import { Objectives } from './_components/Objectives'
import { VisionAndMission } from './_components/VisionAndMission'
import { Hero } from './_components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <OurStrengths />
      <Values />
      <VisionAndMission />
      <Objectives />
    </>
  )
}
