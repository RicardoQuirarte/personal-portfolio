const elements = document.querySelectorAll(".elements");
const projects = document.querySelector(".nav-projects");
// const seeAll = document.querySelector(".see-all");

const showElements = (entrys) => {
  entrys.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("movement");
    }
  });
};

// const showSeeAll = (entry) => {
//   if (entry.isIntersecting) {
//     entry.target.classList.add("show-seeAll");
//   }
// };

const observer = new IntersectionObserver(showElements, {
  rootMargin: "40px 300px 0px 300px",
  threshold: 0.5,
});

// const observer2 = new IntersectionObserver(showSeeAll, {
//   rootMargin: "40px 300px 0px 300px",
//   threshold: 0.5,
// });

elements.forEach((element) => observer.observe(element));
// observer2.observe(seeAll);
