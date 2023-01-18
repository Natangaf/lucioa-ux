const bntTop = document.querySelector(".BntTop");
const footer = document.querySelector('footer');

console.log(footer);

window.addEventListener("scroll", () => {
  console.log("here");
  if (window.scrollY == 0) {
    bntTop.classList.remove("visible");
  } else {
    bntTop.classList.add("visible");
  }
});
