"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface iAppProps {
    overview: string;
    youtubeUrl: string;
    id: number;
    age: number;
    title: string;
    releaseDate: number;
    duration: number;
}

export default function MovieButtons({overview, youtubeUrl, id, age, title, releaseDate, duration }: iAppProps) {
    const [open, setOpene] = useState(false);
  return <>
    <Button onClick={() => setOpene(true)} className="text-lg font-medium">
        <PlayCircle className="mr-2 h-6 w-6"/> Play
    </Button>
    <Button onClick={() => setOpene(true)} className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white">
        <InfoIcon className="mr-2 h-6 w-6"/> Learn More 
    </Button>

    <PlayVideoModal state={open} changeState={setOpene} age={age} title={title} overview={overview} youtubeUrl={youtubeUrl} duration={duration} release={releaseDate} key={id} />
  </>
}

