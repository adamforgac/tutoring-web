// ONLY HEADER MENU
// ONLY HEADER MENU
// ONLY HEADER MENU

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

// ONLY HEADER MENU END
// ONLY HEADER MENU END
// ONLY HEADER MENU END


// LOADING NUMBERS


let valueDisplays =  document.querySelectorAll(".num")
let interval = 4000
let numberFacts = document.querySelector(".number-facts")

valueDisplays.forEach(valueDisplay => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"))
  console.log(endValue)
  let durartion = Math.floor(interval / endValue)
  let counter = setInterval(function(){
    startValue += 2;
    valueDisplay.textContent = startValue
    if(startValue == endValue) {
      clearInterval(counter)
    }
  }, durartion)
})


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
  rootMargin: '0px',
})

scrollTrigger('.loader', {
  rootMargin: '0px',
  cb: function(el){
      el.innerText = 'Loading...'
      setTimeout(() => {
          el.innerText = 'Task Complete!'
      }, 1000)
  }
})
