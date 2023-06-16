// Container
var container = document.getElementById('container');
var borderArray = ['50%'];
var blurArray = ['0','5px'];
var colorArray = ['#d183d6','#83d6d4','#4472CA'];
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var count = 300;

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
const loginbtns = document.querySelectorAll('.js-login-btn')
const login = document.querySelector('#login')
const close = document.querySelector('.js-login-close')
const loginctn = document.querySelector('.js-login-container') 

function showLogin() {
    login.classList.add('open')
}

function outLogin() {
    login.classList.remove('open')
}

for (const loginbtn of loginbtns) {
    loginbtn.addEventListener('click', showLogin)
}

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
const homebtns = document.querySelectorAll('.home')
const home = document.querySelector('#home')

function showHome() {
    home.classList.remove('out')   
}

function outHome() {
    home.classList.add('out')
}

// Course
const coursebtns = document.querySelectorAll('.course')
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

    for (const coursebtn of coursebtns) {
      coursebtn.addEventListener('click', function() {
        outBlog();
        outHome();
        showCourse();
    
        setTimeout(function() {
          slider.slick('slickGoTo', slider.slideCount - 1);
    
          setTimeout(function() {
            slider.slick('slickNext');
          }, 100);
        }, 100);
      });
    }
  
    for (const homebtn of homebtns) {
      homebtn.addEventListener('click', function() {
        outBlog();
        outCourse();
        showHome();
    
        setTimeout(function() {
          slider.slick('slickGoTo', slider.slideCount - 1);
    
          setTimeout(function() {
            slider.slick('slickNext');
          }, 100);
        }, 100);
      });
    }
  
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

// Contact
const contactbtns = document.querySelectorAll('.contact')
const contact = document.querySelector('#logo-chat')
const closeContacts = document.querySelectorAll('.close-contact')

function showContact() {
    contact.classList.add('open')
}

function outContact() {
    contact.classList.remove('open')
}

for (const contactbtn of contactbtns) {
  contactbtn.addEventListener('click', showContact)
  contactbtn.addEventListener('click', showBoxchat)
}

for (const closeContact of closeContacts) {
  closeContact.addEventListener('click', outContact),
  closeContact.addEventListener('click', outBoxchat)
}
  // Box chat
const boxchatbtn = document.querySelector('.box-chat')
const boxchat = document.querySelector('#box-chat')
const closeBoxchat =document.querySelector('.close-boxchat')

function showBoxchat() {
  boxchat.classList.add('open')
}

function outBoxchat() {
  boxchat.classList.remove('open')
}

closeBoxchat.addEventListener('click', outBoxchat)
boxchatbtn.addEventListener('click', showBoxchat)

// Document
const documenttbtns = document.querySelectorAll('.document');
const documentt = document.querySelector('#document');
const updownicon = document.querySelector('.fa-chevron-down');

function showDocument() {
  documentt.classList.add('open');
}

function outDocument() {
  documentt.classList.remove('open');
}

function changDocument() {
  for (const documenttbtn of documenttbtns) {
    documenttbtn.classList.add('change');
  }
}

function removechangDocument() {
  for (const documenttbtn of documenttbtns) {
    documenttbtn.classList.remove('change');
  }
}

function addOpenDocument() {
  for (const documenttbtn of documenttbtns) {
    documenttbtn.classList.add('open-document');
  }
}

function changeIconup() {
  updownicon.classList.add('fa-chevron-up');
  updownicon.classList.remove('fa-chevron-down');
}

function changeIcondown() {
  updownicon.classList.add('fa-chevron-down');
  updownicon.classList.remove('fa-chevron-up');
}

const documenttbtnOpen = document.querySelector('.open-document');

function removeOpenDocument() {
  documenttbtnOpen.classList.remove('open-document');
  documenttbtnOpen.classList.add('close-document');
  for (const documenttbtn of documenttbtns) {
    documenttbtn.removeEventListener('click', removeOpenDocument);
    documenttbtn.removeEventListener('click', outDocument);
    documenttbtn.removeEventListener('click', removechangDocument);
    documenttbtn.removeEventListener('click', changeIcondown);
  }
}

function toggleDocument() {
  if (documentt.classList.contains('open')) {
    outDocument();
    removechangDocument();
    changeIcondown();
  } else {
    showDocument();
    changDocument();
    changeIconup();
  }
}

documenttbtnOpen.addEventListener('click', toggleDocument);
for (const documenttbtn of documenttbtns) {
    documenttbtn.addEventListener('click', toggleDocument);
}

const closeDocumentts = document.querySelectorAll('.close-document');

for (const closeDocumentt of closeDocumentts) {
  closeDocumentt.addEventListener('click', outDocument);
  closeDocumentt.addEventListener('click', removechangDocument);
  closeDocumentt.addEventListener('click', changeIcondown);
}

// Blog
const blogbtns = document.querySelectorAll('.blog')
const blog = document.querySelector('#blog')

function showBlog() {
    blog.classList.add('open')
}

function outBlog() {
    blog.classList.remove('open')
}

$(document).ready(function() {
    var slider;

function initializeSlider() {
  var slidesToShow = 3;

  if (window.innerWidth < 1024) {
    slidesToShow = 2;
  }

  if (window.innerWidth < 740) {
      slidesToShow = 1;
    }

  slider = $('.blog-slider').slick({
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: false,
  });
}

initializeSlider();

$(window).resize(function() {
  if (slider) {
    slider.slick('unslick'); 
  }
  initializeSlider(); 
});

  for (const blogbtn of blogbtns) {
    blogbtn.addEventListener('click', function() {
      outHome();
      outCourse();
      showBlog();
  
      setTimeout(function() {
        slider.slick('slickGoTo', slider.slideCount - 1);
  
        setTimeout(function() {
          slider.slick('slickNext');
        }, 100);
      }, 100);
    });
  }

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