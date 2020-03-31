import React from "react";
import Particles from "react-particles-js";

const particles = [
  "/assets/images/particle/1f48c.png",
  "/assets/images/particle/1f4ac.png",
  "/assets/images/particle/1f4af.png",
  "/assets/images/particle/1f596.png",
  "/assets/images/particle/1f603.png",
  "/assets/images/particle/1f60d.png",
  "/assets/images/particle/1f60e.png",
  "/assets/images/particle/1f610.png"
];

const HeroFX = () => {
  return (
    <Particles
      className="particle"
      params={{
        particles: {
          number: {
            value: 40,
            density: { enable: true, value_area: 400 }
          },

          shape: {
            type: ["images", "circle"],
            images: particles.map(part => {
              return {
                src: `${part}`,
                width: 50,
                height: 50
              };
            })
          },
          color: {
            value: "#CCC"
          },
          size: {
            value: 20,
            random: false,
            
          },
          opacity: {
            value: 0.17626369048095938,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
          },
          line_linked: {
            enable: true,
            color: "#3CA9D1"
          },
          move: {
            enable: true,
            speed: 2.5,
            direction: "none",
            random: true,
            straight: false,
            bounce: true,
            attract: false,
            out_mode: "bounce"
            
          }
        },
        retina_detect: true
      }}
    />
  );
};

export default HeroFX;
