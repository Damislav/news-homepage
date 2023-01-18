const bars = document.getElementById("bars");
const close = document.getElementById("close");
const mobileNav = document.querySelector(".disabled");

bars.addEventListener("click", () => {
  console.log(mobileNav.classList.toggle("disabled"));
});

close.addEventListener("click", () => {
  console.log(mobileNav.classList.toggle("disabled"));
});
