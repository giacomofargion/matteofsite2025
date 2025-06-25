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

export default function ListOfWorks() {
  const worksByYear = [
    {
      year: "2024",
      works: [
        {
          title: "The piece that starts on a boat",
          details: "22 dancers. [30']",
          description: "Made with 2nd year students at SEAD, Salzburg.",
          premiere: "Premiere at Joseph Eckhart Theater 2/02/2024",
          link: "https://vimeo.com/926218467/2d917d32cc",
        },
      ],
    },
    {
      year: "2023",
      works: [
        {
          title: "The Stealing Piece",
          details: "24 dancers. [25']",
          description: "Made with 2nd year students at SEAD, Salzburg.",
          premiere: "Premiere at Joseph Eckhart Theater 10/03/2023",
          link: "https://vimeo.com/839238173/4366e244e0?embed_email_provider=gmail",
        },
        {
          title: "Durante & the Bad Loves",
          details: "4 singers, 4 Moog Grandmothers synthesisers, violin, viola. [90']",
          description: "Text, concept and direction by Spreafico Eckly.",
          premiere:
            "Premiere at Rosendal Theater, Trondheim 14/10/2023, performed by Martha MacBean, Francesca Fargion, Matteo Fargion, Robert M Johanson, Björn Guo, Stefan Penjin and Live Sunniva Smidt.",
          link: "https://vimeo.com/manage/videos/973075815/74b0e553b6",
        },
      ],
    },
    {
      year: "2021",
      works: [
        {
          title: "Bad Dante Bad English Bad Opera",
          details: "soprano, alto, tenor, baritone, string trio. [90']",
          description: "Text, concept and direction by Spreafico Eckly.",
          premiere:
            "Premiere at Rosendal Theater, Trondheim 17/09/2021, performed by Martha MacBean, Francesca Fargion, Matteo Fargion, Robert M Johanson, Björn Guo, Stefan Penjin and Live Sunniva Smidt.",
          link: "https://player.vimeo.com/video/659303502?h=ff13cc2949&badge=0&autopause=0&player_id=0&app_id=58479/embed",
        },
        {
          title: "Music for En Route",
          details: "Trumpet, alto sax, trombone, tuba, percussion [20']",
          description: "Commissioned by Luca Silvestrini for Protein Dance",
        },
        {
          title: "Science Fiction",
          details: "2 Synthesisers, snare drum, cow bell, floor tom and cymbal. [30']",
          description: "Conceived, directed and performed by Burrows&Fargion.",
          link: "https://vimeo.com/showcase/6691019/video/689350293",
        },
      ],
    },
    {
      year: "2020",
      works: [
        {
          title: "String Quartet no 5. The nobby saddy quartet",
          details: "String Quartet [60']",
          link: "https://soundcloud.com/matteofargion/the-nobby-saddy-quartet-excerpt",
        },
        {
          title: "Music for Lectures/Disorienting Front",
          details: "Speaker and rock band [15']",
          description:
            "Text by Chrysa Parkinson. Part of a series of talks set to music. Conceived by Burrows&Fargion. Performed by Chrysa Parkinson, Jonathan Burrows, Francesca Fargion and Matteo Fargion.",
          link: "https://vimeo.com/showcase/6691019/video/473052044",
        },
        {
          title: "Music for Lectures/Get Lost",
          details: "Speaker and rock band [30']",
          description:
            "Text by Wendy Houstoun. Part of a series of talks set to music. Conceived by Burrows&Fargion. Performed by Wendy Houstoun, Jonathan Burrows, Francesca Fargion and Matteo Fargion. Podcast version commissioned by GIFT Festival",
          link: "https://vimeo.com/showcase/6691019/video/472990825",
        },
      ],
    },
    {
      year: "2019",
      works: [
        {
          title: "Let us stop this mad rush towards the end",
          details: "Voice, piano, orchestra, dancer. [18']",
          description:
            "Conceived and directed by Burrows&Fargion, commissioned by London Contemporary Music Festival 2019, performed by the LCMF Orchestra, (dir. Jack Sheen), Francesca Fargion and Claire Godsmark.",
          link: "https://vimeo.com/383039599",
        },
        {
          title: "Penelope Sleeps (an opera)",
          details: "Soprano, harmonium, Korg synthesiser, speaking voice [90']",
          description:
            "Text by Mette Edvardsen. Text, concept and direction by Mette Edvardsen, commissioned by Kunsten Festival Brussels, performed by Angela Hicks, Mette Edvardsen, Matteo Fargion",
          link: "https://vimeo.com/414492748/dc213ccb6b",
        },
        {
          title: "We Have to Dress Gorgeously",
          details: "2 voices, 3 pianos (tuned to 334Hz,440Hz,446Hz) [60']",
          description:
            "With Andrea Spreafico. A sung punk history of music. Devised and directed by Andrea Spreafico and commissioned by Borealis Festival, Bergen. Performed by Robert M Johanson, Matteo Fargion, Martha Berit, Belt Mai Goto and Håkon Sjøvik Olsen",
          link: "https://vimeo.com/366305396",
        },
        {
          title: "Flowers (we are)",
          details: "Piano, synthesiser, voices, percussion, ring modulation [90']",
          description:
            "With Claire Croize. A dance piece by Claire Croize, commissioned by the Concertgebouw Brugge. Music performed by Francesca Fargion and Matteo Fargion",
          link: "https://vimeo.com/313165169",
        },
        {
          title: "Good Morning Milton Keynes!",
          details: "Brass band and chamber choir [15']",
          description: "With Andrea Spreafico. Commissioned by Festival of Urban Living, Milton Keynes",
        },
      ],
    },
    {
      year: "2018",
      works: [
        {
          title: "The Solo Piece",
          details: "Dance solo [23']",
          description: "Commissioned by Labor Sonor, Berlin",
          link: "https://vimeo.com/327470885",
        },
        {
          title: "Music For Lectures/Every word was once an animal",
          details: "Speaker and rock band [35']",
          description:
            "Text by Mette Edvardsen. Part of a series of talks set to music. Conceived by Burrows&Fargion. Performed by Mette Edvardsen, Jonathan Burrows, Francesca Fargion and Matteo Fargion",
          link: "https://vimeo.com/289219445",
        },
        {
          title: "Music for Lectures/ She Dancing",
          details: "Speaker and rock band [18']",
          description:
            "Text by Katie Coe. Part of a series of talks set to music. Conceived by Burrows&Fargion. Performed by Katie Coe, Jonathan Burrows, Francesca Fargion and Matteo Fargion",
        },
        {
          title: "Extremely Pedestrian Chorales",
          details: "Dance piece with pre-recorded music and optional live choir [45']",
          description:
            "With Karl Jay Lewin. Performed by Ellie Sikorski/Janine Fletcher, Claire Godsmark, Neil Callaghan, Karl Jay Lewin",
          link: "https://vimeo.com/burrowsfargion/review/417584853/9474c2c59f",
        },
      ],
    },
    {
      year: "2017",
      works: [
        {
          title: "Seven Dialogues",
          details: "Dance piece with live music [60']",
          description:
            "Commissioned by Dance On, Berlin, for their debut tour. Concept, direction and music by Matteo Fargion. Choreography by Ivo Dimchev, Hetain Patel, Lucy Suggate, Noe Soulier, Beth Gill, Tim Etchells and Etienne Guilloteau",
          link: "https://numeridanse.com/en/publication/7-dialogues-frederic-tavernini-et-noe-soulier/",
        },
        {
          title: "Any Table Any Room",
          details: "Dance piece for 6 performers and 36 clay objects [45']",
          description: "Conceived and directed by Burrows&Fargion",
          link: "https://vimeo.com/371838346",
        },
        {
          title: "Violin & Piano Music",
          details: "Violin, piano, pre-recorded voice [15']",
          description: "Commissioned by 840, performed by Ruben Zilberstein and Mateusz Rettner",
        },
        {
          title: "Vive la Phrance",
          details: "For dancer, actor and musician (piano, voice, melodica, mandolin, ring modulation) [90']",
          description: "With Andrea Spreafico. Performed by Robert M Johanson, Mate Meszaros, Matteo Fargion",
          link: "https://vimeo.com/243718250",
        },
        {
          title: "Music for oslo",
          details: "Chamber choir seated in audience [22']",
          description: "For Mette Edvardsen's solo performance oslo",
        },
        {
          title: "Irrlicht",
          details: "2 voices, rattles, mouth organs [10']",
          description:
            "Conceived and performed by Burrows&Fargion. Commissioned for the opening night of the Musikfestival Bern",
        },
        {
          title: "Five Loud Portraits",
          details: "Rock band and 5 seated artists [15']",
          description:
            "Conceived and directed by Burrows&Fargion. Sung portraits of 5 local artists, performed at Meteor Festival, Bergen, by Jonathan Burrows, Francesca Fargion and Matteo Fargion",
        },
      ],
    },
    {
      year: "2016",
      works: [
        {
          title: "52 Portraits",
          details: "voices, various midi and other instruments, dancers, [140']",
          description:
            "Year long online project consisting of short 'portrait' films of 52 performers with biographical songs. Made with Jonathan Burrows and film maker Hugo Glendinning. Music performed by Francesca Fargion & Matteo Fargion. Commissioned by Sadlers Wells Theatre.",
          link: "https://vimeo.com/380214753",
        },
        {
          title: "Der Moderne Tanz",
          details: "Piano and voice, dancer [15']",
          description:
            "Conceived and directed by Burrows&Fargion. Performance/ installation commissioned by the Art-Music-Dance Staging for the Derrida de Moroda Archive exhibition, Museum der Moderne, Salzburg. Choreographed and performed by Claire Godsmark, music by Matteo Fargion. Film By Hugo Glendinning",
          link: "https://vimeo.com/156835094",
        },
      ],
    },
    {
      year: "2015",
      works: [
        {
          title: "Eleanor and Flora Music",
          details: "Dance piece [35']",
          description:
            "Concept and direction by Burrows&Fargion, choreography by Eleanor Sikorski and Flora Wellesley Wesley, commissioned by Nora",
          link: "https://vimeo.com/370906853",
        },
      ],
    },
    {
      year: "2014",
      works: [
        {
          title: "Body Not Fit For Purpose",
          details: "Mandolin and voice, dancer, [30']",
          description: "Conceived, directed and performed by Burrows&Fargion. Commissioned by the Venice Biennale",
          link: "https://vimeo.com/showcase/6691019/video/383040702",
        },
        {
          title: "The Madonna Project",
          details: "Melodica, voice, dance, [15']",
          description: "Conceived, directed and performed by Burrows&Fargion. Commissioned by the Venice Biennale",
        },
        {
          title: "Rebelling Against Limit (a lecture/concert)",
          details: "Piano pieces, speaker, slides [12']",
          description: "Text by Jonathan Burrows, Drawings by Peter Rapp, Music by Matteo Fargion.",
        },
        {
          title: "Songbook",
          details: "2 performers at tables, mouth organs [15']",
          description: "Commissioned and performed by Tim Parkinson and James Saunders",
          link: "https://vimeo.com/413148813/ab59487e6d",
        },
        {
          title: "The Elders Project",
          details: "Dance piece with songs [30']",
          description:
            "Conceived, directed and performed by Burrows&Fargion and a cast of older dancers. Commissioned by the Elixir Festival, Sadlers Wells",
          link: "https://example.com/elders-project",
        },
      ],
    },
    {
      year: "2013",
      works: [
        {
          title: "Extremely bad dancing to extremely French music",
          details: "Piano, bass drum, kazoo, rattle and dance [45']",
          description:
            "With Karl Jay Lewin. Conceived and directed by Karl Jay Lewin and Matteo Fargion. Performed by Karl Jay Lewin and Tim Parkinson",
          link: "https://vimeo.com/85103828",
        },
        {
          title: "10 ABA Pieces",
          details: "Piano [15']",
          description: "Written for Tim Parkinson",
        },
        {
          title: "Music for Vor dem Ruhestand",
          details: "String quartet [25']",
          description:
            "Incidental music for Elmar Goerden's production of Thomas Berhard's play for the Theater in der Josefstadt, Vienna",
        },
        {
          title: "Show & Tell (a lecture/concert)",
          details: "Piano and 2 speaking voices, film [40']",
          description: "Conceived, directed and performed by Burrows&Fargion",
          link: "https://vimeo.com/383037603",
        },
      ],
    },
    {
      year: "2012",
      works: [
        {
          title: "Music for John Gabriel Borkman",
          description:
            "Incidental music for Elmar Goerden's production of Ibsen's play for the Theater in der Josefstadt, Vienna",
        },
        {
          title: "One Flute Note",
          details: "Dance piece with pre-recorded music on midi instruments [30']",
          description: "Conceived, directed and performed by Burrows&Fargion",
          link: "https://vimeo.com/383038465",
        },
        {
          title: "Counting to One Hundred",
          details: "Dance piece with pre-recorded music for multi-tracked voice and midi instruments [30']",
          description: "Conceived, directed and performed by Burrows&Fargion",
        },
      ],
    },
    {
      year: "2011",
      works: [
        {
          title: "Wrong Songs",
          details: "Dance Piece [20']",
          description: "Commissioned and performed by Mapdance, Chichester",
        },
        {
          title: "6 Songs for Gill",
          details: "Dance piece, [18']",
          description: "Commissioned by Trinity Laban, performed by BA 3rd year students",
        },
      ],
    },
    {
      year: "2010",
      works: [
        {
          title: "Shouting Dance",
          details: "Dance piece for teenagers, piano [30']",
          description:
            "Conceived and directed by Burrows&Fargion and performed by 12 teenagers and Matteo Fargion. Commissioned by Cultuurcentrum Hasselt and Dans in Limberg, Belgium",
        },
        {
          title: "Songbook",
          details: "4 speaking and singing dancers, mouth organs [20']",
          description:
            "Commissioned as part of Rotor by Siobhan Davies Dance. Performed by Charlie Morrissey, Annie Lok, Lindsey Butcher and Andrea Buckley",
        },
      ],
    },
    {
      year: "2009",
      works: [
        {
          title: "Music for The Question Room",
          details: "Piano and slides [60']",
          description: "Installation commissioned by the Science Museum, London",
        },
        {
          title: "Cheap Lecture",
          details: "Live and pre-recorded piano, 2 voices [30']",
          description: "Conceived, directed and performed by Burrows&Fargion",
          link: "https://vimeo.com/383331579",
        },

        {
          title: "The Cow Piece",
          details: "Dance duet with 12 plastic cows, harmonium, melodeon, mandolin, mouth organs, voices, [30']",
          description: "Conceived, directed and performed by Burrows&Fargion",
          link: "https://vimeo.com/383330537",
        },
        {
          title: "Minutes",
          details: "Dance/music piece with harmonium, ukuleles, voice, dancer [180']",
          description:
            "Part of The Collection by Siobhan Davies, premiered at Victoria Miro Gallery, London. Performed by Catherine Bennett and Matteo Fargion",
        },
      ],
    },
    {
      year: "2008",
      works: [
        {
          title: "Dancing Songs",
          details: "Dance piece, [20']",
          description: "Commissioned by Trinity Laban, performed by BA 3rd year students",
        },
      ],
    },
    {
      year: "2007",
      works: [
        {
          title: "Music for Two Quartets",
          details: "Midi instruments, voices, [60']",
          description: "Commissioned by Siobhan Davies Dance",
        },
      ],
    },
    {
      year: "2006",
      works: [
        {
          title: "Music for Schändung",
          description:
            "Incidental music for Elmar Goerden's production of the Botho Strauß play for the Schauspielhaus, Bochum",
        },
        {
          title: "Speaking Dance",
          details: "Mouth organs, melodica, voices, dancer, tape, [45']",
          description: "Conceived, directed and performed by Burrows&Fargion",
          link: "https://vimeo.com/380218315",
        },
      ],
    },
    {
      year: "2005",
      works: [
        {
          title: "The Quiet Dance",
          details: "Dance duet, pre-recorded birds calls [30']",
          description: "Conceived, directed and performed by Burrows&Fargion",
          link: "https://vimeo.com/371839466",
        },
      ],
    },
    {
      year: "2004",
      works: [
        {
          title: "Music for Long Day's Journey into Night",
          details: "Multi-tracked harmonium [21']",
          description:
            "Incidental music for Elmar Goerden's production of Eugene O'Neill: Eines langen Tages Reise in die Nacht for the Salzburger Festspiele/Residenztheater München",
        },
      ],
    },
    {
      year: "2003",
      works: [
        {
          title: "String Quartet no 4 (Bow Songs)",
          details: "String quartet [4']",
          description: "Part of The Bow Project, devised by Michael Blake, performed by the Nightingale Quartet",
        },
        {
          title: "Das Kontingent",
          details: "arranged for piano duet and voices [25']",
          description:
            "A version of the oratorio of the same name, commissioned for a reading at the Royal Court Theatre, London",
        },
        {
          title: "Double Dickie",
          details: "2 pianos [15']",
          description: "Written for piano duo Post & Mulder",
        },
      ],
    },
    {
      year: "2002",
      works: [
        {
          title: "Both Sitting Duet",
          details: "Dance duet [45']",
          description: "Conceived, directed and performed by Burrows&Fargion. Winner of a Bessie Award, New York",
          link: "https://vimeo.com/showcase/6691019/video/361765765",
        },
        {
          title: "Music for Rodogune",
          details: "Child's voice and electronics [16']",
          description:
            "Incidental music for Elmar Goerden's production of Pierre Corneille play, for the Residenz Theater, Munich",
        },
        {
          title: "Music for The Girl on the Sofa",
          details: "Piano, electronics, voice [17']",
          description:
            "Incidental music for Thomas Ostermeier's production of the Jon Fosse's play, performed at the Edinburgh Festival",
        },
      ],
    },
    {
      year: "2001",
      works: [
        {
          title: "Music for Vor Langer Zeit im Mai",
          details: "Piano [8']",
          description:
            "Incidental music for Elmar Goerden's production of Roland Schimmelpfennig's play, for the Bayerisches Staatsschauspiel im Haus der Kunst, Munich",
        },
      ],
    },
    {
      year: "2000",
      works: [
        {
          title: "You May Not Want To Be Here",
          details: "violin, prepared piano, speaking voices. [30']",
          description:
            "After a concept by Bruce Nauman, conceived and performed by Marc Sabat and Matteo Fargion at the Staatsgalerie, Stuttgart",
        },
        {
          title: "Das Kontingent (an oratorio)",
          details: "Violin, cello, trombone, piano, actors/singers [60']",
          description: "Text by Soeren Voima, commissioned by Schaubühne Berlin",
        },
        {
          title: "Music for Die Schwärmer",
          details: "4 Guitars [18']",
          description:
            "Written for Elmar Goerden's production of the Robert Musil play, for the Staatstheater. Stuttgart",
        },
      ],
    },
    {
      year: "1999",
      works: [
        {
          title: "Lucio Infelice",
          details: "Soprano, tenor, fortepiano [15']",
          description: "Music for Singing, a dance piece by Jonathan Burrows",
        },
        {
          title: "Opera Studies",
          details: "Piano [16']",
          description: "Written for Stephen Clarke",
          link: "https://soundcloud.com/matteofargion/opera-studies-1/s-vsvhQ1GvGWb",
        },
      ],
    },
    {
      year: "1998",
      works: [
        {
          title: "Jeremy James",
          details: "Multiple midi pianos [18']",
          description: "Music for Minty, a dance piece by Jeremy James",
          link: "https://soundcloud.com/matteofargion/jeremy-james/s-Jq7EY4X48Li",
        },
        {
          title: "Donna che Beve",
          details: "Short concert version for 3 amplified cardboard boxes [8']",
          link: "https://soundcloud.com/matteofargion/donna-che-beve-for-3-amplified-cardboard-boxes/s-wwgchRzFJ4W",
        },
        {
          title: "Music for Hedda Gabler",
          details: "Prepared piano [16']",
          description: "Stage music for Hedda Gabler directed by Elmar Goerden, Stuttgarter Staatstheater",
        },
        {
          title: "Music for Stiletto",
          details: "Prepared piano, violin, midi instruments [7']",
          description:
            "Film score for a short film by Adam Roberts, (Channel 4/BFI) written, performed and produced together with Marc Sabat",
        },
        {
          title: "2 Lines",
          details: "Wind ensemble [11']",
          description: "Written for the Nederlands Wind Ensemble",
        },
        {
          title: "Le Bellezze D'Hortensia (an opera)",
          details: "Soprano, tenor, baritone, 2 pianos [40']",
          description: "Commissioned by Schloss Solitude, Stuttgart",
        },
        {
          title: "Music for Aka Blue",
          details: "Multiple guitars [12']",
          description: "Music for a dance piece by Karl Jay Lewin",
        },
        {
          title: "Jonathan Burrows",
          details: "Piano, clarinet, trombone, cello [14']",
          description: "Written for Quartet Avance, Freiburg",
          link: "https://soundcloud.com/matteofargion/jonathan-burrows/s-DSiqDEzilOr",
        },
      ],
    },
    {
      year: "1997",
      works: [
        {
          title: "Tosca Songs",
          details: "Soprano, piano [19']",
          description: "Written for Beth Griffith and Dorothea Eppendorf",
        },
        {
          title: "Music for Bank",
          details: "Multi-tracked Bodhrans, bass guitars, mouth organs; 3 amplified cardboard boxes [30']",
          description: "Dance score commissioned by Siobhan Davies",
          link: "https://soundcloud.com/matteofargion/bass-drums-mouth-organs-bass-guitars/s-dkPaBua9487",
        },
        {
          title: "Cello Songs",
          details: "Cello [11']",
          description: "Written for Sophie Harris",
          link: "https://soundcloud.com/matteofargion/cello-songs/s-sNjGGE2Xp5n",
        },
        {
          title: "Janet Topp",
          details: "Violin & piano [12']",
          description: "Written for Clemens Merkel and Dorothea Eppendorf",
          link: "https://soundcloud.com/matteofargion/janet-topp/s-dgcXwD7TF22",
        },
        {
          title: "Music for All Together",
          details: "Singing pianist with foot rattle [8']",
          description: "Written for a dance piece by Jonathan Burrows",
        },
        {
          title: "Floatweave II",
          details: "Percussion, piano, trombone [12']",
          description: "Commissioned by Quartet Avance, Freiburg",
          link: "https://soundcloud.com/matteofargion/floatweave-ii/s-yUNWuwBjOjR",
        },
        {
          title: "Da Noi III",
          details: "Voice, prepared piano, violin, rattle [5']",
          description: "Written for the dance piece Tinnuts by Karl Jay Lewin",
          link: "https://soundcloud.com/matteofargion/da-noi-iii/s-yFV7dcORh0S",
        },
        {
          title: "Donna a Cavallo",
          details: "Virginals [8']",
          description: "Written for Sophie Yates, commissioned by BBC Radio 3",
        },
      ],
    },
    {
      year: "1996",
      works: [
        {
          title: "Float Weave",
          details: "Piano, percussion [12']",
          description: "Commissioned by London New Music",
        },
        {
          title: "Donna che Beve",
          details: "Large Bass drum [17']",
          description: "Written for Robyn Schulkowsky",
        },
        {
          title: "Da Noi I & II",
          details: "Voices, clavichord, violin, prepared piano, rattle, body percussion",
          description: "Written for dance pieces by Jeremy James",
          link: "https://soundcloud.com/matteofargion/da-noi-ii/s-D4ZdoZtsB63",
        },
      ],
    },
    {
      year: "1995",
      works: [
        {
          title: "Sette Canzoni",
          details: "Harpsichord [16']",
          description:
            "Part of the music for The Art of Touch, a dance piece by Siobhan Davies. Performed by Carole Cerasi",
          link: "https://soundcloud.com/matteofargion/prelude-no-1-for-harpsichord",
        },
        {
          title: "Duetti",
          details: "Multiple pianos, Irish coins [45']",
          description: "With Kevin Volans. Music for The Stop Quartet, a dance piece by Jonathan Burrows",
        },
      ],
    },
    {
      year: "1994",
      works: [
        {
          title: "Sette Canzoni (String Quartet No.3)",
          details: "String quartet [16']",
          description: "Written for the Modern Quartet, Toronto",
        },
        {
          title: "Piano Quartet",
          details: "Piano, violin, viola, cello [13']",
          description: "Commissioned by Simon Jackson, performed by London New Music",
        },
        {
          title: "Music for Body",
          details: "Violin, cello, piano, [5']",
          description: "Film score for a short film by Adam Roberts, commissioned by Channel4/BFI",
        },
      ],
    },
    {
      year: "1993",
      works: [
        {
          title: "Senza Titolo (50 Pieces for violin and piano)",
          details: "Violin, piano [20']",
          description: "Written for Charles Mutter and Sally Rose",
          link: "https://www.youtube.com/watch?v=1pB-sklLaIQ&ab_channel=MatteoFargion",
        },
        {
          title: "Piano Quintet",
          details: "Piano, string quartet [17']",
          description: "Written for the Balanescu Quartet and Andrew Ball",
        },
        {
          title: "Music for Our",
          details: "Tape [45']",
          description: "Music for a dance piece by Jonathan Burrows",
        },
      ],
    },
    {
      year: "1992",
      works: [
        {
          title: "Hungarian Songbook",
          details: "Tenor, piano [12']",
          description: "Music for Very, a dance piece by Jonathan Burrows",
        },
        {
          title: "Lullaby",
          details: "Tenor, piano [2']",
        },
      ],
    },
    {
      year: "1991",
      works: [
        {
          title: "11 Notturni",
          details: "Piano [11']",
          description: "Written for Noriko Kawai",
          link: "https://soundcloud.com/matteofargion/11-notturni/s-g9wccNVSbsg",
        },
        {
          title: "Separate Lives",
          details: "Trombone, piano [13']",
        },
        {
          title: "Music for Mickey Finn",
          details: "Violin, viola, cello [9']",
          description:
            "Music for a short film by Adam Roberts (Grand Prix du Jury, Angers International Film Festival)",
        },
        {
          title: "2nd Piano Trio",
          details: "Violin, cello, piano [12']",
        },
      ],
    },
    {
      year: "1990",
      works: [
        {
          title: "Still Life",
          details: "Piano and optional counter tenor [25']",
          description: "Music for a dance piece by Joachim Schloemer",
        },
        {
          title: "Three Trumpets",
          details: "Trumpet and pre-recorded trumpets [10']",
        },
        {
          title: "Pinkelpause",
          details: "Piano, violin, cello [12']",
          description: "Commissioned by London New Music",
          link: "https://example.com/pinkelpause",
        },
        {
          title: "Initiations Voluptueuses",
          details: "Tenor, piano [2']",
          description: "Text by Roger Clarke",
        },
        {
          title: "Dull Morning",
          details: "Piano [20']",
        },
        {
          title: "Music for Outside",
          details: "String Quartet, piano [5']",
          description: "Music for a short film by Adam Roberts",
        },
      ],
    },
    {
      year: "1989",
      works: [
        {
          title: "Passi Tardi",
          details: "Bass clarinet, percussion [11']",
          description:
            "Winner of Sonorities Prize for Composition, Belfast. Performed by Roger Heaton and Robyn Schulkowsky.",
        },
        {
          title: "Trio",
          details: "Clarinet, bass clarinet, piano [7']",
          description: "Written for London New Music",
        },
        {
          title: "Dull Morning Cloudy Mild",
          details: "2 violins, trumpet, piano, sax, double bass [45']",
          description: "Music for a dance piece by Jonathan Burrows.",
        },
        {
          title: "Two Pianos & Viola",
          details: "2 pianos, viola [13']",
          description: "Written for a dance duet by Chick Eldridge",
        },
        {
          title: "Two Pieces",
          details: "Flute, guitar, double bass [3']",
        },
      ],
    },
    {
      year: "1988",
      works: [
        {
          title: "Piano Quintet",
          details: "Piano & string quartet [11']",
        },
        {
          title: "No Flowers",
          details: "Organ [5']",
        },
        {
          title: "Passi Tardi",
          details: "Crotales [11']",
          description: "Written for Robyn Schulkowsky",
        },
        {
          title: "Low Budget Tango",
          details: "Flute, alto sax, guitar, violin, piano [3']",
        },
      ],
    },
    {
      year: "1987",
      works: [
        {
          title: "Amnesia",
          details: "2 clarinets, violin, viola, cello, piano [16']",
          description: "Commissioned by London New Music",
        },
        {
          title: "2nd String Quartet (10 Frugal Pieces)",
          details: "String quartet [10']",
          description: "Performed by The Balanescu Quartet, ICA, London",
          link: "https://soundcloud.com/matteofargion/2nd-string-quartet-10-frugal-pieces/s-UZ7OmSYdtYY",
        },
      ],
    },
    {
      year: "1986",
      works: [
        {
          title: "L'Ultima Follia",
          details: "Piano [30']",
          description: "Written for John Flinders",
        },
        {
          title: "Two Pianos",
          details: "2 pianos [3']",
        },
        {
          title: "Ladder with View",
          details: "Flute [7']",
          description: "Written for Nancy Ruffer",
        },
        {
          title: "6 Songs for Accordion & Howard",
          details: "Singing accordionist [10']",
          description: "Written for Howard Skempton",
        },
        {
          title: "6 Songs for Accordion & Howard",
          details: "Arr. for baritone & string qt / Arr. for baritone & piano",
        },
        {
          title: "Widow Bird",
          details: "Soprano, glockenspiel, [4']",
        },
      ],
    },
    {
      year: "1985",
      works: [
        {
          title: "Piece for Piano",
          details: "Piano with practice pedal [7']",
        },
        {
          title: "Full Fadom Five",
          details: "Choir SATB [5']",
        },
        {
          title: "Pining for Madame Lupukhov",
          details: "String quartet [10']",
        },
        {
          title: "Blood on the dining room floor",
          details: "Flute, viola, trombone, marimba [10']",
        },
        {
          title: "Low Budget Jazz",
          details: "Trumpet, saxophone, piano, bass guitar, drums set, speaking voice, [5']",
        },
        {
          title: "Trio",
          details: "Flute, cello, piano [11']",
        },
      ],
    },
    {
      year: "1984",
      works: [
        {
          title: "Piece for 2 Pianos",
          details: "2 pianos, [11']",
          description: "First performed by Kevin Volans and Uwe Diegel",
        },
        {
          title: "From A to B and Back Again",
          details: "Saxophone quartet, crotales, drum set [13']",
          link: "https://soundcloud.com/matteofargion/from-a-to-b-and-back-again-1984/s-6EdflTD1N2d",
        },
        {
          title: "Piano Oboe Double Bass",
          details: "Piano, oboe, double bass [8']",
        },
      ],
    },
    {
      year: "1983",
      works: [
        {
          title: "6 Songs",
          details: "Soprano, piano [12']",
          description: "Texts by John Lennon, First performed by Beth Griffiths and Kevin Volans",
        },
      ],
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
      <div className="space-y-8">
        {worksByYear.map((yearGroup, yearIndex) => (
          <motion.div
            key={yearGroup.year}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: yearIndex * 0.05, duration: 0.5 }}
          >
            <h2 className="text-lg font-light mb-4 text-gray-900">{yearGroup.year}</h2>
            <div className="space-y-6">
              {yearGroup.works.map((work, workIndex) => (
                <motion.div
                  key={`${work.title}-${workIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: yearIndex * 0.05 + workIndex * 0.02, duration: 0.4 }}
                  className="border-l-2 border-gray-100 pl-4"
                >
                  {work.link ? (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 italic font-light hover:underline"
                    >
                      <h3>{work.title}</h3>
                    </a>
                  ) : (
                    <h3 className="text-gray-900 italic font-light">{work.title}</h3>
                  )}
                  <p className="text-sm text-gray-700 mt-1 font-light">{work.details}</p>
                  {work.description && <p className="text-sm text-gray-700 mt-1 font-light">{work.description}</p>}
                  {work.premiere && <p className="text-sm text-gray-600 mt-1 italic font-light">{work.premiere}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
