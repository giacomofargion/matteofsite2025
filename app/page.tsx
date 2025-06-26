"use client"

import { motion } from "framer-motion"
import ImageCarousel from "@/components/image-carousel"


const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.5,
}

export default function Home() {
  const carouselImages = [
    {
      src: "/images/scores/ABA-piano.jpg",
      alt: "Musical score - Composition 1",
    },
    {
      src: "/images/scores/hands-score.jpg",
      alt: "Musical score - Composition 2",
    },
    {
      src: "/images/scores/Insorry.jpg",
      alt: "Musical score - Composition 3",
    },
    {
      src: "/images/scores/let-us-stop.jpg",
      alt: "Musical score - Composition 4",
    },
    {
      src: "/images/scores/score.jpg",
      alt: "Musical score - Composition 5",
    },
    {
      src: "/images/scores/songbook1.jpg",
      alt: "Musical score - Composition 6",
    },
    {
      src: "/images/scores/Welcome.jpg",
      alt: "Musical score - Composition 7",
    },
        {
      src: "/images/scores/boris.jpg",
      alt: "Musical score - Composition 8 ",
    },
            {
      src: "/images/scores/irrlicht.jpg",
      alt: "Musical score - Composition 9 ",
    },
     {
      src: "/images/scores/cage.jpg",
      alt: "Musical score - Composition 10 ",
    },
 {
      src: "/images/scores/three-trumpets.jpg",
      alt: "Musical score - Composition 11 ",
    },
     {
      src: "/images/scores/songbook10.jpg",
      alt: "Musical score - Composition 12 ",
    },
  ]

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="max-w-4xl w-full"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-6 md:mb-8"
      >
        <ImageCarousel images={carouselImages} autoPlayInterval={10000} className="max-w-2xl mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="prose prose-gray max-w-none"
      >
        <p className="text-sm leading-relaxed text-gray-700">
          Matteo Fargion (b. 1961) is a composer, performer and teacher. His eclectic work, stemming broadly from the
          English Experimental and New Simplicity movements, embraces the handmade and the small scale. He is known as
          much for his long standing collaboration with choreographer Jonathan Burrows as for the music he continues to
          write for concerts, theatre and dance performances. Uniquely he began not only to accompany the dance with his
          music but to become part of it, preempting and influencing a new generation of composers drawn to performance
          work. Fargion continues to tour and teach widely with Burrows, developing new forms of performance
          collaboration including the year-long online project <em>52 Portraits</em> {" "}
          which has attracted 60,000 visitors since 2016, the rock band series <em>'Music For Lectures'</em> (2018),
          and the London Contemporary Music Festival commission for dancer, singing pianist and orchestra{" "}
          <em>Let us stop this mad rush towards the end</em>{" "}
          (2019). He is also creating and performing with acclaimed Norwegian artist Mette Edvardsen,{" "}
          <em>Penelope Sleeps</em> 2019 and <em>oslo</em> 2017 as well as collaborating with Claire Croizé, Karl Jay-Lewin and Andrea Spreafico. His pioneering composition workshops for dancers have become legendary, further blurring the boundaries between music and dance.
        </p>
      </motion.div>
    </motion.div>
  )
}
