import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const activeCoverDisable = () => {
  window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".cover").forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 50%",
        toggleClass: { targets: el, className: "hiddenCover" },
        // markers: true,
        once: true,
      });
    });

    document.querySelectorAll(".dojinCover").forEach((el, ind) => {
      ScrollTrigger.create({
        trigger: el,
        start: ind === 0 ? "left: 50%" : ind === 1 ? "left 0%" : "right 100px",
        toggleClass: { targets: el, className: "hiddenCover" },
        // markers: true,
        once: true,
      });
    });
  });
};

export default activeCoverDisable;
