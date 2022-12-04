const hamburger = document.getElementsByClassName("hamburger")[0]
const mobileNavs = document.getElementsByClassName("nav-links")[0]

hamburger.addEventListener("click", () => {
  mobileNavs.classList.toggle("active")
})

function sendMessage(){
  let link = "https://web.telegram.org/k/#Sam_Corleone"
  window.open(link);
}


window.addEventListener("scroll", gapAnimate);

function gapAnimate() {
  let bgrid = document.querySelectorAll(".grid-container")[0];
  let wh = window.innerHeight;
  let top = bgrid.getBoundingClientRect().top;
  let show_point = 10;
  if (bgrid) {
    if (show_point < wh - top) {
      bgrid.classList.add("active");
    } else {
      bgrid.classList.remove("active");
    }
  }
}

/* Scroll animation of Green Grid */
window.addEventListener("scroll", rainFall);

function rainFall() {
  let reveals = document.querySelectorAll(".grid-container2");
  let wh = window.innerHeight;
  let top = reveals[0].getBoundingClientRect().top;
  let show_point = 150;
  let items = document.querySelectorAll(".rain-fall");
  for (let i = 0; i < items.length; i++) {
    if (show_point < wh - top) {
      items[i].classList.add("active");
    } else {
      items[i].classList.remove("active");
    }
  }
}

