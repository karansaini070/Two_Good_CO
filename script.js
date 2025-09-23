
function locomotivanimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
locomotivanimation()

function navbaranimation() {
  gsap.to(".nav-part1 svg", {
    transform: "translatey(-100%)",
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",

      start: "top 0",
      end: "top -5%",
      scrub: true
    }
  })
  gsap.to(".nav-part2 .links", {
    transform: "translatey(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",

      start: "top 0",
      end: "top -5%",
      scrub: true
    }
  })

}
navbaranimation()

function videoconAnimation() {
  let videocon = document.querySelector(".video-container")
  let videoCntainer = document.querySelector(".video-container video")
  let playbtn = document.querySelector('.play')
  videocon.addEventListener("mouseenter", function () {

    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,

    })
    gsap.to(videoCntainer, {
      duration: 0.5,
      opacity: 1,

    })

  })
  videocon.addEventListener("mouseleave", function () {

    gsap.to(playbtn, {
      scale: 0,
      opacity: 0

    })
    gsap.to(videoCntainer, {
      duration: 0.5,
      opacity: 0,

    })
  })
  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 70,
      top: dets.y - 80,

    })
  })
}
videoconAnimation()

function loadinganimation() {
  gsap.from(".page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3
  })
  gsap.from(".video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.5,
    duration: 0.9,

  })
}
loadinganimation()


function productanimation() {
  document.querySelectorAll(".elem").forEach(elem => {
    let dets = elem.querySelector(".dets");
    let detsItem = elem.querySelector(".dets-item");

    dets.addEventListener("mouseenter", function () {
      gsap.to(detsItem, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        pointerEvents: "auto"
      });
    });

    dets.addEventListener("mouseleave", function () {
      gsap.to(detsItem, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        pointerEvents: "none"
      });
    });
  });
}
productanimation()

function cursoranimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      left: dets.x,
      top: dets.y

    })
  })
  document.querySelector("#child1").addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      transform: 'translate(-50%,-50%)  scale(1)',
      backgroundColor: "rgba(212, 189, 154, 0.72)",
      duration: 1,
      ease: "power1.out"
    })
  })
  document.querySelector("#child1").addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      transform: 'translate(-50%,-50%)  scale(0)',
      duration: 1,
      ease: "power1.out"
    })
  })
  document.querySelector("#child3").addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      transform: 'translate(-50%,-50%)  scale(1)',
      backgroundColor: "rgba(219, 157, 243, 0.56)",
      duration: 1,
      ease: "power1.out"
    })
  })
  document.querySelector("#child3").addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      transform: 'translate(-50%,-50%)  scale(0)',
      duration: 1,
      ease: "power1.out"
    })
  })
}
cursoranimation()

function imagescrollanimation() {

  gsap.from(".page3 .child", {
    scrollTrigger: {
      trigger: ".page3 .child",
      scroller: ".main", // Important when using LocomotiveScroll
      start: "top 70%",  // Jab element viewport ke 80% par aaye

    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
  });

  gsap.from(".page2 .elem", {
    scrollTrigger: {
      trigger: ".page2 .elem",
      scroller: ".main", // Important when using LocomotiveScroll
      start: "top 70%",  // Jab element viewport ke 80% par aaye

    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
  });

  gsap.from(".page4 img", {
    scrollTrigger: {
      trigger: ".page4 img",
      scroller: ".main", // Important when using LocomotiveScroll
      start: "top 70%",  // Jab element viewport ke 80% par aaye

    },

    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
  });


}

imagescrollanimation()


function footerAnimation() {


  gsap.from(".page5 .logo-h h5", {
    scrollTrigger: {
      trigger: ".page5 .logo-h h5",
      scroller: ".main", // Important when using LocomotiveScroll
      start: "top 80%",  // Jab element viewport ke 80% par aaye

    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    // stagger: 0.2
  });
  gsap.from(".page5 h1", {
    scrollTrigger: {
      trigger: ".page5 h1",
      scroller: ".main", // Important when using LocomotiveScroll
      start: "top 80%",  // Jab element viewport ke 80% par aaye

    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
  });

  gsap.from(".page5 .page5img", {
    scrollTrigger: {
      trigger: ".page5 .page5img",
      scroller: ".main", // Important when using LocomotiveScroll
      start: "top 50%",  // Jab element viewport ke 80% par aaye

    },

    opacity: 0,
    duration: 3,
    ease: "power3.out",
    stagger: 0.2
  });

  gsap.from(".page5 .footerimg ", {
    scrollTrigger: {
      trigger: ".page5 .footerimg",
      scroller: ".main", // Important when using LocomotiveScroll
      start: "top 80%",  // Jab element viewport ke 80% par aaye

    },
    y: 100,
    opacity: 0,
    duration: .8,
    ease: "power3.out",
    stagger: 0.2
  });
}
footerAnimation()

function curvesvganimation() {
  let initialpath = `M 10 200 Q 900 200 1790 200`;
  let finalpath = `M 10 200 Q 900 200 1790 200`;

  let string = document.querySelector(".string");

  string.addEventListener("mousemove", function (dets) {
    initialpath = `M 10 200 Q ${dets.clientX} ${dets.clientY} 1790 200`;
    gsap.to(".stringsvg path", {
      attr: { d: initialpath },
      duration: 0.3,
      ease: "power3.out",
    });
  });

  string.addEventListener("mouseleave", function (dets) {
    gsap.to(".stringsvg path", {
      attr: { d: finalpath },
      duration: 1.5,
      ease: "elastic.out(1, 0.2)",
    });
  });
}
curvesvganimation();

function menuAnimation() {
  let menu = document.querySelector(".navi")
  let close = document.querySelector(".menu i")

  let tl = gsap.timeline()
  tl.to(".menu", {
    top: 0,
    duration: 0.3,
  })

  tl.from(".menu i", {

    duration: .1,
    opacity: 0,

  })

  tl.pause()

  menu.addEventListener("click", function () {
    tl.play()
  })
  close.addEventListener("click", function () {
    tl.reverse()
  })

}
menuAnimation()