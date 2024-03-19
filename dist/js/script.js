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
/*Timer */
var numberOfDays = 15;
var today = new Date('Tue Mar 19 2024 11:58:33 GMT+0200 ');
var start = getNextStartDate(today);
var end = getNextEndDate(today);
var endMiddle = getMidEndDate(today);
console.log(end)
console.log(endMiddle)

var timer = setInterval(function() {
  var differenceTime, dd, hh, mm, ss, str;
  var now = new Date();
  if (now >= endMiddle) {
    start = getNextStartDate(now);
    end = getNextEndDate(now);
   
  } else {
    differenceTime = end - now;

    dd = parseInt(differenceTime / (1000 * 60 * 60 * 24));
    hh = parseInt(differenceTime / (60 * 60 * 1000)) % 24;
    mm = parseInt(differenceTime / (1000 * 60)) % 60;
    ss = parseInt(differenceTime / 1000) % 60;

    document.querySelector('.days').innerHTML = format(dd);
    document.querySelector('.hours').innerHTML = format(hh);
    document.querySelector('.minutes').innerHTML = format(mm);
   // document.querySelector('.seconds').innerHTML = format(ss);
  }
}, 1000);

function getNextEndDate(fromDate) {
  return new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate() + numberOfDays);
}
function getMidEndDate(fromDate) {
    return new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate() + 4);
  }

function getNextStartDate(currentDate) {
  var currentDay = currentDate.getDate();
  var index = Math.ceil(currentDay / 3);
  var nextStartDay = 1 + numberOfDays * index
  return new Date(currentDate.getFullYear(), currentDate.getMonth(), nextStartDay);
}

function format(num) {
  return (9 < num) ? num : "0" + num;
};
