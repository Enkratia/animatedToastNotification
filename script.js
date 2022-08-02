const button = document.querySelector("button");
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");



button.addEventListener("click", () => {
  toast.classList.add("active");
  progress.classList.add("active");

  firstTimeout = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000)

  secondTimeout = setTimeout(() => {
    progress.classList.remove("active");
  }, 5000)

});

closeIcon.addEventListener("click", () => {
  progress.classList.remove("active");
  toast.classList.remove("active");
});
