import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/+esm";
import ScrollTrigger from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger/+esm";
import Lenis from "https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/+esm";

gsap.registerPlugin(ScrollTrigger);

// Lenis smooth scrolling
const lenis = new Lenis({ smooth: true, lerp: 0.1 });
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

// Hero header
gsap.from(".hero-header", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
});

// Text animation
gsap.utils.toArray(".text-segment").forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      end: "top 60%",
      scrub: true,
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: i * 0.2,
    ease: "power2.out",
  });
});

// Icons
gsap.utils.toArray(".animated-icon").forEach((icon, i) => {
  gsap.from(icon, {
    scrollTrigger: {
      trigger: icon,
      start: "top 90%",
      end: "top 60%",
      scrub: true,
    },
    scale: 0,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: i * 0.15,
  });
});
