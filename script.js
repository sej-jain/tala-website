gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



var menu=document.querySelector("#navi i");
var fs=document.querySelector("#fullscr");
var flag=0;
menu.addEventListener("click",function(){
    if(flag==0){
        fs.style.top="0%",
        fs.style.zIndex=9;
        document.querySelector("#page1 #nav ").style.color="black";
        flag=1;
    }
     else{
        fs.style.top="-100vh"
         document.querySelector("#page1 #nav").style.color="#fff";
         flag=0;
    }
    
})
var t=gsap.timeline();
t
.from("#page1 h1",{
    x:-20,
    opacity:0,
    duration:1
})
.from(".a",{
    y:30,
    stagger:.3,
    opacity:0,
    duration:1


})
gsap.to("#page2 img",{
    scale:1.2,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"body",
        start:"top 80%",
        end:"top 0",
        scrub:2
    }
})

gsap.from("#page2 #h11 h1",{
    rotateX:"110deg",
    opacity:0,
    // duration:1,
    scrollTrigger:{
        trigger:"#page2 #h11 h1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 20%",
        scrub:2
    }

})
gsap.from("#page4>h1",{
    x:-20,
    stagger:.2,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:2,
    }
})

var s1=document.querySelectorAll("#page6 .slide1 h1");
s1.forEach(function(elem){
    gsap.to(elem,{
        transform:`translateX(-100%)`,
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"body",
            scrub:3
        }
    })
})

var s2=document.querySelectorAll("#page6 .slide2 h1");
s2.forEach(function(elem){
    gsap.to(elem,{
        transform:`translateX(0%)`,
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"body",
            scrub:3
        }
    })
})

document.querySelector("#yes").addEventListener("mousemove",function(dets){
    document.querySelector("#yes img").style.opacity=1;
    document.querySelector("#yes img").style.left= `${dets.x}px`;
    document.querySelector("#yes img").style.left= `${dets.y-200}px`;

    
})
document.querySelector("#no").addEventListener("mousemove",function(dets){
    document.querySelector("#no img").style.opacity=1;
    document.querySelector("#no img").style.right= `${dets.x+90}px`;
    document.querySelector("#no img").style.right= `${dets.y-200}px`;
    // console.log(dets.x)
    
})
document.querySelector("#yes").addEventListener("mouseleave",function(dets){
    document.querySelector("#yes img ").style.opacity=0;
    
})
document.querySelector("#no").addEventListener("mouseleave",function(dets){
    document.querySelector("#no img ").style.opacity=0;
    
})
gsap.from("#line",{
    width:`1%`,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:`top 76%`,
        // end:`top 10%`,
        // markers:true,
        scrub:3
    }

})
gsap.to("#page5>img",{
    rotate:360,
    repeat:-1,
    duration:2,
    ease:"linear"
})
    
