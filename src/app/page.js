import { OurStrengths } from "@/components/OurStrengths";
import { Hero } from "../components/Hero";
import Image from "next/image";
import { Values } from '../components/Values';
import { Objectives } from "@/components/Objectives";
import { VisionandMission } from '../components/VisionandMission';

export default function Home ()
{
  return (
    <div>
      <Hero />
      <OurStrengths />
      <Values />
      <VisionandMission />
      <Objectives />
    </div>
  );
}
