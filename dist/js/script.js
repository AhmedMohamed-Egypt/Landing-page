const swiper = new Swiper(".getTickes  .swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 5,
  speed: 500,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperEducation = new Swiper(".education-sliding  .swiper", {
  // Default parameters
  slidesPerView: 1,
  // spaceBetween: 5,
  speed: 500,

  // Responsive breakpoints

  /*
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  */
});
//format Number

animateDisplay = function (target, animationClass, displayType, timeout) {
  // timeout should be longer than css transition
  var doneTimedDisplay = false,
    displaying = false;

  target.addEventListener("transitionend", function () {
    if (!target.classList.contains("active")) {
      target.style.display = "none";
    }
    doneTimedDisplay = true;
  });
  if (!target.style.display || target.style.display === "none") {
    displaying = true;
    target.style.display = displayType;
  } else {
    displaying = false;
  }

  window.requestAnimationFrame(function () {
    target.classList.toggle(animationClass);
    doneTimedDisplay = false;
  });

  if (!displaying) {
    setTimeout(function () {
      if (!doneTimedDisplay) {
        target.style.display = "none";
      }
      doneTimedDisplay = true;
    }, timeout);
  }
};
function tabList() {
  const ulTabs = document.querySelectorAll(".whatsHappening  .ultab li");
  const sections = document.querySelectorAll(".whatsHappening .cardHappening");
  ulTabs.forEach((item, index) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < sections.length; i++) {
        ulTabs[i].classList.remove("active");
        // animateDisplay(sections[i], 'active', 'none', 600)
        sections[i].style.display = "none";
        sections[i].classList.remove("active");
      }
      //  sections[index].classList.add("active");
      ulTabs[index].classList.add("active");
      animateDisplay(sections[index], "active", "flex", 1000);
    });
  });
}
tabList();

//
/*
  document.body.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    document.body.innerHTML = ""
    return false;
}, false);


window.addEventListener('keydown',(event)=>{
if(event.ctrlKey===true){
  document.body.innerHTML = ""
}
})

*/

function formatNumbers(){
  const allNums = document.querySelectorAll('.formatNum')

  allNums.forEach((item)=>{
    const x = +item.textContent
    console.log(x)
    item.textContent = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  })
}
formatNumbers()



