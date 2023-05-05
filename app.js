const scrollBtn = document.getElementById("scrollBtn");
const mainSection = document.getElementById("main");

scrollBtn.addEventListener("click", () => {
  mainSection.scrollIntoView({ behavior: "smooth" });
});
