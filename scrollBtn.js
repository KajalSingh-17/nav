export function scrollButtonHandler() {
  const btn = document.querySelector(".scroll-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      btn.style.opacity = "0";
      btn.style.pointerEvents = "none";
    } else {
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
    }
  });
}
