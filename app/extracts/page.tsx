"use client"

import { motion } from "framer-motion"
import AudioPlayer from "@/components/audio-player"

const extracts = [
  {
    title: "My Life from Flowers (we are)",
    subtitle: "Voice and piano: Francesca Fargion",
    id: "extract1",
    audioUrl: "/audio/my-life.mp3",
  },
  {
    title: "Elsebet from Five Loud Portraits",
    subtitle: "Rock band and 5 seated artists [15']",
    description:
      "Conceived and directed by Burrows&Fargion. Sung portraits of 5 local artists, performed at Meteor Festival, Bergen, by Jonathan Burrows, Francesca Fargion and Matteo Fargion",
    id: "extract2",
    audioUrl: "/audio/Elisabet-Five-Loud-Portraits.mp3",
  },
  {
    title: "10 ABA Pieces (no 1)",
    subtitle: "Piano [15']",
    description: "Written for Tim Parkinson",
    id: "extract3",
    audioUrl: "/audio/10-ABA-pieces1.mp3",
  },
  {
    title: "Music for The Question Room",
    subtitle: "Piano and slides [60']",
    description: "Installation commissioned by the Science Museum, London",
    id: "extract4",
    audioUrl: "/audio/question-room.mp3",
  },
  {
    title: "Music for Two Quartets",
    subtitle: "Midi instruments, voices (Theo Clinkard, Sasha Roubicek, Tammy Arjona, Laurent Cavanna)",
    description: "Commissioned by Siobhan Davies Dance",
    id: "extract5",
    audioUrl: "/audio/music-for-two-quintets.mp3",
  },
  {
    title: "Music for Long Day's Journey into Night",
    subtitle: "Multi-tracked harmonium [21']",
    description:
      "Incidental music for Elmar Goerden's production of Eugene O'Neill's Eines langen Tages Reise in die Nacht for the Salzburger Festspiele/Residenztheater München",
    id: "extract6",
    audioUrl: "/audio/long-days-journey.mp3",
  },
  {
    title: "String Quartet no 4 (Bow Songs)",
    subtitle: "String quartet [4']",
    description: "Part of The Bow Project, devised by Michael Blake, performed by the Nightingale Quartet",
    id: "extract7",
    audioUrl: "/audio/string-4-bow.mp3",
  },
  // {
  //   title: "Music for Rodogune",
  //   subtitle: "Child's voice and electronics [16']",
  //   description:
  //     "Incidental music for Elmar Goerden's production of Pierre Corneille play, for the Residenz Theater, Munich. Voice: Francesca Fargion",
  //   id: "extract8",
  //   audioUrl: "/audio/Rodogune.mp3",
  // },
  {
    title: "You May Not Want To Be Here",
    subtitle:
      "Violin (Marc Sabat), prepared piano (Matteo Fargion), speaking voices (Marc Sabat, Francesca Fargion) [30']",
    description:
      "After a concept by Bruce Nauman, conceived and performed by Marc Sabat and Matteo Fargion at the Staatsgalerie, Stuttgart",
    id: "extract9",
    audioUrl: "/audio/ymnwtbh.mp3",
  },
  {
    title: "Music for Aka Blue",
    subtitle: "Multiple guitars [12']",
    description: "Music for a dance piece by Karl Jay Lewin",
    id: "extract10",
    audioUrl: "/audio/aka-blue.mp3",
  },
  {
    title: "Tosca Songs",
    subtitle: "Soprano, piano [19']",
    description: "Beth Griffith (soprano) and Dorothea Eppendorf (piano)",
    id: "extract11",
    audioUrl: "/audio/tosca-songs.mp3",
  },
  {
    title: "Senza Titolo (50 Pieces for violin and piano)",
    subtitle: "Violin, piano [20']",
    description: "Charles Mutter (violin) and Sally Rose (piano)",
    id: "extract12",
    audioUrl: "/audio/senza-titolo.mp3",
  },
  {
    title: "Eva, from Hungarian Songbook",
    subtitle: "Piano and voice: Matteo Fargion",
    id: "extract13",
    audioUrl: "/audio/eva-hungarian.mp3",
  },
  {
    title: "Piece for 2 Pianos",
    subtitle: "2 pianos [11']",
    description: "Kevin Volans and Uwe Diegel, pianos",
    id: "extract14",
    audioUrl: "/audio/piece-for-2-pianos.mp3",
  },
  {
    title: "Piano Oboe Double Bass",
    subtitle: "Piano, oboe, double bass [8']",
    id: "extract15",
    audioUrl: "/audio/piano-oboe-bass.mp3",
  },
]

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
}

export default function Extracts() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="max-w-4xl"
    >
      <div className="space-y-8">
        {extracts.map((extract, index) => (
          <motion.div
            key={extract.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="space-y-2"
          >
            <div className="flex items-start gap-3">
              <AudioPlayer src={extract.audioUrl} title={extract.title} />
              <div className="flex-1">
                <h3 className="text-black italic font-light">{extract.title}</h3>
                <p className="text-sm text-gray-700 font-light">{extract.subtitle}</p>
                {extract.description && <p className="text-sm text-gray-700 mt-1 font-light">{extract.description}</p>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
