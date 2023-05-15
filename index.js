var container = document.getElementById('container');
var borderArray = ['50%'];
var blurArray = ['0','5px'];
var colorArray = ['#d183d6','#83d6d4','#4472CA'];
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var count = 200;

function createElementRandom() {
    for (var i=0;i<count;i++) {
        var randomLeft = Math.floor(Math.random()*width);
        var randomTop = Math.floor(Math.random()*height);
        var color = Math.floor(Math.random()*3);
        var border = Math.floor(Math.random());
        var blur = Math.floor(Math.random()*2);
        var widthElement = Math.floor(Math.random()*5) + 5;
        var timeAnimation = Math.floor(Math.random()*8) + 5;

        var div = document.createElement("div");
        div.style.backgroundColor = colorArray[color];
        div.style.position = 'absolute';
        div.style.width = widthElement + 'px';
        div.style.height = widthElement + 'px';
        div.style.marginLeft = randomLeft + 'px';
        div.style.marginTop = randomTop + 'px';
        div.style.borderRadius = borderArray[border];
        div.style.filter = 'blur(' + blurArray[blur] + ')';
        div.style.animation = 'move ' + timeAnimation + 's ease-in infinite';
        container.appendChild(div);
    }
}

createElementRandom();

// Open login
const loginbtn = document.querySelector('.js-login-btn')
const login = document.querySelector('#login')
const close = document.querySelector('.js-login-close')
const loginctn = document.querySelector('.js-login-container') 

function showLogin() {
    login.classList.add('open')
}

function outLogin() {
    login.classList.remove('open')
}

loginbtn.addEventListener('click', showLogin)

close.addEventListener('click', outLogin)

login.addEventListener('click', outLogin)

loginctn.addEventListener('click', function(event) {
    event.stopPropagation()
})

// Open signup
const signupbtn = document.querySelector('.js-signup-btn')
const signup = document.querySelector('#signup')
const signupclose = document.querySelector('.js-signup-close')
const signupctn = document.querySelector('.js-signup-container') 
const backloginbtn = document.querySelector('.js-backlogin-btn')

function showSignup() {
    signup.classList.add('open')
}

function outSignup() {
    signup.classList.remove('open')
}

signupbtn.addEventListener('click', outLogin)
signupbtn.addEventListener('click', showSignup)

signupclose.addEventListener('click', outSignup)

signup.addEventListener('click', outSignup)

signupctn.addEventListener('click', function(event) {
    event.stopPropagation()
})

backloginbtn.addEventListener('click', outSignup)
backloginbtn.addEventListener('click', showLogin)

// Home
// $('.box-basic').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
// });

// var filtered = false;
  
// $('.js-filter').on('click', function(){
// if (filtered === false) {
//     $('.filtering').slick('slickFilter',':even');
//     $(this).text('Unfilter Slides');
//     filtered = true;
// } else {
//     $('.filtering').slick('slickUnfilter');
//     $(this).text('Filter Slides');
//     filtered = false;
// }
// });

// Home 
const homebtn = document.querySelector('.home')
const home = document.querySelector('#home')

function showHome() {
    home.classList.remove('out')   
}

function outHome() {
    home.classList.add('out')
}

homebtn.addEventListener('click', outCourse)
homebtn.addEventListener('click', showHome)

// Course
const coursebtn = document.querySelector('.course')
const course = document.querySelector('#course')

function showCourse() {
    course.classList.add('open')
}

function outCourse() {
    course.classList.remove('open')
}

$(document).ready(function() {
    var slider;
  
    slider = $('.box-basic').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      infinite: false,
    });
  
    coursebtn.addEventListener('click', function() {
      outHome();
      showCourse();
  
      setTimeout(function() {
        slider.slick('slickGoTo', slider.slideCount - 1);
  
        setTimeout(function() {
          slider.slick('slickNext');
        }, 100);
      }, 100);
    });

    homebtn.addEventListener('click', function() {
        outCourse();
        showHome();
    
        setTimeout(function() {
          slider.slick('slickGoTo', slider.slideCount - 1);
    
          setTimeout(function() {
            slider.slick('slickNext');
          }, 100);
        }, 100);
      });
  
    var filtered = false;
    $('.js-filter').on('click', function() {
      if (filtered === false) {
        $('.filtering').slick('slickFilter', ':even');
        $(this).text('Unfilter Slides');
        filtered = true;
      } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
      }
    });
  });

// Buy
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const buy = document.querySelector('.js-buy')
const closebuy = document.querySelector('.js-buy-close')
const buyCTN = document.querySelector('.js-buy-container') 

function showBuy() {
    buy.classList.add('open')
}

function outBuy() {
    buy.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuy)
}

closebuy.addEventListener('click', outBuy)

buy.addEventListener('click', outBuy)

buyCTN.addEventListener('click', function(event) {
    event.stopPropagation()
})
  