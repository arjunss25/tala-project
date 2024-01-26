
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


























let menu = document.querySelector("#nav-prt2 i");
let full = document.querySelector("#full-scr-nav");
let navh2 = document.querySelector("#nav h2");
let navh3 = document.querySelector("#nav-prt2 h3");
let navi = document.querySelector("#nav-prt2 i");
let flag = 0


menu.addEventListener("click",function(){
    if(flag === 0){
        full.style.top = "0%"
    navh2.style.color = "#222"
    navh3.style.color = "#222"
    navi.style.color = "#222"
    flag = 1
    }else{
        full.style.top = "-100%"
    navh2.style.color = "#dadada"
    navh3.style.color = "#dadada"
    navi.style.color = "#dadada"
    flag = 0
    }
})

let tl = gsap.timeline()

tl.from("#page1 h1",{
    y:200,
    duration:0.8,
    opacity: 0
})

tl.from("#page1 h2",{
    y:50,
    duration:0.6,
    opacity: 0,
    delay:"-0.5"
})

tl.from("#page1 h3",{
    y:30,
    duration:0.6,
    opacity: 0,
    delay:"-0.5"
})

gsap.to("#page2 img",{
    scale:0.98,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 1%",
        scrub:3
    }
})

gsap.from("#page2 h2",{
    y:100,
    rotatex:"-10deg",
    opacity:0,
    scrollTrigger:{
        trigger:"#hh",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})


let slide1h1 = document.querySelectorAll("#page6 .slide1-of-h1 h1");
let slide2h1 = document.querySelectorAll("#page6 .slide2-of-h1 h1");

slide1h1.forEach(function(elem){
    gsap.to(elem,{
        transform:"translateX(-100%)",
        duration:5,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:3
        }
    })
})

slide2h1.forEach(function(elem){
    gsap.to(elem,{
        transform:"translateX(0%)",
        duration:5,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:3
        }
    })
})




// page3


const products = document.querySelectorAll(".product");

products.forEach((product) => {
    let img = product.querySelector("img");
    product.addEventListener("mousemove", (e) => {
        const rect = product.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        gsap.to(img, {
            opacity: 1,
            x: offsetX - img.offsetWidth / 2,
            y: offsetY - img.offsetHeight / 2,
        });
    });

    product.addEventListener("mouseleave", () => {
        gsap.to(img, {
            opacity: 0,
        });
    });
});


let tl2 = gsap.timeline()
tl2.from("#page3 .head1",{
    y:200,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})
tl2.from("#page3 .head2",{
    y:150,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})
tl2.from("#page3 .head3",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})

// page4
gsap.from("#page4 h1",{
    y:100,
    rotatex:"-10deg",
    opacity:0,
    scrollTrigger:{
        trigger:"#head",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})



// page 5
gsap.from("#elem1",{
    x:-300,
    opacity:0,
    scrollTrigger:{
        trigger:"#page5-elems",
        scroller:"#main",
        // markers:true,
        start:"top 110%",
        end:"top 60%",
        scrub:3

    }
})

gsap.from("#page5-content img",{
    rotate:-360,
    repeat:-1,
    duration: 2,
    ease: "none"

})



gsap.from("#elem2",{
    x:300,
    opacity:0,
    scrollTrigger:{
        trigger:"#page5-elems",
        scroller:"#main",
        // markers:true,
        start:"top 110%",
        end:"top 60%",
        scrub:3

    }
})
let tl3 = gsap.timeline();
tl3.from(".head11",{
    y:250,
    opacity:0,
    scrollTrigger:{
        trigger:"#page5-content",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})
tl3.from(".head12",{
    y:150,
    opacity:0,
    scrollTrigger:{
        trigger:"#page5-content",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})
tl3.from(".smily",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page5-content",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})

// page7

document.querySelector("#element1").addEventListener("mousemove",function(dets){
    document.querySelector("#element1 img").style.opacity = 1;
    document.querySelector("#element1 img").style.left = `${dets.x -100}px`
    document.querySelector("#element1 img").style.top = `${dets.y -500}px`
})

document.querySelector("#element1").addEventListener("mouseleave",function(dets){
    document.querySelector("#element1 img").style.opacity = 0;
})

document.querySelector("#element2").addEventListener("mousemove",function(dets){
    document.querySelector("#element2 img").style.opacity = 1;
    document.querySelector("#element2 img").style.left = `${dets.x -100}px`
    document.querySelector("#element2 img").style.top = `${dets.y -500}px`
})

document.querySelector("#element2").addEventListener("mouseleave",function(dets){
    document.querySelector("#element2 img").style.opacity = 0;
})


let tl4 = gsap.timeline();
tl4.from("#page7 h3",{
    y:200,
    opacity:0,
    scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})

tl4.from("#page7-elems",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})









// page 8

let tl5 = gsap.timeline();
tl5.from("#heading h1",{
    y:200,
    opacity:0,
    scrollTrigger:{
        trigger:"#page8",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})
tl5.from("#link",{
    y:200,
    opacity:0,
    scrollTrigger:{
        trigger:"#social",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})
tl5.from(".img-sec1 img",{
    y:500,
    opacity:0,
    scrollTrigger:{
        trigger:"#image-sec",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})

tl5.from(".img-sec2 img",{
    y:400,
    opacity:0,
    scrollTrigger:{
        trigger:"#image-sec",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})

tl5.from(".img-sec3 img",{
    y:300,
    opacity:0,
    scrollTrigger:{
        trigger:"#image-sec",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})


// page9
let tl6 = gsap.timeline();
tl6.from("#sec11 h1",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#first-half",
        scroller:"#main",
        scrub:3
    }
})

