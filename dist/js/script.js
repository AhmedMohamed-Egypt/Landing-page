const swiper = new Swiper(".how-it-work  .swiper", {
  // Default parameters

  spaceBetween: 15,
  speed: 500,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
   
    // when window width is >= 640px
   
    992: {
      spaceBetween: 15,
      slidesPerView: 2,
      
    },
    993: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".how-it-work .swiper-button-next",
    prevEl: ".how-it-work .swiper-button-prev",
  },
});

const swiperToken = new Swiper(".theToken__list .swiper", {
  // Default parameters
  //slidesPerView: 3,
  // spaceBetween: 5,
  speed: 500,
  spaceBetween: 5,
  speed: 500,
  pagination: {
    el: '.theToken__list .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints:{
    375: {
      slidesPerView: 1,
    },
    770: {
      slidesPerView: 3,
    },
  },
 


});



const swiperTraffic = new Swiper(".theToken__traffic.swiper", {
  // Default parameters
  //slidesPerView: 3,
  // spaceBetween: 5,
  speed: 500,
  spaceBetween: 5,
  speed: 500,
  navigation: {
    nextEl: ".theToken__traffic.swiper .swiper-button-next",
    prevEl: ".theToken__traffic.swiper .swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints:{
    375: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 6,
    },
  },
 


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

function formatNumbers() {
  const allNums = document.querySelectorAll(".formatNum");

  allNums.forEach((item) => {
    const x = +item.textContent;

    item.textContent = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  });
}
formatNumbers();

//get Current Year
const currentYear = document.querySelector(".currentYear");
currentYear.textContent = new Date().getFullYear();
//fixed header
let scroll = false;
window.onscroll = () => {
  fixedHeader();
  if (window.scrollY > 50) {
    scroll = true;
  } else {
    scroll = false;
  }
};
const fixedHeader = () => {
  if (scroll) {
    document.body.classList.add("scrolling");
  } else {
    document.body.classList.remove("scrolling");
  }
};
function hamburgMenu() {
  const hamburgBtn = document.querySelector(".Hamburgmenu");
  let show = false;
  hamburgBtn.addEventListener("click", () => {
    if (!show) {
      document.body.classList.add("menuOpen");
      show = true;
    } else {
      document.body.classList.remove("menuOpen");
     

      show = false;
    }
  });
}
hamburgMenu();
const myCountdown = new countdown({
  target: '.countdown',
  dayWord: ' days',
  hourWord: ' hours',
  minWord: ' mins',
  secWord: ' seconds'
});