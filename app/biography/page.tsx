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

export default function Biography() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="max-w-4xl w-full"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <ImageWithCredit
            src="/images/gallery/watercolour.jpg"
            alt="Portrait of Matteo Fargion"
            credit="Watercolour by Geoffrey Chambers"
            width={400}
            height={500}
            className="max-w-md mx-auto lg:mx-0"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <div className="prose prose-gray max-w-none">
            <p className="text-sm leading-relaxed text-gray-700 font-light">

Matteo Fargion was born in Milan in 1961. When he was 11 he moved with his family to

Yorkshire and a few years later to South Africa. As a teenager he wrote dubious Prog Rock

concept albums and played bass guitar in a band. He later studied music at the University of

KwaZulu Natal, Durban, majoring in classical guitar and composition. The three years he spent

studying composition with Kevin Volans, who had just returned from Cologne where he had been

assistant to Karlheinz Stockhausen, were formative. Volans introduced him to the music of the

New Simplicity movement, co-founded by himself with Chris Newman, Gerald Barry, Walter

Zimmerman and Clarence Barlow. These composers, who collectively reacted against the

dominant heavy serialism of the Darmstadt School, favoured a hand made, personal and modest

approach to composition, were a huge influence on his work.

​<br /> <br />

Matteo graduated with a First Class B.Mus (Hons) degree in 1984 and moved to London. His

interest in English experimental music led him to study for a year with Howard Skempton, another

big influence on his work. For the first few years in London he devoted his time to writing music

for concerts, working with The Balanescu Quartet, Robyn Schulkowsky, Noriko Kawai, London

New Music and many other leading performers. He also played bass guitar in Chris Newman’s

experimental rock band Sexual Pleasure. In 1989 he won the Sonorities Composition Prize in

Belfast.

​<br /><br />

His interest in contemporary dance began in the late 1980s when he saw the Merce Cunningham

dance company at Sadlers Wells in London. This experience encouraged him to apply for the

Gulbenkian International Course for Choreographers and Composers, where he first wrote music

for dance and realised he enjoyed collaborating with other artists. In the same year he met the

choreographer Jonathan Burrows, with whom he has collaborated closely ever since. At first he

wrote music for Burrows’ dance pieces, including Dull Morning Cloudy Mild (1989) Stoics (1991),

Very (1992), Our (1994), Hands (1995), The Stop Quartet (with Kevin Volans, 1996)

and Singing (1999). In 2002, with the making of Both Sitting Duet, they redefined their

collaboration on more equal terms and brought Matteo onto the stage as a performer.

​​<br /><br />

Since then Burrows&Fargion have made a further 12 duets, namely The Quiet Dance (2005)

Speaking Dance (2006), Cheap Lecture (2009), The Cow Piece (2009), Counting to One Hundred

(2011), One Flute Note (2012), Show & Tell (2013), Rebelling Against Limit (2013), Body Not Fit for

Purpose (2014), Rewriting (2019) and Science Fiction (2020). All these works were conceived,

choreographed, composed, administrated and performed together. Most of them are still touring

and the two men have by now given over 500 performances in the following countries to date:

Australia, Austria, Belgium, Brazil, Bulgaria, Canada, Croatia, Cuba, Denmark, Estonia, Finland,

France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Japan, Latvia, Lithuania, Lebanon,

Norway, Peru, Poland, Portugal, Romania, South Korea, Spain, Sweden, Switzerland, Turkey, UK

and the USA. Both Sitting Duet won a 2004 New York Dance and Performance 'Bessie' Award,

and Cheap Lecture was chosen for the prestigious 2009 Het Theaterfestival in Belgium.

​<br /><br />

More recently Burrows&Fargion have involved other artists in their work. 52 Portraits (2016), a

year long online project with film maker Hugo Glendinning consisting of short gestural dances

with biographical songs, has had more than 90,000 viewings to date. Any Table Any Room (2017)

is a performance with clay objects, which invites four artists to join them onstage in each new

place the piece is presented. Their ongoing series Music For Lectures, in which they ask an artist

to write a talk which is then accompanied live by their rock band, has seen four iterations so far:

She Dancing (with Katye Coe, 2018), Every Word Was Once An Animal (with Mette Edvardsen,

2018), Get Lost (with Wendy Houstoun, 2020) and Disorienting Front (with Chrysa Parkinson,

2020).

​<br /><br />

In 1996 Matteo was awarded an artist residency at the prestigious Schloss Solitude in Stuttgart,

where he lived for 18 months. This productive period led, among many other projects, to the

writing of his chamber opera Le Bellezze d’Hortensia, as well as several collaborations with the

composer and violinist Marc Sabat. At Schloss Solitude Matteo also met the theatre director

Elmar Goerden, for whom he wrote music for productions at the Stuttgart Schauspielhaus, the

Residenz Theater Munich, the Schauspielhaus Bochum and the Theater am Josefstadt in Vienna.

He also collaborated with Thomas Ostermeier from the Schaubühne Berlin on Jon Fosse’s play

The Girl on the Sofa, at the Edinburgh Festival in 2002.

​<br /><br />

Around this time Matteo began a close working relationship with the British choreographer

Siobhan Davies. He wrote music for, and performed in, several of her pieces including The Art of

Touch (1995), Bank (1997), 2 Quartets (2007), and Minutes (2009). He choreographed/composed

Songbook for four of her dancers as part of the larger piece Rotor (2010). Matteo has also

collaborated closely with choreographer Karl Jay Lewin since 1997. Pieces with Karl include

Tinnuts, aka Blue (with Marc Sabat), Extremely Bad Dancing to Extremely French Music (2013)

and Extremely Pedestrian Chorales (2018). He is currently working on a new octet called If I can’t

dance I’m not coming, which will premiere in 2024.

​

In 2016 Matteo was commissioned by Dance On, a newly formed company of mature dancers in

Berlin, to create and direct their debut piece 7 Dialogues, which premiered at the Holland Festival

and toured widely for two years. The piece is a series of six solos choreographed by six

choreographers and theatre makers to instructions by Matteo, who then shaped these into an

hour long piece piece and wrote the music for it.

​<br /><br />

Another significant ongoing collaboration is with the Norwegian artist Mette Edvardsen, with

whom he has written oslo (2017), which was nominated for the Norwegian Critics Award, and the

opera Penelope Sleeps (2019), which toured widely, including the Wiener Festwochen and Ultima

Festival, Oslo.

​<br /><br />

With the Italian director Andrea Spreafico he has created several music theatre pieces: Vive la

Phrance (2017), We Have to Dress Gorgeously (2019) and two operas based on Dante’s

Purgatorio: Bad Dante Bad English Bad Opera (2022) and its sequel Durante and the Bad Loves

(2023).

​​<br /><br />

During the Covid lockdown periods, when touring was impossible, Matteo wrote an hour long

string quartet, The Nobby Saddy Quartet, which was premiered by Apartment House at the Music

We'd Like to Hear series in London, in September 2021.

​​<br /><br />

Matteo is also active as a teacher and since 2000 he has been a regular visiting lecturer at PARTS,

Anne Teresa de Keersmaeker’s dance school in Brussels. He has developed an approach to

teaching composition to choreographers and performance makers, set within a framework of

music practice but built also on his wealth of experience as a performer. He leads several

workshops each year, at universities, dance schools and festivals, including Impulstanz (Vienna),

Tanzwerkstatt Europa (Munich) Anghiari Dance Hub (Arezzo), Birmingham Conservatoire,

Salzburg Experimental Academy of Dance (SEAD), London Contemporary Dance School, Dance

House Melbourne and many others. He has also made 6 successful pieces for student dance

companies: for MapDance (Chichester); at the University of Bedfordshire (MA Dance programme);

two at Trinity Laban, London; and two at SEAD in Salzburg.

​​<br /><br />

Burrows&Fargion are currently working on a new duet, The Unison Piece, in which they both

chant and play electric guitars.

​​<br /><br />

He lives in London.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
