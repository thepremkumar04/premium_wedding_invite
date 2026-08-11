import { useEffect, useState } from "react";

/* =========================================================
   DELICATE ROSE PETAL
========================================================= */

const RosePetal = ({ color, size }) => (
  <svg
    width={size}
    height={size * 1.35}
    viewBox="0 0 24 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2
         C18 5 22 11 21 17
         C20 24 15 29 12 30
         C9 29 4 24 3 17
         C2 11 6 5 12 2Z"
      fill={color}
      opacity="0.8"
    />

    <path
      d="M12 5
         C15 9 16 14 15 20
         C14.5 23 13.5 26 12 28"
      stroke="#FFFDF7"
      strokeWidth="0.7"
      opacity="0.25"
    />
  </svg>
);


/* =========================================================
   SMALL GOLD FLOWER
========================================================= */

const TinyFlower = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="6"
      r="4"
      fill="#B08D57"
      opacity="0.7"
    />

    <circle
      cx="18"
      cy="12"
      r="4"
      fill="#B08D57"
      opacity="0.7"
    />

    <circle
      cx="12"
      cy="18"
      r="4"
      fill="#B08D57"
      opacity="0.7"
    />

    <circle
      cx="6"
      cy="12"
      r="4"
      fill="#B08D57"
      opacity="0.7"
    />

    <circle
      cx="12"
      cy="12"
      r="2.5"
      fill="#F5EBDD"
    />
  </svg>
);


/* =========================================================
   FALLING PETALS
========================================================= */

export default function FallingFlowers() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {

    /*
      Create the petals only once.

      Important:
      This component stays mounted for the entire website,
      so the petals keep flowing from the cover to the
      final closing section.
    */

    const isMobile = window.innerWidth < 768;

    const count = isMobile ? 22 : 38;

    const newPetals = Array.from({
      length: count,
    }).map((_, index) => {

      const isFlower = Math.random() < 0.12;

      return {
        id: index,

        left: Math.random() * 100,

        size: isFlower
          ? Math.random() * 7 + 8
          : Math.random() * 8 + 9,

        duration: Math.random() * 9 + 13,

        delay: Math.random() * -18,

        drift:
          Math.random() * 160 - 80,

        rotation:
          Math.random() * 360,

        rotationEnd:
          Math.random() * 720 - 360,

        opacity:
          Math.random() * 0.35 + 0.45,

        isFlower,

        color: [
          "#7A1830",
          "#9B5365",
          "#B86A7C",
          "#F5EBDD",
          "#E8CFCF",
        ][Math.floor(Math.random() * 5)],
      };
    });

    setPetals(newPetals);

  }, []);


  return (
    <div
      className="fixed inset-0 z-40 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >

      {petals.map((petal) => (

        <div
          key={petal.id}
          className="absolute top-[-40px]"
          style={{
            left: `${petal.left}%`,

            animation: `premiumPetalFall ${petal.duration}s linear infinite`,

            animationDelay: `${petal.delay}s`,

            "--drift": `${petal.drift}px`,

            "--rotation": `${petal.rotation}deg`,

            "--rotation-end": `${petal.rotationEnd}deg`,

            opacity: petal.opacity,
          }}
        >

          {petal.isFlower ? (

            <TinyFlower
              size={petal.size}
            />

          ) : (

            <RosePetal
              color={petal.color}
              size={petal.size}
            />

          )}

        </div>

      ))}

    </div>
  );
}