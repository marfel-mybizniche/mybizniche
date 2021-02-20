
   // Media Query 
   // Tablet Portrait======================================================
   "(min-width: 768px) and (max-width: 1023px)": function() {

    let scrollTL = gsap.timeline({
       scrollTrigger: {
          trigger: ".start-intro",
          pin: true,
          start: "top top",
          end: "400% top",
          scrub: 1
       }
    });
    
    scrollTL.to(".scroll .circle .big", {scale:1});

    scrollTL.to(".si-2a, .si-2b, .si-p", {opacity:0});
    scrollTL.to(".si-1m", {top:0});

    scrollTL.to(".scroll .line", {height:20});
    scrollTL.to(".scroll .circle .big", {scale:0.1}, "-=.3");

    scrollTL.to(".si-1b", {top:0, left:-154}, "-=.5");
    scrollTL.to(".si-1n", {left:-302, bottom:-92}, "-=.5");
    scrollTL.to(".si-wrap", {y:-50}, "-=.5");

    scrollTL.to(".start-side", {opacity:1});
    scrollTL.to(".si-h6", {opacity:0}, "-=.5");
    scrollTL.to(".si-h1", {opacity:0, visibility:"hidden"}, "-=.5");
    
    scrollTL.to(".scroll .line", {height:120});

    scrollTL.to(".si-image", {opacity:1});
    scrollTL.to(".start-side .link", {opacity:1}, "-=.5");
    scrollTL.to(".start-side .ss-h6", {top:-100, opacity:0, visibility: "hidden"});
    scrollTL.to(".si-image", {scale:0});
    scrollTL.to(".start-side .text li", {fontSize:"40"}, "-=.5");
    scrollTL.to(".start-side .link", {position:"absolute", right:0, top:15}, "-=.5");
    scrollTL.to(".start-side", {top:110}, "-=.5");
    scrollTL.from(".si-copy", {opacity:0}, "-=.3");
    
    scrollTL.to(".scroll .line", {height:180});
    scrollTL.to(".scroll .circle .big", {scale:1}, "-=.2");

    scrollTL.to(".scroll .line", {height:40});
    scrollTL.to(".scroll .circle .big", {scale:0.1}, "-=.2");
    
    scrollTL.to(".si-copy", {duration:.5, top:"-50%"}, "-=.4");
    scrollTL.from(".si-roi", {duration:.5, top:"100%"}, "-=.4");
    scrollTL.to(".si-copy", {opacity:0}, "-=.4");
    
    scrollTL.to(".scroll .line", {height:120});      
    
    let sideTL = gsap.timeline({
    scrollTrigger: {
       trigger: ".sec-marketers",
       start: "top 60%",
       end: "30% 50%",
       scrub: 1
    }
    });
    sideTL.to(".ss-h6", {display:"none"});
    sideTL.to(".start-side .text li span", {opacity:0});
    sideTL.to(".start-side .link", {top:-600, duration:2}, "-=.2");
    sideTL.to(".start-side .text .tm", {fontSize:"70px"}, "-=.2");
    sideTL.to(".start-side .text .tb", {fontSize:"70px"}, "-=.2");
    sideTL.to(".start-side .text .tn", {fontSize:"70px", top:-70, left:101}, "-=.5");
    sideTL.to(".start-side ", {top: 118});
    
    
    let markTL = gsap.timeline({
       scrollTrigger: {
          trigger: ".sec-marketers",
          pin: true,
          start: "top top",
          end: "200% top",
          scrub: 1,
          //markers: true
       }
    });
    
    //find dark background
    markTL.to("#wrapper", { className: "dark-bg"});      
    
    markTL.to(".start-side", {display:"none"} );
    markTL.from(".sec-marketers .title", {opacity:0, duration:.2}, "-=.4");
    markTL.from(".sec-marketers .body", {ease: "back", y: 300, opacity:0});
    markTL.from(".sec-marketers .team", {ease: "back", y: 300, opacity:0}, "-=.4" );
    
    markTL.to(".sec-marketers .sm-bg1", {opacity:0}, "+=.5");
    markTL.to(".sec-marketers .sm-bg2", {opacity:0}, "+=.5");
    
    let wwwTL = gsap.timeline({
       scrollTrigger: {
          trigger: ".sec-www",
          pin: true,
          start: "top top",
          end: "500% top",
          scrub: 1
       }
    });

    //find dark background
    wwwTL.to("#wrapper", { className: "dark-bg"});

    wwwTL.from(".sec-www .bg", {scale:1.2, transformOrigin:"center"});
    wwwTL.from(".sec-www .tp1-w .w2", {marginLeft:0, duration:.5}, "-=.2");
    wwwTL.from(".sec-www .tp1-w .w3", {marginLeft:0, duration:.5}, "-=.5");
    wwwTL.to(".sec-www .bg", {scale:1.2}, "-=.5");
    
    wwwTL.from(".sec-www .tp1-h", {opacity:0});
    wwwTL.from(".sec-www .tp1-h a", {height:110, width:110, lineHeight:"110px", duration:.2}, "-=.5");
    
    wwwTL.to(".sec-www .tp1-wrap", {right:"auto",  left: 65,  transform: "scale(.3) rotate(-90deg)",  top: "50%"});
    wwwTL.to(".sec-www .bg", {scale:1}, "-=.5");
    
    wwwTL.to(".sec-www .www-p1", {width:130, minWidth:1, zIndex:50});
    
    
    //Portfolio
    wwwTL.from(".www-p2 .port-1", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.5");
    wwwTL.from(".www-p2 .port-2", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.4");
    wwwTL.from(".www-p2 .port-3", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.4");
    wwwTL.from(".www-p2 .port-4", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.4");
    wwwTL.from(".www-p2 .port-5", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.4");
    
    wwwTL.to(".www-p2 .port-wrap ul", {x:-450, ease:"back"}, "+=.5");
    wwwTL.to(".www-p2 .port-1", {opacity:0}, "-=.5");
    wwwTL.to(".www-p2 .port-wrap ul", {x:-900, ease:"back"}, "+=.5");
    wwwTL.to(".www-p2 .port-2", {opacity:0}, "-=.5");
    wwwTL.to(".www-p2 .port-wrap ul", {x:-1350, ease:"back"}, "+=.5");
    wwwTL.to(".www-p2 .port-3", {opacity:0}, "-=.5");
    wwwTL.to(".www-p2 .port-wrap ul", {x:-1800, ease:"back"}, "+=.5");
    wwwTL.to(".www-p2 .port-4", {opacity:0}, "-=.5");
    wwwTL.to(".www-p2", {opacity:1}, "+=.5");
    
    wwwTL.from(".sec-www .www-p3", {top:"100%", bottom:"-100%", duration:.3});
    wwwTL.to(".sec-www .www-p2", {top:"-100%", bottom: "100%", opacity:.5}, "-=.5");
    
    //find light background
    wwwTL.to("#wrapper", { className: "light-bg"}, "-=.2");
    
    wwwTL.from(".www-p3 .title", {opacity:0}, "-=.2");
    wwwTL.to(".www-p3 .title span", {opacity:1});
    wwwTL.to(".www-p3 .title", {fontSize:"2vw"}, "-=.5");
    wwwTL.from(".www-p3 .desc", {fontSize:"20px", opacity:0, top:100}, "-=.5");
    wwwTL.to(".www-p3 .desc", {fontSize:"20px"}, "-=.5");
    wwwTL.from(".www-p3 .wquote", {opacity:0, duration:.3});
    

    wwwTL.to(".sec-www .www-p3", {top:"-20%", bottom:"20%"});
    wwwTL.to(".sec-www .www-p1", {height:"65vh"}, "-=.5");
    wwwTL.to(".sec-www .www-p4", {top:"75%", duration:.1}, "-=.5");
    wwwTL.from(".sec-www .wright hr", {opacity:0, x:-200}, "-=.5");
    
    wwwTL.to(".sec-www .www-p3", {top:"-90%", bottom:"90%"}, "+=.2");
    wwwTL.to(".sec-www .www-p1", {y:"-65vh"}, "-=.5");
    
    wwwTL.to(".sec-www .wright hr", {y:360}, "-=.5");
    wwwTL.to(".sec-www .www-p4", {top:"10%"}, "-=.5");
    wwwTL.to(".sec-www .www-p3", {top:"-100%", bottom:"0"});
    wwwTL.to(".sec-www .www-p4", {top:"0"}, "-=.5");

    //find dark background
    wwwTL.to("#wrapper", { className: "dark-bg"});
    
    let featTL = gsap.timeline({
       scrollTrigger: {
          trigger: ".sec-featin",
          pin: true,
          start: "top top",
          end: "120% top",
          scrub: 1
       }
    });
    
    //find dark background
    featTL.to("#wrapper", { className: "dark-bg"});

    featTL.from(".sr-t1", {opacity:0, y: -50});
    
    let servTL = gsap.timeline({
       scrollTrigger: {
          trigger: ".sec-services",
          pin: true,
          start: "top top",
          end: "100% top",
          scrub: 1,
          //markers: true
       }
    });

    //remove class
    servTL.to("#wrapper", { className: ""});
    
    servTL.from(".sr-t2 hr.red", {left: -200, bottom: -300, duration:.1});
    servTL.from(".sr-t2 .sr-h2", {left: -100, top: 100, opacity:0, duration:.2});
    servTL.from(".sr-t2 .sr-do", {opacity:0, scale:.8, ease: "back", duration:.1});
    servTL.from(".sr-t2 .sr-m", {top:-100, opacity:0, duration:.2});
    servTL.from(".sr-t2 .sr-b", {left:300, opacity:0, duration:.2, ease:"back"}, "-=.2");
    servTL.from(".sr-t2 .sr-n", {top:100, opacity:0, duration:.2}, "-=.2");
    servTL.to(".sr-t2 .sr-mbn span", {opacity:1});
    servTL.from(".sr-t2 hr.grey", {opacity:0, right: 0, x:60, y: -140}, "-=.5");
    
    servTL.from(".sr-t2 .btn-custom", {opacity:0}, "-=.5");
    servTL.from(".sr-menu", {opacity:0}, "-=.5");
    servTL.from(".sr-menu ul", {y:20}, "-=.1");

    //Hide Header on scroll
    let hideHeader = gsap.timeline({
       scrollTrigger: {
          trigger: ".sr-menu",
          start: "bottom top",
          end: "+=105 top",
          scrub: 1
       }
    });
    hideHeader.to(".hsnav-s7", {top:-105});

    //Hide Scroller on scroll
    let scrollerTL = gsap.timeline({
       scrollTrigger: {
          trigger: "#footer",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
       }
    });
    scrollerTL.to(".scroll", {opacity:0, bottom:-250});
    
 },


 // Media Query 
 // Moble ======================================================
 "(max-width: 767px)": function() {

    let scrollTL = gsap.timeline({
       scrollTrigger: {
          trigger: ".start-intro",
          pin: true,
          start: "top top",
          end: "400% top",
          scrub: 1,
          //markers: true,
          //endTrigger: ".start-mojo",
          //toggleActions: "restart pause resume pause"
       }
    });
    
    scrollTL.to(".scroll .circle .big", {scale:1});
    scrollTL.to(".si-wrap", {opacity:0});
    scrollTL.to(".start-side, .si-image", {opacity:1});
    scrollTL.to(".scroll .line", {height:40});
    scrollTL.to(".start-side", {opacity:1}, "-=.5");
    scrollTL.to(".si-image", {scale:0});
    scrollTL.to(".start-side .text li", {fontSize:"24", padding:"3px 0"}, "-=.5");
    scrollTL.to(".start-side .link", {position:"absolute", right:0, top:15}, "-=.5");
    scrollTL.to(".start-side", {top:80}, "-=.5");
    scrollTL.to(".start-side .ss-h6", {top:-100, opacity:0, visibility: "hidden"}, "-=.5");
    scrollTL.from(".si-copy", {opacity:0}, "-=.3");
    
    scrollTL.to(".scroll .line", {height:75});
    scrollTL.to(".scroll .circle .big", {scale:1}, "-=.2");

    scrollTL.to(".scroll .line", {height:30});
    scrollTL.to(".scroll .circle .big", {scale:0.1}, "-=.2");
    
    scrollTL.to(".si-copy", {duration:.5, top:"-50%"}, "-=.4");
    scrollTL.from(".si-roi", {duration:.5, top:"100%"}, "-=.4");
    scrollTL.to(".si-copy", {opacity:0}, "-=.4");
    
    scrollTL.to(".scroll .line", {height:75});     
    scrollTL.to(".start-side ", {opacity:0, zIndex:-1}); 
    
    
    let markTL = gsap.timeline({
       scrollTrigger: {
          trigger: ".sec-marketers",
          pin: true,
          start: "top top",
          end: "200% top",
          scrub: 1,
          //markers: true
       }
    });
    
    //find dark background
    markTL.to("#wrapper", { className: "dark-bg"}, "-=1");
    
    markTL.from(".sec-marketers .title", {opacity:0, duration:.2}, "-=1");
    markTL.from(".sec-marketers .body", {ease: "back", y: 300, opacity:0});
    markTL.to(".sec-marketers .title", {fontSize:24}, "-=.5");
    markTL.from(".sec-marketers .team", {ease: "back", y: 300, opacity:0}, "-=.4" );
    
    markTL.to(".sec-marketers .sm-bg1", {opacity:0}, "+=.5");
    markTL.to(".sec-marketers .sm-bg2", {opacity:0}, "+=.5");
    //markTL.to(".sec-marketers .sm-bg3", {opacity:0} );
    
    let wwwTL = gsap.timeline({
       scrollTrigger: {
          trigger: ".www-mob1",
          pin: true,
          start: "top top",
          end: "400% top",
          scrub: 1
       }
    });

    //find dark background
    wwwTL.to("#wrapper", { className: "dark-bg"});

    wwwTL.from(".sec-www .bg", {scale:1.2, transformOrigin:"center"});
    wwwTL.from(".sec-www .tp1-w .w2", {marginLeft:0, duration:.5}, "-=.2");
    wwwTL.from(".sec-www .tp1-w .w3", {marginLeft:0, duration:.5}, "-=.5");
    wwwTL.from(".sec-www .tp1-h", {opacity:0});
    wwwTL.to(".sec-www .tp1-wrap", {transform: "scale(.4)",  top: 140});
    wwwTL.to(".sec-www .bg", {scale:1.2}, "-=.5");
    wwwTL.from(".sec-www .tp1-h a", {height:110, width:110, lineHeight:"110px", duration:.2}, "-=.5");
    wwwTL.to(".sec-www .bg", {scale:1}, "-=.5");
    wwwTL.to(".sec-www .www-p1", {height:180, zIndex:1});
    
    
    //Portfolio
    wwwTL.from(".www-p2 .port-1", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.5");
    wwwTL.from(".www-p2 .port-2", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.4");
    wwwTL.from(".www-p2 .port-3", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.4");
    wwwTL.from(".www-p2 .port-4", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.4");
    wwwTL.from(".www-p2 .port-5", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.4");
    
    wwwTL.to(".www-p2 .port-wrap ul", {x:-290, ease:"back"}, "+=.5");
    wwwTL.to(".www-p2 .port-1", {opacity:0}, "-=.5");
    wwwTL.to(".www-p2 .port-wrap ul", {x:-580, ease:"back"}, "+=.5");
    wwwTL.to(".www-p2 .port-2", {opacity:0}, "-=.5");
    wwwTL.to(".www-p2 .port-wrap ul", {x:-870, ease:"back"}, "+=.5");
    wwwTL.to(".www-p2 .port-3", {opacity:0}, "-=.5");
    wwwTL.to(".www-p2 .port-wrap ul", {x:-1160, ease:"back"}, "+=.5");
    wwwTL.to(".www-p2 .port-4", {opacity:0}, "-=.5");
    wwwTL.to(".www-p2", {opacity:1});


    let txtRevTL = gsap.timeline({
       scrollTrigger: {
          trigger: ".www-p3",
          pin: true,
          start: "top top",
          end: "100% top",
          scrub: 1
       }
    });
    txtRevTL.to("#wrapper", { className: ""});
    txtRevTL.to("#wrapper", { className: "light-bg"}, "-=.5");

    txtRevTL.from(".www-p3 .title", {fontSize:60});
    txtRevTL.from(".www-p3 .desc", {opacity:0, y:50}, "-=.3");
    txtRevTL.from(".www-p3 .wright", {opacity:0, y:50}, "-=.2");
    

    let vidRevTL = gsap.timeline({
       scrollTrigger: {
          trigger: ".www-p4",
          pin: true,
          start: "top top",
          end: "bottom top",
          scrub: 1
       }
    });
    vidRevTL.to("#wrapper", { className: "dark-bg"});

    
    let featTL = gsap.timeline({
       scrollTrigger: {
          trigger: ".sec-featin",
          pin: true,
          start: "top top",
          end: "80% top",
          scrub: 1
       }
    });
    
    //find dark background
    featTL.to("#wrapper", { className: "dark-bg"});

    featTL.from(".sr-t2 .sr-h2", {left: -100, top: 100, opacity:0, duration:.2});
    
    let servTL = gsap.timeline({
       scrollTrigger: {
          trigger: ".sec-services",
          pin: true,
          start: "top top",
          end: "100% top",
          scrub: 1,
          //markers: true
       }
    });

    // Remove class
    servTL.to("#wrapper", { className: ""}, "-=.5");
    
    servTL.from(".sr-t2 .sr-do", {opacity:0, scale:.8, ease: "back", duration:.1}, "-=.5");
    servTL.from(".sr-t2 .sr-m", {top:-100, opacity:0, duration:.2});
    servTL.from(".sr-t2 .sr-b", {left:300, opacity:0, duration:.2, ease:"back"}, "-=.2");
    servTL.from(".sr-t2 .sr-n", {top:100, opacity:0, duration:.2}, "-=.2");
    servTL.to(".sr-t2 .sr-mbn span", {opacity:1});
    servTL.from(".sr-t1", {opacity:0, y: -50});
    servTL.from(".sr-menu", {opacity:0}, "-=.5");
    servTL.from(".sr-menu ul", {y:20}, "-=.1");

    //Hide Header on scroll
    let hideHeader = gsap.timeline({
       scrollTrigger: {
          trigger: ".sr-menu",
          start: "bottom top",
          end: "+=105 top",
          scrub: 1
       }
    });
    hideHeader.to(".hsnav-s7", {top:-105});

    //Hide Scroller on scroll
    let scrollerTL = gsap.timeline({
       scrollTrigger: {
          trigger: "#footer",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
       }
    });
    scrollerTL.to(".scroll", {opacity:0, bottom:-250});
    
 }