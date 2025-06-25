"use client"

import { motion } from "framer-motion"
import ImageWithCredit from "@/components/image-with-credit"

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

const images = [
  {
    src: "/images/gallery/Durante1.jpg",
    alt: "Performance image 1",
    credit: "Durante Purgatorio, photo by Atle Auran",
  },
  {
    src: "/images/gallery/music-for-lectures-with-katie.jpg",
    alt: "Performance image 2",
    credit: "Music for Lectures with Katie Coe",
  },
  {
    src: "/images/gallery/cow-piece.jpg",
    alt: "Performance image 3",
    credit: "The Cow Piece",
  },
  {
    src: "/images/gallery/music-for-lectures-band-with-Katie-Coe.jpg",
    alt: "Performance image 4",
    credit: "Music for Lectures with Katie Coe",
  },
  {
    src: "/images/gallery/Durante5.jpg",
    alt: "Performance image 5",
    credit: "Durante Purgatorio, photo by Atle Auran",
  },
  {
    src: "/images/gallery/Durante4.jpg",
    alt: "Performance image 6",
    credit: "Durante Purgatorio, photo by Atle Auran",
  },
    {
    src: "/images/gallery/flowers-we-are.jpg",
    alt: "Performance image 7",
    credit: "Flowers We Are, photo by Herman Sorgeloos",
  },
      {
    src: "/images/gallery/harmonium.jpg",
    alt: "Performance image 8",
    credit: "Minutes from The Collection, photo by Pari Nadir",
  },
    {
    src: "/images/gallery/bbb1.jpg",
    alt: "Performance image 9",
    credit: "Bad Dante Bad English Bad Opera, photo by Arne Hauge",
  },
      {
    src: "/images/gallery/by-elly-white.jpg",
    alt: "Performance image 10",
    credit: "Photo by Elly White",
  },
        {
    src: "/images/gallery/cillian.jpg",
    alt: "Performance image 11",
    credit: "Science Fiction, photo by Cillian O'Neil",
  },
          {
    src: "/images/gallery/rewritting.jpg",
    alt: "Performance image 12",
    credit: "Rewritting, photo by Urška Boljkovac",
  },
   {
    src: "/images/gallery/penelope-sleeps.jpg",
    alt: "Performance image 13",
    credit: "Penelope Sleeps, photo by Werner Strouven",
  },
     {
    src: "/images/gallery/bnffp.jpg",
    alt: "Performance image 14",
    credit: "Body Not Fit For Purpose, photo by Ben Parks",
  },
       {
    src: "/images/gallery/andrea.JPG",
    alt: "Performance image 15",
    credit: "Andrea Spreafico/Matteo Fargion, photo by Robert M Johansen",
  },
         {
    src: "/images/gallery/we-have-to.JPG",
    alt: "Performance image 16",
    credit: "We Have To Dress Georgously, photo by Emma Spreafico",
  },
           {
    src: "/images/gallery/music-for-lectures.jpg",
    alt: "Performance image 17",
    credit: "Music for Lectures with Wendy Houstoun",
  },
             {
    src: "/images/gallery/teaching.jpg",
    alt: "Performance image 18",
    credit: "Teaching at Tanzwekstatt Europa, photo by Laura Morcillo",
  },
               {
    src: "/images/gallery/with-mette.jpg",
    alt: "Performance image 19",
    credit: "With Mette Edvardsen, photo by Bea Borgers",
  },
{
    src: "/images/gallery/solo.jpg",
    alt: "Performance image 20",
    credit: "The Solo Piece (video still)",
  },
]

export default function Images() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="max-w-4xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="aspect-[4/3]"
          >
            <ImageWithCredit
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              credit={image.credit}
              fill
              className="h-full"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
