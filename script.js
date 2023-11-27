const elements = document.querySelectorAll(".element");
const about = document.querySelector(".nav-about");
const projects = document.querySelector(".nav-projects");
const contact = document.querySelector(".nav-contact");
const first = document.querySelector(".first-section");
const second = document.querySelector(".second-section");
const third = document.querySelector(".third-section");

const showElements = (entrys) => {
  entrys.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity");
    }
  });
};

const observer = new IntersectionObserver(showElements, {
  rootMargin: "40px 600px 0px 600px",
  threshold: 0.5,
});

elements.forEach((element) => observer.observe(element));

const navAbout = (entrys) => {
  entrys.forEach((entry) => {
    if (entry.isIntersecting) {
      about.classList.add("color");
    } else {
      about.classList.remove("color");
    }
  });
};

const navProjects = (entrys) => {
  entrys.forEach((entry) => {
    if (entry.isIntersecting) {
      projects.classList.add("color");
    } else {
      projects.classList.remove("color");
    }
  });
};

const navContact = (entrys) => {
  entrys.forEach((entry) => {
    if (entry.isIntersecting) {
      contact.classList.add("color");
    } else {
      contact.classList.remove("color");
    }
  });
};

const observer2 = new IntersectionObserver(navAbout, {
  rootMargin: "40px 0px 0px 0px",
  threshold: 0.5,
});

const observer3 = new IntersectionObserver(navProjects, {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.25,
});

const observer4 = new IntersectionObserver(navContact, {
  rootMargin: "40px 0px 0px 0px",
  threshold: 0.5,
});

observer2.observe(first);
observer3.observe(second);
observer4.observe(third);
