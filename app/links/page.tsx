"use client"

import { motion } from "framer-motion"

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

export default function Links() {
  const personalLinks = [
    { name: "Soundcloud", href: "https://soundcloud.com/matteofargion" },
    { name: "Burrows&Fargion", href: "https://www.burrowsfargion.com/" },
    { name: "Burrows&Fargion Vimeo", href: "https://vimeo.com/showcase/burrowsfargion" },
    { name: "Motion bank", href: "https://www-archive.motionbank.org/en/content/jonathan-burrows-matteo-fargion.html" },
    { name: "52 portraits", href: "https://vimeo.com/showcase/6691019/video/380214753" },
  ]

  const collaboratorLinks = [
    { name: "Mette Edvardsen", href: "https://www.metteedvardsen.be/" },
    { name: "Karl Jay-Lewin", href: "https://www.karljaylewin.info/" },
    { name: "ECCE", href: "http://www.ec-ce.be/" },
    { name: "Nora", href: "https://www.noramoves.com/about" },
    { name: "Spreafico Eckly", href: "https://www.spreaficoeckly.no/" },
    { name: "Siobhan Davies", href: "https://www.siobhandavies.com/events/archive-day/" },
    { name: "Giacomo Fargion", href: "https://giacomofargion.com/" },
    { name: "Tim Parkinson", href: "https://www.untitledwebsite.com/" },
    { name: "Jonathan Burrows", href: "https://www.burrowsfargion.com/" },
    { name: "Hugo Glendinning", href: "https://hugoglendinning.com/" },
  ]

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <ul className="space-y-2">
            {personalLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-light"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-sm text-gray-700 mb-4 font-light">{"Collaborators' websites:"}</h3>
          <ul className="space-y-2">
            {collaboratorLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.03, duration: 0.3 }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-light"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}
