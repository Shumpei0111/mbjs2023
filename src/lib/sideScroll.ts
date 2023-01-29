import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sideScroll = () => {
  window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);
    const area = document.querySelector(".side-scroll-area");
    const wrap = document.querySelector(".side-scroll-wrap");
    const items = document.querySelectorAll(".side-scroll-item");
    const num = 3; // doujinArtworks.length

    gsap.set(wrap, { width: num * 100 + "%" });
    gsap.set(items, { width: 100 / num + "%" });

    gsap.to(items, {
      xPercent: -110 * (num - 1), // x方向に移動させる
      ease: "none",
      scrollTrigger: {
        trigger: area,
        start: "top top",
        end: "+=1000",
        pin: true,
        scrub: true,
      },
    });

    const bg = document.getElementById("doujinSideBg");
    const pinSpacer = document.querySelector(".pin-spacer");
    if (bg && pinSpacer) {
      console.log(pinSpacer.clientHeight);

      bg.style.height = `${pinSpacer.clientHeight}px`;
    }
  });
};

export default sideScroll;
