const elements = document.querySelectorAll(".elements");
const stack = document.querySelectorAll(".stack");
const projects = document.querySelector(".nav-projects");
const seeAll = document.querySelector(".see-all");

const showElements = (entrys) => {
  entrys.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity");
    }
  });
};

const showSeeAll = (entrys) => {
  entrys.forEach((entry) => {
    if (entry.isIntersecting) {
      seeAll.classList.add("opacity");
    }
  });
};

const showStack = (entrys) => {
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

const observer2 = new IntersectionObserver(showSeeAll, {
  rootMargin: "40px 0px 0px 0px",
  threshold: 0.5,
});

const observer3 = new IntersectionObserver(showStack, {
  rootMargin: "40px 0px 0px 0px",
  threshold: 0.5,
});

elements.forEach((element) => observer.observe(element));
stack.forEach((element) => observer3.observe(element));
observer2.observe(seeAll);
