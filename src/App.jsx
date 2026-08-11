import { useEffect, useRef, useState } from "react";import { motion } from "framer-motion";
import FallingFlowers from "./components/FallingFlowers";
import InvitationCover from "./components/InvitationCover";

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="relative z-30 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">

        <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-antique-gold">
          Sri Rastu • Subhamasthu • Kalyanamasthu
        </p>

        <h1 className="mt-8 font-display text-6xl md:text-8xl font-light text-charcoal">
          Pradyumna Raju
        </h1>

        <div className="my-5 font-display text-4xl text-antique-gold">
          &
        </div>

        <h2 className="font-display text-6xl md:text-8xl font-light text-charcoal">
          Sri Deepika
        </h2>

        <p className="mt-8 font-display italic text-2xl md:text-3xl text-deep-maroon">
          Are Getting Married
        </p>

        <div className="mx-auto mt-8 h-px w-24 bg-antique-gold/50" />

        <p className="mt-7 text-sm tracking-[0.35em] text-charcoal">
          19 AUGUST 2026
        </p>

        <p className="mt-2 text-xs tracking-[0.25em] uppercase text-charcoal/50">
          Wednesday
        </p>

      </div>
    </section>
  );
}


/* =========================================================
   INVITATION MESSAGE
========================================================= */

function InvitationMessage() {
  return (
    <section className="relative z-30 bg-cream px-6 py-28 md:py-36">

      <div className="mx-auto max-w-3xl text-center">

        <div className="mb-8 text-2xl text-antique-gold">
          ❦
        </div>

        <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-antique-gold">
          A Beautiful Beginning
        </p>

        <h2 className="mt-5 font-display text-4xl md:text-5xl font-light text-charcoal">
          With the blessings of our families
        </h2>

        <div className="mx-auto my-8 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-antique-gold/40" />
          <span className="text-antique-gold">✦</span>
          <span className="h-px w-16 bg-antique-gold/40" />
        </div>

        <p className="font-display text-xl md:text-2xl leading-relaxed text-charcoal/75">
          Together with our families, we joyfully invite you
          to celebrate the beginning of our beautiful journey
          together.
        </p>

        <p className="mt-6 text-sm md:text-base leading-relaxed text-charcoal/60">
          Your presence, love and blessings will make our
          special day even more meaningful.
        </p>

        <div className="mt-10 text-2xl text-antique-gold">
          ❦
        </div>

      </div>

    </section>
  );
}


/* =========================================================
   COUPLE
========================================================= */

function CoupleSection() {
  return (
    <section className="relative z-30 bg-warm-ivory px-6 py-28 md:py-36 overflow-hidden">

      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full border border-antique-gold/10" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-64 w-64 rounded-full border border-antique-gold/10" />

      <div className="relative mx-auto max-w-6xl">

        <div className="text-center">

          <div className="text-2xl text-antique-gold">
            ❦
          </div>

          <p className="mt-5 text-[10px] md:text-xs tracking-[0.4em] uppercase text-antique-gold">
            The Couple
          </p>

          <h2 className="mt-4 font-display text-4xl md:text-5xl font-light text-charcoal">
            Two Families, One Beautiful Beginning
          </h2>

        </div>


        <div className="mt-20 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-16 md:gap-12 items-center">

          {/* GROOM */}

          <div className="text-center md:text-right">

            <p className="text-[10px] tracking-[0.35em] uppercase text-antique-gold">
              The Groom
            </p>

            <h3 className="mt-5 font-display text-4xl md:text-5xl font-light text-charcoal">
              Chi. S. Pradyumna Raju
            </h3>

            <p className="mt-3 text-xs tracking-[0.3em] uppercase text-deep-maroon">
              B.B.A.
            </p>

            <div className="mx-auto md:ml-auto md:mr-0 mt-8 h-px w-20 bg-antique-gold/40" />

            <div className="mt-8 text-sm leading-7 text-charcoal/65">

              <p className="font-display text-lg text-charcoal/80">
                Grand S/o
              </p>

              <p className="mt-2">
                Smt. S. Kalavathi
              </p>

              <p>
                Late Sri S. Subramanyam Raju
              </p>

              <p className="mt-4">
                Smt. M. Durga
              </p>

              <p>
                Dr. Sri M. Singam Raju
              </p>

            </div>

            <p className="mt-8 text-xs leading-6 text-charcoal/45">
              Rachapalem, Puttur Municipality,
              <br />
              Tirupati District, Andhra Pradesh
            </p>

          </div>


          {/* CENTER */}

          <div className="flex flex-col items-center">

            <div className="hidden md:block h-24 w-px bg-antique-gold/30" />

            <div className="my-6 flex h-16 w-16 items-center justify-center rounded-full border border-antique-gold/40">

              <span className="font-display text-3xl text-antique-gold">
                &
              </span>

            </div>

            <div className="hidden md:block h-24 w-px bg-antique-gold/30" />

          </div>


          {/* BRIDE */}

          <div className="text-center md:text-left">

            <p className="text-[10px] tracking-[0.35em] uppercase text-antique-gold">
              The Bride
            </p>

            <h3 className="mt-5 font-display text-4xl md:text-5xl font-light text-charcoal">
              Chi. La. Sou. M. Sri Deepika
            </h3>

            <p className="mt-3 text-xs tracking-[0.3em] uppercase text-deep-maroon">
              B.Tech.
            </p>

            <div className="mx-auto md:mr-auto md:ml-0 mt-8 h-px w-20 bg-antique-gold/40" />

            <div className="mt-8 text-sm leading-7 text-charcoal/65">

              <p className="font-display text-lg text-charcoal/80">
                D/o
              </p>

              <p className="mt-2">
                Smt. M. Gayathri
              </p>

              <p>
                Sri M. Dileep Raju
              </p>

            </div>

            <p className="mt-8 text-xs leading-6 text-charcoal/45">
              Thallapaka Village,
              <br />
              Rajampet Mandal,
              <br />
              Kadapa District, Andhra Pradesh
            </p>

          </div>

        </div>


        <div className="mt-24 flex items-center justify-center gap-4">

          <span className="h-px w-16 bg-antique-gold/30" />

          <span className="text-antique-gold">
            ✦
          </span>

          <span className="h-px w-16 bg-antique-gold/30" />

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   COUNTDOWN
========================================================= */

function Countdown() {

  const weddingDate = new Date(
    "2026-08-19T05:00:00+05:30"
  ).getTime();

  const calculateTime = () => {

    const difference = weddingDate - Date.now();

    if (difference <= 0) {

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        finished: true,
      };

    }

    return {

      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),

      finished: false,

    };
  };


  const [time, setTime] = useState(calculateTime());


  useEffect(() => {

    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);

  }, []);


  const units = [
    {
      label: "Days",
      value: time.days,
    },
    {
      label: "Hours",
      value: time.hours,
    },
    {
      label: "Minutes",
      value: time.minutes,
    },
    {
      label: "Seconds",
      value: time.seconds,
    },
  ];


  return (
    <section className="relative z-30 bg-cream px-6 py-28 md:py-36 overflow-hidden">

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-antique-gold/10" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-antique-gold/10" />


      <div className="relative mx-auto max-w-5xl text-center">

        <div className="text-2xl text-antique-gold">
          ❦
        </div>

        <p className="mt-5 text-[10px] md:text-xs tracking-[0.4em] uppercase text-antique-gold">
          The Countdown
        </p>

        <h2 className="mt-4 font-display text-4xl md:text-5xl font-light text-charcoal">
          Counting Down to Forever
        </h2>

        <p className="mt-4 font-display italic text-lg text-deep-maroon">
          Until the moment our forever begins
        </p>


        {!time.finished ? (

          <div className="relative mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">

            {units.map((unit, index) => (

              <motion.div
                key={unit.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="relative"
              >

                <div className="font-display text-5xl md:text-7xl font-light text-charcoal">
                  {String(unit.value).padStart(2, "0")}
                </div>

                <div className="mt-3 text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-charcoal/50">
                  {unit.label}
                </div>

                {index < units.length - 1 && (

                  <div className="hidden md:block absolute right-0 top-1/2 h-10 w-px -translate-y-1/2 bg-antique-gold/20" />

                )}

              </motion.div>

            ))}

          </div>

        ) : (

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="mt-16"
          >

            <p className="font-display text-4xl md:text-6xl text-deep-maroon">
              Today is the day!
            </p>

            <p className="mt-4 text-sm tracking-[0.3em] uppercase text-antique-gold">
              19 August 2026
            </p>

          </motion.div>

        )}


        <div className="mt-16 flex items-center justify-center gap-4">

          <span className="h-px w-16 bg-antique-gold/30" />

          <span className="text-antique-gold">
            ✦
          </span>

          <span className="h-px w-16 bg-antique-gold/30" />

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   WEDDING EVENTS
========================================================= */

const events = [

  {
    id: "reception",
    number: "01",
    title: "Reception & Dinner",
    date: "18 AUGUST 2026",
    day: "TUESDAY",
    time: "7:00 PM",
    detail: "An evening of joy, togetherness and celebration.",
  },

  {
    id: "upanayanam",
    number: "02",
    title: "Upanayanam",
    date: "19 AUGUST 2026",
    day: "WEDNESDAY",
    time: "3:30 AM – 4:30 AM",
    detail: "In Karkataka Lagnam",
  },

  {
    id: "wedding",
    number: "03",
    title: "Wedding Muhurtam",
    date: "19 AUGUST 2026",
    day: "WEDNESDAY",
    time: "5:00 AM – 6:00 AM",
    detail: "In Karkataka Lagnam",
  },

];


/* =========================================================
   TIMELINE POINT
========================================================= */

function TimelinePoint({ number }) {

  return (

    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-antique-gold/50 bg-warm-ivory">

      <span className="font-display text-lg text-antique-gold">
        {number}
      </span>

    </div>

  );
}


/* =========================================================
   EVENT CONTENT
========================================================= */

function EventContent({ event, align }) {

  return (

    <div
      className={`text-center ${
        align === "right"
          ? "md:text-right"
          : "md:text-left"
      }`}
    >

      <p className="text-[10px] tracking-[0.35em] uppercase text-antique-gold">
        {event.date}
      </p>

      <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-charcoal/40">
        {event.day}
      </p>

      <h3 className="mt-5 font-display text-3xl md:text-4xl font-light text-deep-maroon">
        {event.title}
      </h3>

      <div
        className={`mt-5 h-px w-16 bg-antique-gold/40 ${
          align === "right"
            ? "md:ml-auto"
            : "md:mr-auto"
        } mx-auto`}
      />

      <p className="mt-6 font-display text-xl text-charcoal">
        {event.time}
      </p>

      <p className="mt-3 text-sm italic text-charcoal/50">
        {event.detail}
      </p>

      <p className="mt-5 text-[10px] tracking-[0.3em] uppercase text-charcoal/50">
        SHREE CONVENTION
      </p>

    </div>

  );
}


/* =========================================================
   WEDDING CELEBRATIONS
========================================================= */

function WeddingCelebrations() {

  return (

    <section className="relative z-30 bg-warm-ivory px-6 py-28 md:py-40 overflow-hidden">

      <div className="pointer-events-none absolute -left-48 top-40 h-96 w-96 rounded-full border border-antique-gold/10" />

      <div className="pointer-events-none absolute -right-48 bottom-20 h-96 w-96 rounded-full border border-antique-gold/10" />


      <div className="relative mx-auto max-w-5xl">

        <div className="text-center">

          <div className="text-2xl text-antique-gold">
            ❦
          </div>

          <p className="mt-5 text-[10px] md:text-xs tracking-[0.4em] uppercase text-antique-gold">
            The Celebrations
          </p>

          <h2 className="mt-4 font-display text-4xl md:text-6xl font-light text-charcoal">
            Wedding Celebrations
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-display italic text-lg text-charcoal/60">
            Three beautiful moments leading to one unforgettable beginning.
          </p>

        </div>


        <div className="relative mt-24">

          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-antique-gold/25 md:block" />

          <div className="space-y-20 md:space-y-28">

            {events.map((event, index) => (

              <motion.div
                key={event.id}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                className="relative"
              >

                {/* DESKTOP */}

                <div className="hidden md:grid md:grid-cols-2 md:gap-20">

                  {index % 2 === 0 ? (

                    <>
                      <EventContent
                        event={event}
                        align="right"
                      />

                      <TimelinePoint
                        number={event.number}
                      />
                    </>

                  ) : (

                    <>
                      <TimelinePoint
                        number={event.number}
                      />

                      <EventContent
                        event={event}
                        align="left"
                      />
                    </>

                  )}

                </div>


                {/* MOBILE */}

                <div className="md:hidden">

                  <div className="flex items-start gap-5">

                    <div className="flex flex-col items-center">

                      <TimelinePoint
                        number={event.number}
                      />

                      {index < events.length - 1 && (

                        <div className="mt-3 h-24 w-px bg-antique-gold/25" />

                      )}

                    </div>


                    <div className="flex-1 pb-6">

                      <EventContent
                        event={event}
                        align="left"
                      />

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   SHREE CONVENTION
========================================================= */

function VenueSection() {

  const mapsUrl =
    "https://maps.app.goo.gl/L1tLc9FDHSD1Tzj69";


  return (

    <section className="relative z-30 overflow-hidden bg-charcoal px-6 py-32 md:py-44 text-warm-ivory">

      {/* DOUBLE BORDER */}

      <div className="pointer-events-none absolute inset-5 border border-antique-gold/20 md:inset-10" />

      <div className="pointer-events-none absolute inset-8 border border-antique-gold/10 md:inset-14" />


      {/* CORNER ORNAMENTS */}

      <div className="pointer-events-none absolute left-8 top-8 text-2xl text-antique-gold md:left-14 md:top-14">
        ❦
      </div>

      <div className="pointer-events-none absolute right-8 top-8 -scale-x-100 text-2xl text-antique-gold md:right-14 md:top-14">
        ❦
      </div>

      <div className="pointer-events-none absolute bottom-8 left-8 rotate-180 text-2xl text-antique-gold md:bottom-14 md:left-14">
        ❦
      </div>

      <div className="pointer-events-none absolute bottom-8 right-8 rotate-180 -scale-x-100 text-2xl text-antique-gold md:bottom-14 md:right-14">
        ❦
      </div>


      {/* GLOW */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-10"
        style={{
          background:
            "radial-gradient(circle, #B08D57 0%, transparent 65%)",
        }}
      />


      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >

        <p className="text-[10px] md:text-xs tracking-[0.45em] uppercase text-antique-gold">
          Where We Celebrate
        </p>


        <div className="mx-auto mt-8 flex items-center justify-center gap-4">

          <span className="h-px w-20 bg-antique-gold/30" />

          <span className="text-antique-gold">
            ✦
          </span>

          <span className="h-px w-20 bg-antique-gold/30" />

        </div>


        <h2 className="mt-10 font-display text-6xl md:text-8xl font-light tracking-wide">
          SHREE
        </h2>

        <h3 className="font-display text-5xl md:text-7xl font-light text-antique-gold">
         SHREE CONVENTION
        </h3>


        <p className="mt-8 text-xs md:text-sm tracking-[0.35em] uppercase text-warm-ivory/60">
          Tirupati · Andhra Pradesh
        </p>


        <div className="mx-auto mt-12 max-w-md border-y border-antique-gold/20 py-8">

          <p className="text-[10px] tracking-[0.35em] uppercase text-antique-gold">
            Wedding Day
          </p>

          <p className="mt-3 font-display text-2xl">
            19 August 2026
          </p>

          <p className="mt-2 text-xs tracking-[0.25em] uppercase text-warm-ivory/50">
            Wednesday · 5:00 AM – 6:00 AM
          </p>

        </div>


        <p className="mx-auto mt-10 max-w-xl font-display text-lg md:text-xl italic leading-relaxed text-warm-ivory/70">
          We would be honoured to have you with us
          as we begin this beautiful new chapter.
        </p>


        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 border border-antique-gold/60 px-8 py-4 text-[10px] tracking-[0.35em] uppercase text-warm-ivory transition-all duration-500 hover:bg-antique-gold hover:text-charcoal"
        >

          <span>
            Get Directions
          </span>

          <span className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>

        </a>


        <p className="mt-6 text-[9px] tracking-[0.25em] uppercase text-warm-ivory/30">
          Open in Google Maps
        </p>

      </motion.div>

    </section>
  );
}


/* =========================================================
   FINAL CLOSING
========================================================= */

function ClosingSection() {

  return (

    <section className="relative z-30 min-h-[85vh] overflow-hidden bg-warm-ivory px-6 py-32 md:py-44 flex items-center justify-center">

      {/* DECORATIVE CIRCLES */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-antique-gold/10" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-antique-gold/10" />


      <div className="relative z-10 mx-auto max-w-3xl text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
        >

          <div className="text-3xl text-antique-gold">
            ❦
          </div>


          <p className="mt-8 text-[10px] md:text-xs tracking-[0.45em] uppercase text-antique-gold">
            With Love & Blessings
          </p>


          <h2 className="mt-6 font-display text-5xl md:text-7xl font-light text-charcoal">
            Forever Begins Here
          </h2>


          <div className="mx-auto mt-8 flex items-center justify-center gap-4">

            <span className="h-px w-16 bg-antique-gold/30" />

            <span className="text-antique-gold">
              ✦
            </span>

            <span className="h-px w-16 bg-antique-gold/30" />

          </div>


          <p className="mx-auto mt-10 max-w-xl font-display text-xl md:text-2xl leading-relaxed text-charcoal/70">
            As we begin this beautiful journey together,
            your presence and blessings will be the most
            cherished part of our celebration.
          </p>


          <p className="mt-8 text-sm text-charcoal/50">
            We look forward to celebrating this special
            beginning with you.
          </p>


          <div className="mt-14">

            <p className="text-[9px] tracking-[0.4em] uppercase text-antique-gold">
              With love
            </p>

            <p className="mt-4 font-display text-3xl md:text-4xl text-deep-maroon">
              Pradyumna Raju & Sri Deepika
            </p>

          </div>


          <div className="mt-12">

            <p className="text-xs tracking-[0.3em] uppercase text-charcoal/50">
              19 August 2026
            </p>

            <p className="mt-2 text-[10px] tracking-[0.25em] uppercase text-charcoal/35">
              SHREE CONVENTION · TIRUPATI
            </p>

          </div>


          <div className="mt-14 text-3xl text-antique-gold">
            ❦
          </div>

        </motion.div>

      </div>

    </section>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {
  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const handleInvitationOpen = () => {
    // Create the audio only once
    if (!audioRef.current) {
      audioRef.current = new Audio("/wedding-music.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.65;
    }

    // Start music
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.log("Music could not start:", error);
      });

    // Enter the invitation
    setOpened(true);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.log("Music could not play:", error);
        });
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <main className="min-h-screen bg-warm-ivory text-charcoal">

      {/* Petals stay alive throughout the entire invitation */}
      <FallingFlowers />

      {!opened ? (
        <InvitationCover
          onOpen={handleInvitationOpen}
        />
      ) : (
        <>
          <Hero />

          <InvitationMessage />

          <CoupleSection />

          <Countdown />

          <WeddingCelebrations />

          <VenueSection />

          <ClosingSection />

          {/* MUSIC CONTROL */}
          <button
            onClick={toggleMusic}
            aria-label={isPlaying ? "Pause music" : "Play music"}
            className="fixed bottom-6 right-6 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-antique-gold/50 bg-warm-ivory/95 text-antique-gold shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            {isPlaying ? "♫" : "▶"}
          </button>
        </>
      )}

    </main>
  );
}

export default App;