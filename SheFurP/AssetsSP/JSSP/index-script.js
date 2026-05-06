
console.log("Index page loaded");

/*scroll buttons*/
const scrollDown = document.getElementById("scrollDown");
const scrollUp = document.getElementById("scrollUp");

window.addEventListener("scroll", () => {
  scrollUp.style.display = window.scrollY > 300 ? "block" : "none";
  scrollDown.style.display = window.scrollY < (document.body.scrollHeight - window.innerHeight - 300) ? "block" : "none";
});

scrollDown.addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth"
  });
});

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
