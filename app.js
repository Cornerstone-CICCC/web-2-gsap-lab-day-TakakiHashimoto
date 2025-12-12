gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

const section1Timeline = gsap.timeline();

section1Timeline
  .from(".section1 .content h1 span:first-child", {
    x: "-100vw",
    duration: 1,
  })
  .from(
    ".section1 .content h1 span:last-child",
    { x: "100vw", duration: 1 },
    "<"
  )
  .from(".section1 .content p", {
    rotate: "90",
    transformOrigin: "top left",
    opacity: 0,
  })
  .from(".section1 .content img", {
    y: "100vh",
  });

const section2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top 20%",
    end: "bottom 60%",
    toggleActions: "play pause reverse reset",
  },
});

section2Timeline
  .from(".section2 h2 span", {
    opacity: 0,
    stagger: 0.2,
    y: "-100vh",
  })
  .from(".section2 p", {
    scaleX: -1,
    opacity: 0,
  });

const sec3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    end: "bottom center",
    pin: true,
    scrub: true,
  },
});

sec3Timeline
  .from(".section3 h2", {
    scale: 100,
    opacity: 0,
    x: "-100vw",
  })
  .from(".section3 span", {
    y: "100vh",
    stagger: 0.2,
  })
  .to(".section3 span", { backgroundColor: "white", color: "black" }, "<")
  .to(".horizontal-sections", {
    xPercent: -50,
  })
  .from(
    ".section4 .portfolio-item",
    {
      x: "100vw",
      stagger: 0.2,
    },
    "<"
  );

const h2 = document.querySelector(".section5 h2");
const word = h2.textContent;

h2.textContent = "";
const wordArray = word.split(" ");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
div1.style.marginRight = "1rem";
const firstLetters = wordArray[0].split("");
const seconfLetters = wordArray[1].split("");

firstLetters.forEach((letter) => {
  const span = document.createElement("span");
  span.textContent = letter;
  div1.appendChild(span);
});

seconfLetters.forEach((letter) => {
  const span = document.createElement("span");
  span.textContent = letter;
  div2.appendChild(span);
});

h2.appendChild(div1);
h2.appendChild(div2);

const divs = document.querySelectorAll(".section5 h2 div");
divs.forEach((element) => {
  element.style.display = "inline-block";
});

// const sec5 = document.querySelector(".section5 div");
// const image = document.createElement("img");
// image.src = "./images/laptop.png";
// image.width = 30;
// image.height = 30;
// sec5.appendChild(image);

const sec5Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top top",
    pin: true,
    scrub: true,
  },
});

sec5Timeline
  .from(".section5 h2 div:first-child span", {
    y: "-100vh",
    stagger: 0.2,
    opacity: 0,
  })
  .from(".section5 h2 div:last-child span", {
    y: "-100vh",
    stagger: 0.2,
    opacity: 0,
  })
  .from(".section5 p", {
    y: "-100vh",
    opacity: 0,
  })
  .from(".contact-btn", {
    scale: 0,
    opacity: 0,
  })
  .to(".section5", {
    backgroundColor: "black",
  })
  .from(
    ".section5",
    {
      backgroundPosition: "150% 90%",
    },
    "<"
  );
