export const particles = {
  backgroundMode: {
    enable: true,
  },
  zIndex: 1,
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
    },
    collisions: {
      enable: false,
    },
    color: {
      value: ["#FF9933", "#FFFFFF", "#138808"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.3, max: 0.8 },
    },
    size: {
      value: { min: 1, max: 10 },
    },
    move: {
      enable: true,
      size: true,
      speed: 5,
      direction: "none",
      outModes: {
        default: "destroy",
      },
      // trail: {
      //   enable: true,
      //   fillColor: "#000000",
      //   length: 3
      // }
    },
  },
  detectRetina: true,
  background: {
    color: "#000",
  },
  responsive: [
    {
      maxWidth: 700,
      options: {
        fpsLimit: 60,
        emitters: {
          direction: "none",
          rate: {
            delay: 0.5,
            quantity: 10,
          },
          position: {
            x: 50,
            y: 50,
          },
          size: {
            width: 0,
            height: 0,
          },
        },
      },
    },
  ],
  emitters: {
    direction: "none",
    rate: {
      delay: 0.25,
      quantity: 10,
    },
    position: {
      x: 50,
      y: 50,
    },
    size: {
      width: 0,
      height: 0,
    },
    // spawnColor: {
    //   value: "#ff0000",
    //   animation: {
    //     h: {
    //       enable: true,
    //       speed: 5
    //     },
    //     l: {
    //       enable: true,
    //       speed: 0,
    //       offset: {
    //         min: 20,
    //         max: 80
    //       }
    //     }
    //   }
    // }
  },
};
