let lastScrollTop = 0;
const header = document.querySelector("header");
const toTop = document.querySelector(".to-top");
const heroSection = document.querySelector("#hero");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const heroSectionOffsetTop = heroSection.offsetTop;

  if (scrollTop > heroSectionOffsetTop) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
  // Lock screen in landscape (may not work on all devices)
function lockLandscape() {
    if (window.innerHeight > window.innerWidth) {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape')
                .catch(e => console.log("Orientation lock failed:", e));
        }
    }
}

// Check on load and resize
window.addEventListener('load', lockLandscape);
window.addEventListener('resize', lockLandscape);
});