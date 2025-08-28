
  const nav = document.querySelector('.main-navbar');
  const highlight = document.querySelector('.hover-highlight');
  const links = nav.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const linkRect = link.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();

      highlight.style.left = (linkRect.left - navRect.left) + "px";
      highlight.style.width = link.offsetWidth + "px";
    });
  });


  nav.addEventListener('mouseleave', () => {
    highlight.style.width = "0px";
  });



