function delay(n) {
  n = n || 2000;

  return new Promise((done) => {
    setTimeout(()=> {
      done();
    }, n)
  });
}

$(".animated-text-titles").each(function(index){
  // var dataTextVal = $(".animated-text-titles").html();
   $(this).attr('data-text', $(this).html());
  
});


function pageTransition() {
  var tl= gsap.timeline();
  tl.to(".loading-screen", {
    duration:1,
    width:"100%",
    // left:"0%",
    opacity:"1",
    ease:"Expo.easeInOut"
  });


tl.to(".loading-screen", {
    duration: 1,
    width: "100%",
    // left: "100%",
    opacity:"0",
    ease:"Expo.easeInOut",
    delay: 0.3
  });

tl.set(".loading-screen", { opacity: "0" });
}

function contentAnimation(){
var tl = gsap.timeline();
tl.from(".animate-this", { duration: 1, y: 30, opacity:0, stagger:0.4, delay:0.2 
});
}

function brandAnimation(){
  var tl = gsap.timeline();
  tl.from(".animate-letters", { duration: 1, y: 30, opacity:0, stagger:0.4, delay:3});
  tl.from(".animate-figure", { duration: .5, x: -30, opacity:0});
}


$(".ham-menu-btn").mouseenter(function(){
$(".menu-links").addClass("links-animate-in");
$(".ham-menu-btn").addClass("ham-menu-btn-animate");
$(".menu-links").removeClass("links-animate-out");
});

$(".ham-menu-btn").mouseleave(function(){
  if($(".menu-container").is(':hover')){
  } else {
    $(".menu-links").addClass("links-animate-out");
    $(".menu-links").removeClass("links-animate-in");
    $(".ham-menu-btn").removeClass("ham-menu-btn-animate");
  }
  });

  $(".menu-container").mouseleave(function(){
    $(".menu-links").addClass("links-animate-out");
    $(".menu-links").removeClass("links-animate-in");
    $(".ham-menu-btn").removeClass("ham-menu-btn-animate");
  });

$(".menu-links").mouseenter(function(){
  
});

$(".menu-links").mouseleave(function(){
  $(".menu-links").addClass("links-animate-out");
  $(".menu-links").removeClass("links-animate-in");
  $(".ham-menu-btn").removeClass("ham-menu-btn-animate");
});

//smoothscroll



// skew scroll effect 

// const content = document.querySelector(".main-container");
// let currentPos = window.pageYOffset;

// const callDistort = function(){
//   const newPos = window.pageYOffset;
//   const diff = newPos - currentPos;
//   const speed = diff * 0.35;

//   content.style.transform = "skewY("+ speed + "deg)";
//   currentPos = newPos;
//   requestAnimationFrame(callDistort);
// };
// callDistort();

///////////////////////////////////////////////////////////////


// project modal
$('.project-link').click(function() {
  let target = $(this).attr('data-traget'); 
  $("#"+target).css({"opacity": "1", "visibility": "visible"});
  $(body).css('overflow','hidden');
});

$('.close-project').click(function() {
  let target = $(this).attr('data-traget'); 
    $("#"+target).css("opacity", "0");
    $("#"+target).delay(500).queue(function (next) { 
      $(this).css('visibility', 'hidden');
      $(body).css('overflow','scroll ');
      $(body).css('overflow-x','hidden');
      next(); 
    });
});
// ---------------------- project modal



// momentoum scroll
const body = document.body;
const main = document.getElementById('main');

let sx = 0, // For scroll positions
    sy = 0;
let dx = sx, // For container positions
    dy = sy;


body.style.height = main.clientHeight + 'px';


main.style.position = 'fixed';
main.style.top = 0;
main.style.left = 0;

// Bind a scroll function
window.addEventListener('scroll', easeScroll);


function easeScroll() {
  
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}


window.requestAnimationFrame(render);

function render(){
  //We calculate our container position by linear interpolation method
  dx = li(dx,sx,0.07);
  dy = li(dy,sy,0.07);
  
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  
  
  main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
 
  
  
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}



// custom cursor
const $body = document.querySelector('body');
const $bigBall = document.querySelector('.cursor__ball--big');
const $lightBall = document.querySelector('.cursor__ball--light');
const $smallBall = document.querySelector('.cursor__ball--small');
const $clickIndi = document.querySelector('.cursor__clickIdic');
const $viewIndi = document.querySelector('.cursor__viewIndi');
const $hoverables = document.querySelectorAll('.hoverable');
const $hoverables_view = document.querySelectorAll('.hoverable-view');


// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

for (let i = 0; i < $hoverables_view.length; i++) {
  $hoverables_view[i].addEventListener('mouseenter', onMouseHoverView);
  $hoverables_view[i].addEventListener('mouseleave', onMouseHoverOutView);
}

// Move the cursor
// window.CP.exitedLoop(0);


// cursor movement
function onMouseMove(e) {
  TweenMax.to($bigBall, 0.9, {
    x: e.clientX  - $bigBall.clientWidth/2.6,
    y: e.clientY - $bigBall.clientHeight/2.6 });

  TweenMax.to($lightBall, 0.9, {
    x: e.clientX - $lightBall.clientWidth/2.2 ,
    y: e.clientY - $lightBall.clientHeight/2.2 });
    
  TweenMax.to($smallBall, 0.1, {
    x: e.clientX ,
    y: e.clientY });

    TweenMax.to($smallBall, 0.1, {
      x: e.clientX ,
      y: e.clientY });
}
// ---------- cursor movement


// hide & Show Cursor 

$("body").mouseenter(function() {
  $(".cursor").show(500);
});
$("body").mouseleave(function() {
  $(".cursor").hide(500);
});

// -------------------------- hide & show Cursor 


// Hover an element

// click indicator 

function onMouseHover() {
  TweenMax.to($bigBall, 0.3, {
    scale: 2,
    backgroundColor:"#2F195F",
    border:"none"
  });

  TweenMax.to($clickIndi, 0.3, {
    autoAlpha:1,
    scale:0.150
  });

  TweenMax.to($smallBall, 0.3, {
    autoAlpha:1,
    scale: 7, 
  
  });   
}

function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1,
    background:"none",
    border:"3px solid #FAA6FF"
  });

    TweenMax.to($smallBall, 0.3, {
      autoAlpha:1,
      scale: 1, 
    });

    TweenMax.to($clickIndi, 0.3, {
      autoAlpha:0 });

     TweenMax.to($img_cursor, 0.3, {
      scale: 0.1, 
      autoAlpha: 0
    });
}

// ----------- click indicator 

// view indicator

function onMouseHoverView() {
  TweenMax.to($bigBall, 0.3, {
    scale: 2,
    backgroundColor:"#2F195F",
    border:"none"
  });

  TweenMax.to($viewIndi, 0.3, {
    autoAlpha:1,
    scale:0.150
  });

  TweenMax.to($smallBall, 0.3, {
    autoAlpha:1,
    scale: 7, 
  
  });   
}

function onMouseHoverOutView() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1,
    background:"none",
    border:"3px solid #FAA6FF"
  });

    TweenMax.to($smallBall, 0.3, {
      autoAlpha:1,
      scale: 1, 
    });

    TweenMax.to($viewIndi, 0.3, {
      autoAlpha:0 });

   
}


// ---------- view indicator

// ------------------Hover an element

// ----------------------------- custom cursor 


// custom project link interaction 


    $(".p-1").mouseover(function() {
      $(".thumb-loc img").addClass("visible-thumb");
    });
    $(".p-1").mouseout(function() {
      $(".thumb-loc img").removeClass("visible-thumb");
    });

    $(".p-2").mouseover(function() {
      $(".thumb-deg img").addClass("visible-thumb");
    });
    $(".p-2").mouseout(function() {
      $(".thumb-deg img").removeClass("visible-thumb");
    });

    $(".p-3").mouseover(function() {
      $(".thumb-gro img").addClass("visible-thumb");
    });
    $(".p-3").mouseout(function() {
      $(".thumb-gro img").removeClass("visible-thumb");
    });
// ------------------/ custom project link interaction 