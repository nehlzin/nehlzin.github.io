const contactPage = document.querySelector(".contact");
const aboutPage = document.querySelector(".about");

function aboutPageScrollAnimation() {
  let mainAboutContainer = document.getElementById("aboutPage");
  let aboutTop = mainAboutContainer.getBoundingClientRect().top;
  let aboutScreenSize = window.innerHeight / 1.3;

  if (aboutTop < aboutScreenSize) {
    aboutPage.classList.add("slideUp");
  } else {
    aboutPage.classList.remove("slideUp");
  }
}
function contactPageScrollAnimation() {
  let mainContactSection = document.getElementById("contactSection");
  let contactTop = contactPage.getBoundingClientRect().top;
  let contactScreenSize = window.innerHeight / 2;

  if (contactTop < contactScreenSize) {
    mainContactSection.classList.add("slideUp");
  } else {
    mainContactSection.classList.remove("slideUp");
  }
}

window.addEventListener("scroll", () => {
  aboutPageScrollAnimation();
  contactPageScrollAnimation();
});

function navAnim() {
  const navBtn = document.getElementById("mobileHamburgerMenuBtn");
  const navConX = document.querySelector(".navMobileLinks");

  const navLine1 = document.getElementById("hamline1");
  const mobileNav = document.querySelector(".navMobileLinks");

  navBtn.addEventListener("click", () => {
    if (mobileNav.classList.contains("activateNav")) {
      mobileNav.classList.remove("activateNav");
      navLine1.classList.remove("line1");
    } else {
      mobileNav.classList.add("activateNav");
      navLine1.classList.add("line1");
    }
  });

  navConX.addEventListener("click", () => {
    if (mobileNav.classList.contains("activateNav")) {
      mobileNav.classList.remove("activateNav");
      navLine1.classList.remove("line1");
    } else {
      mobileNav.classList.add("activateNav");
      navLine1.classList.add("line1");
    }
  });
}
navAnim();
