document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), 200 * i);
  });
});
