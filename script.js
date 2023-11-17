const sections = document.querySelectorAll(".sections");
const about = document.querySelector(".nav-about");
const projects = document.querySelector(".nav-projects");
const contact = document.querySelector(".nav-contact");

let indexSeccionActivada;

const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        indexSeccionActivada = [...sections].indexOf(entrada.target);
      }
      if (indexSeccionActivada == "0") {
        about.style.backgroundColor = "orange";
      } else {
        about.style.backgroundColor = "black";
      }
      if (indexSeccionActivada == "1") {
        projects.style.backgroundColor = "orange";
      } else {
        projects.style.backgroundColor = "black";
      }
      if (indexSeccionActivada == "2") {
        contact.style.backgroundColor = "orange";
      } else {
        contact.style.backgroundColor = "black";
      }
    });
  },
  {
    rootMargin: "40px 0px 0px 0px",
    threshold: 0.2,
  }
);

sections.forEach((section) => observer.observe(section));
