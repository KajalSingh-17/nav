export function navbarHighlight() {
  const nav = document.querySelector('.nav-links');
  const highlight = document.querySelector('.hover-highlight');
  const links = nav.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const linkRect = link.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      highlight.style.left = (linkRect.left - navRect.left) + "px";
      highlight.style.width = link.offsetWidth + "px";
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  nav.addEventListener('mouseleave', () => {
    highlight.style.width = "0px";
    links.forEach(l => l.classList.remove("active"));
  });
}


