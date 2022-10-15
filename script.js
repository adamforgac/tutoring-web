let list1 = document.querySelector(".list1")
let list2 = document.querySelector(".list2")
let list3 = document.querySelector(".list3")
let list4 = document.querySelector(".list4")
let list5 = document.querySelector(".list5")

let answer1 = document.querySelector(".answer1")
let answer2 = document.querySelector(".answer2")
let answer3 = document.querySelector(".answer3")
let answer4 = document.querySelector(".answer4")
let answer5 = document.querySelector(".answer5")


// ANIMATION FOR QUESTION NUMBER ONE


list1.addEventListener("click", space1)


function space1() {
    list1.classList.toggle("active-list1");
    answer1.classList.toggle("active-answer1");
    
}


// ANIMATION FOR QUESTION NUMBER TWO



list2.addEventListener("click", space2)


function space2() {
    list2.classList.toggle("active-list2");
    answer2.classList.toggle("active-answer2");
    
}

// ANIMATION FOR QUESTION NUMBER THREE


list3.addEventListener("click", space3)

function space3() {
  list3.classList.toggle("active-list3");
  answer3.classList.toggle("active-answer3");
  
}


// ANIMATION FOR QUESTION NUMBER FOUR


list4.addEventListener("click", space4)

function space4() {
  list4.classList.toggle("active-list4");
  answer4.classList.toggle("active-answer4");
  
}

// ANIMATION FOR QUESTION NUMBER FIVE   


list5.addEventListener("click", space5)

function space5() {
  list5.classList.toggle("active-list5");
  answer5.classList.toggle("active-answer5");
  
}




// SCROLLING ANIMATIONS



function scrollTrigger(selector, options = {}){
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
      addObserver(el, options)
  })
}

function addObserver(el, options){
  if(!('IntersectionObserver' in window)){
      if(options.cb){
          options.cb(el)
      }else{
          entry.target.classList.add('active-slide')
      }
      return
  }
  let observer = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
          if(entry.isIntersecting){
              if(options.cb){
                  options.cb(el)
              }else{
                  entry.target.classList.add('active-slide')
              }
              observer.unobserve(entry.target)
          }
      })
  }, options)
  observer.observe(el)
}
scrollTrigger('.intro-text')

scrollTrigger('.scroll-reveal', {
  rootMargin: '-100px',
})

scrollTrigger('.loader', {
  rootMargin: '-100px',
  cb: function(el){
      el.innerText = 'Loading...'
      setTimeout(() => {
          el.innerText = 'Task Complete!'
      }, 1000)
  }
})



// BACK TO TOP SCROLL

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { 
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else {
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};


// HAMBURGER ICON 


var btnMenu = document.querySelector(".btn-menu");

btnMenu.addEventListener("click", function() {
  btnMenu.classList.toggle("active-menu");
  btnMenu.classList.toggle("not-active");
});

// MENU FOR PHONES-SLIDE

let hamburgerMenu = document.querySelector(".btn-menu")
hamburgerMenu.addEventListener("click", slideIn)
function slideIn() {
  document.querySelector(".mobile-ham-menu").classList.toggle("active-menu-slide")

  document.querySelector(".body").classList.toggle("body-menu")
}


list1.addEventListener("click", hoverIt1)
function hoverIt1() {
  list1.classList.toggle("hovered")
}

list2.addEventListener("click", hoverIt2)
function hoverIt2() {
  list2.classList.toggle("hovered")
}

list3.addEventListener("click", hoverIt3)
function hoverIt3() {
  list3.classList.toggle("hovered")
}

list4.addEventListener("click", hoverIt4)
function hoverIt4() {
  list4.classList.toggle("hovered")
}

list5.addEventListener("click", hoverIt5)
function hoverIt5() {
  list5.classList.toggle("hovered")
}

let flipCard1 = document.querySelector(".flip-card1")
let flipInner1 = document.querySelector(".flip-card-inner1")
flipCard1.addEventListener("click", flipper1)
function flipper1() {
  flipInner1.classList.toggle("flip-for-phone1")
}

let flipCard2 = document.querySelector(".flip-card2")
let flipInner2 = document.querySelector(".flip-card-inner2")
flipCard2.addEventListener("click", flipper2)
function flipper2() {
  flipInner2.classList.toggle("flip-for-phone2")
}

let flipCard3 = document.querySelector(".flip-card3")
let flipInner3 = document.querySelector(".flip-card-inner3")
flipCard3.addEventListener("click", flipper3)
function flipper3() {
  flipInner3.classList.toggle("flip-for-phone3")
}

// ICONS ANIMATIONS - PHONE MENU

let homeIcon = document.querySelector(".only-home-icon")
let homeHeading = document.querySelector(".menu-home-heading")

homeHeading.addEventListener("click", zoomer)

function zoomer() {
  homeIcon.classList.add("active-only-home-icon")
  setTimeout(function() {
    homeIcon.classList.remove("active-only-home-icon")
  }, 1000)
}

let orderIcon = document.querySelector(".only-order-icon")
let orderHeading = document.querySelector(".menu-order-heading")

orderHeading.addEventListener("click", rider)

function rider() {
  orderIcon.classList.add("active-only-order-icon")
  setTimeout(function() {
    orderIcon.classList.remove("active-only-order-icon")
  }, 1000)
}

let priceIcon = document.querySelector(".only-price-icon")
let priceHeading = document.querySelector(".menu-price-heading")

priceHeading.addEventListener("click", waves)

function waves() {
  priceIcon.classList.add("active-only-price-icon")
  setTimeout(function() {
    priceIcon.classList.remove("active-only-price-icon")
  }, 1000)
}

let contactIcon = document.querySelector(".only-contact-icon")
let contactHeading = document.querySelector(".menu-contact-heading")

contactHeading.addEventListener("click", vibration)

function vibration() {
  contactIcon.classList.add("active-only-contact-icon")
  setTimeout(function() {
    contactIcon.classList.remove("active-only-contact-icon")
  }, 1000)
}

let aboutIcon = document.querySelector(".only-about-icon")
let aboutHeading = document.querySelector(".menu-about-heading")

aboutHeading.addEventListener("click", jumper)

function jumper() {
  aboutIcon.classList.add("active-only-about-icon")
  setTimeout(function() {
    aboutIcon.classList.remove("active-only-about-icon")
  }, 1000)
}


// EMAIL SENDER

function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "aforg@email.cz",
    Password : "F309CC05C8811BC1454F054829899D3D36A5",
    To : 'inputtryout@email.cz',
    From : "aforg@email.cz",
    Subject : "New email form",
    Body : "NOVÝ EMAIL: " +document.getElementById("email").value,
  }).then(
  window.open("success.html")
  );
}





