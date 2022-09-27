const currentDay = document.querySelector(".dayText");

window.addEventListener("onload", (e) => {
  e.preventDefault();
  loaded();
});
function loaded() {
  const loader = document.getElementById("loaded");
  loader.classList.add("hide");
}
 