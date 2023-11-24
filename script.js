const miniSection1 = document.querySelector("#mini-section-1");
const miniSection2 = document.querySelector("#mini-section-2");
const text1 = document.querySelector("#text1");
const img1 = document.querySelector("#img1");
const projects = document.querySelector(".nav-projects");

const loadImage = (entrys, observer) => {
  entrys.forEach((entry) => {
    if (entry.isIntersecting) {
      text1.classList.toggle("movement");
      img1.classList.toggle("movementt");
      projects.classList.toggle("colors");
    } else {
      text1.classList.remove("movement");
      img1.classList.remove("movementt");
      projects.classList.remove("colors");
    }
  });
};

const observer = new IntersectionObserver(loadImage, {
  root: null,
  rootMargin: "40px 0px 0px 0px",
  threshold: 0.5,
});

observer.observe(miniSection1);
