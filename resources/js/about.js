
//Plugins
gsap.registerPlugin(ScrollTrigger);

//Intro 
let introTL = gsap.timeline();

introTL.from(".about-intro .bg1", {duration:2, opacity:0, scale:.5 });
introTL.from(".hsnav-s7", {duration:.5, opacity:0, top:-100});
introTL.from(".intro-1 .i1b", {duration:1, opacity:0}, "-=.5");
introTL.from(".intro-1 .i1a", {duration:.6, opacity:0}, "-=.5");

introTL.from(".intro-1 .i1b", {duration:.5, top:'-30vh'}, "-=.8");
introTL.from(".intro-1 .i1a", {duration:.5, top:'-30vh'}, "-=.6");
introTL.from(".intro-1 .i1c", {duration:1, bottom:'-50vh'}, "-=.8");
introTL.from(".iscroll", {duration:.5, bottom:'-30vh'}, "-=.3");
introTL.to(".about-intro .bg1", {duration:1, scale:1.1 }, "-=1");


ScrollTrigger.matchMedia({ 
   
   // Media Query 
   // Desktop ======================================================
   "(min-width: 1024px)": function() {
      
      let scrollTL = gsap.timeline({
         scrollTrigger: {
            trigger: ".about-intro",
            pin: true,
            start: "top top",
            end: "110% top",
            scrub: 1,
            //markers: true,
            pinSpacing: false
         }
      });
      
      scrollTL.to(".intro-bg", {marginTop:'-60vh'});
      scrollTL.to(".intro-1 .middle", {duration:.5, top:'-30vh', opacity:0}, "-=.5");
      scrollTL.to(".intro-1 .i1a", {duration:.5, marginBottom:'10vh'}, "-=.5");
      scrollTL.to(".intro-1 .i1c", {duration:.5, marginTop:'20vh'}, "-=.5");
      scrollTL.to(".iscroll", {duration:1, marginBottom:'-30vh'}, "-=.5");

      //scrollTL.from(".intro-1 .i1d", {duration:.5, top:'-10%', opacity:0}, "-=.2");
      scrollTL.to(".hsnav-s7", {duration:1, marginTop:"-15vh"}, "-=.5");
      scrollTL.from(".intro-2 .i2a", {duration:.3, top:0, opacity:0}, "-=.5");
      scrollTL.to(".intro-bg", {duration:.5,marginTop:'-90vh'});
      //scrollTL.to(".intro-1 .i1d", {duration:1, top:'5%'}, "-=.2");
      scrollTL.to(".intro-2 .i2a", {duration:.5, top:'5%'}, "-=.2");
      scrollTL.to(".intro-bg", {marginTop:'-110vh'}, "-=.5");

      scrollTL.from(".intro-2 .i2b", {duration:.5, top:'90%', opacity:0}, "-=.5");
      

      scrollTL.to(".intro-bg", {marginTop:'-150vh'});
      scrollTL.to(".intro-2", {marginTop:'-200'}, "-=.5");
      scrollTL.to(".intro-2 .i2a", {opacity:0}, "-=.4");

      scrollTL.to(".intro-bg", {marginTop:'-160vh'});
      scrollTL.from(".intro-3", {duration:.5, opacity:0}, "-=.5");
      scrollTL.from(".intro-3 .i3a", {duration:.5, bottom: -10}, "-=.5");
      scrollTL.from(".intro-3 .i3b", {duration:.8, bottom: -100}, "-=.5");
      scrollTL.from(".intro-3 .i3c", {duration:.5, bottom: -100}, "-=.5");

      scrollTL.to(".intro-bg", {marginTop:'-170vh'});

      scrollTL.to(".about-mbn", {opacity:1}, "-=.2");
      scrollTL.to(".about-intro", {opacity:0, top:'-30vh', zIndex:-3});
      scrollTL.from(".about-mbn", {duration:.5, scale: .8}, "-=.5");
      scrollTL.to(".about-owner", {duration:.5, opacity: 1});

      scrollTL.to(".about-mbn", {scale: 15, opacity:0 },"-=.3");
      //scrollTL.to(".about-mbn", {visibility:'hidden'});
      //scrollTL.to(".about-owner", {marginTop:0});
      
      scrollTL.to(".about-owner .sense", {opacity:1}, "-=.2");
      scrollTL.from(".about-owner .sense .circles .c1", {duration:.5, width:2, height:2}, "-=.5");
      scrollTL.from(".about-owner .sense .sm1", {duration:.5, top:"50px"}, "-=.5");
      scrollTL.from(".about-owner .sense .sm1 span", {duration:.3, position:"relative", top:"150px"}, "-=.5");
      
      
      let scrollTL2 = gsap.timeline({
         scrollTrigger: {
            trigger: ".about-owner",
            pin: true,
            start: "top top",
            end: "1000% -100%",
            scrub: 1,
            //markers: true,
            //horizontal: true
         }
      });
      scrollTL2.to(".about-owner", {opacity:1});
     // scrollTL2.set(".about-owner .sense .circles .c1", {duration:.5, width:"24vw", height:"24vw"}, "-=.5");
      scrollTL2.to(".about-owner .sense .circles .c1", {duration:.5, width:"24vw", height:"24vw"}, "-=.5");
      // //scrollTL.from(".about-owner .sense", {duration:.5, opacity:0}, "-=2");
      // scrollTL2.from(".about-owner .sense .circles .c1", {duration:.5, width:2, height:2}, "-=1");
      // scrollTL2.from(".about-owner .sense .sm1", {duration:.5, top:"50px"}, "-=.5");
      // scrollTL2.from(".about-owner .sense .sm1 span", {duration:.3, position:"relative", top:"150px"}, "-=.5");

      //scrollTL2.to(".ao-sense", {marginLeft:'-30vw'});
      scrollTL2.to(".about-owner", {x:"-35vw"});
      scrollTL2.to(".about-owner .sense .circles .c1", {duration:.5, width:"44vw", height:"44vw"}, "-=.5");
      scrollTL2.from(".about-owner .sense .sm2", {duration:.5, top:"250px", left:"-5vw", opacity:0}, "-=.5");
      scrollTL2.from(".about-owner .ao-hline", {marginLeft:"-2.5vw"}, "-=.2");
      scrollTL2.to(".about-owner .sense .circles .c2", {duration:.5, opacity:1, left: "-45vw", top: "-45vw", right: "-45vw", bottom: "-45vw", marginLeft:0}, "-=.5");

      scrollTL2.from(".about-owner .ao-hline", {opacity:0}, "-=.3");

      scrollTL2.to(".about-owner .ao-hline .hr", {duration:.5, width:"50vw"}, "-=.2");
      scrollTL2.from(".about-owner .ao-hline .c1", {width:0, height:0}, "-=.3");


      //scrollTL2.to(".about-owner", {opacity:1}, "+=.2"); //delay

      //scrollTL2.to(".ao-sense", {marginLeft:'-58vw'});
      scrollTL2.to(".about-owner", {x:"-64vw"});
      scrollTL2.to(".about-owner .sense .circles .c1", {opacity:0}, "-=.5");
      //scrollTL2.to(".about-owner .ao-hline", {left:"25vw", width:"100vw"}, "-=.5");
      scrollTL2.to(".about-owner .ao-hline .hr", {width:"205vw", className: "hr end"}, "-=.5");
      
      //scrollTL2.to(".ao-social", {marginLeft:'-30vw'}, "-=.5");
      //scrollTL2.to(".about-owner", {left:"-30vw"});


      scrollTL2.from(".about-owner .social", {opacity:0}, "-=.5");
      scrollTL2.from(".about-owner .social h4", {marginLeft:"-50vw"}, "-=.5");
      
      scrollTL2.from(".about-owner .social .icons .i1", {left:"20%", top:"25%"}, "-=.5");
      scrollTL2.from(".about-owner .social .icons .i3", {left:"60%", top:"35%"}, "-=.5");
      scrollTL2.from(".about-owner .social .icons .i4", {left:"90%", top:"40%"}, "-=.5");
      scrollTL2.from(".about-owner .social .icons .i7", {left:"70%", top:"30%"}, "-=.5");
      scrollTL2.from(".about-owner .social .icons .i8", {left:"50%", top:"60%"}, "-=.5");
      scrollTL2.from(".about-owner .social .icons .i10", {left:"15%", top:"80%"}, "-=.5");
      scrollTL2.from(".about-owner .social .icons .i13", {left:"50%", top:"90%"}, "-=.5");
      scrollTL2.from(".about-owner .social .icons .i15", {left:"90%", top:"50%"}, "-=.5");
      

      scrollTL2.to(".about-owner", {opacity:1});
      scrollTL2.to(".about-owner", {x:"-130vw"});
      scrollTL2.from(".about-owner .creative", {duration:.5, opacity:0});
      scrollTL2.from(".about-owner .creative .circle", {opacity:.5, width:"60vw", height:"60vw"}, "-=.3");
      scrollTL2.from(".about-owner .creative .chess .c1", {left:-160}, "-=.5");
      scrollTL2.from(".about-owner .creative .chess .c2", {left:-150}, "-=.5");
      scrollTL2.from(".about-owner .creative .chess .c3", {left:-140}, "-=.5");
      scrollTL2.from(".about-owner .creative .chess .c4", {right:-160}, "-=.5");
      scrollTL2.from(".about-owner .creative .chess .c5", {right:-140}, "-=.5");
      scrollTL2.from(".about-owner .creative .hgroup", {bottom:"65%"}, "-=.5");
      scrollTL2.from(".about-owner .creative .sets hr", {width:0}, "-=.5");

      scrollTL2.to(".about-owner .creative", {opacity:1});
    
      scrollTL2.from(".about-owner .creative .crown", {top:"-80px", opacity:0});
      scrollTL2.to(".about-owner .creative .sets hr", {opacity:0}, "-=.5");
      scrollTL2.to(".about-owner .creative .hgroup", {scale:.5, right:"50%"}, "-=.5");
      scrollTL2.to(".about-owner .creative .copy", {opacity:1}, "-=.5");
      scrollTL2.from(".about-owner .creative .copy", {marginTop:20}, "-=.5");
      scrollTL2.from(".about-owner .creative .copy h2", {position:"relative", top:-100}, "-=.5");
      scrollTL2.to(".about-owner .creative .sets .sw", {opacity:0}, "-=.5");
      scrollTL2.to(".about-owner .creative .sets .sr", {opacity:1}, "-=.7");
      scrollTL2.to(".about-owner .creative .icons", {marginLeft:-25}, "-=.5");
      scrollTL2.to(".about-owner .creative .hgroup", {opacity:.5}, "-=.5");

      scrollTL2.to(".about-owner", {opacity:1}, "+=.5");

       scrollTL2.to(".about-owner", {x:"-180vw"});
       scrollTL2.to(".about-owner .creative .icons", {marginLeft:"-70%"}, "-=.5");

       scrollTL2.from(".about-owner .path-arrows .arrow-1", {top:"100%"}, "-=.5");
       scrollTL2.from(".about-owner .path-arrows .arrow-2", {top:"100%"}, "-=.4");
       scrollTL2.from(".about-owner .path-arrows .arrow-3", {top:"100%"}, "-=.4");
       scrollTL2.from(".about-owner .path-arrows .arrow-4", {top:"100%"}, "-=.4");
       scrollTL2.from(".about-owner .path-arrows .arrow-5", {top:"100%"}, "-=.4");
       scrollTL2.from(".about-owner .path-arrows .arrow-6", {top:"100%"}, "-=.4");

       scrollTL2.from(".about-owner .path-arrows .arrow-0", {top:"100%"});
       scrollTL2.to(".about-owner .path-arrows .arrow-1", {top:0}, "-=.5");
       scrollTL2.to(".about-owner .path-arrows .arrow-2", {top:"36%"}, "-=.5");
       scrollTL2.to(".about-owner .path-arrows .arrow-3", {top:"48%"}, "-=.5");
       scrollTL2.to(".about-owner .path-arrows .arrow-4", {top:"55%"}, "-=.5");
       scrollTL2.to(".about-owner .path-arrows .arrow-5", {top:"65%", left:"-4%"}, "-=.5");
       scrollTL2.to(".about-owner .path-arrows .arrow-6", {top:"22%", right:"6%"}, "-=.5");
       
       //scrollTL2.to(".about-owner .path-arrows", {opacity:1});

       scrollTL2.to(".about-owner", {x:"-218vw"}, "-=.5");
       scrollTL2.from(".about-owner .roi h5", {position:"relative", top:"60", opacity:0}, "-=.2");
       scrollTL2.to(".about-owner .ao-hline .hr", {width:"200vw"}, "-=.5");
       scrollTL2.to(".about-owner .creative", {opacity:.3}, "-=.5");
       

       //scrollTL2.to(".about-owner", {opacity:1}, "+=1"); //delay

       
       scrollTL2.to(".about-owner", {x:"-320vw"});
       //scrollTL2.to(".business .ab-t2 hr.red", {opacity:1}, "-=.5");
       

       scrollTL2.to(".about-owner", {opacity:1}, "+=.5"); //delay

      
      scrollTL2.to(".about-owner", {duration:.1, marginTop:"-38vh"});
      
      scrollTL2.to(".about-owner", {opacity:1}, "+=1"); //delay

   },

   "(max-width: 1023px)": function() {
      
      let mobIntro1 = gsap.timeline({
         scrollTrigger: {
            trigger: ".intro-1 .middle",
            start:"0% 20%",
            end:"100% 100%",
            scrub: 1,
            //markers: true
         }
      });
      mobIntro1.to('.intro-1', {opacity:0});
      mobIntro1.to('.iscroll', {bottom:-105});

      
      let mobIntro2 = gsap.timeline({
         scrollTrigger: {
            trigger: ".intro-2",
            start:"0% 70%",
            end:"100% 100%",
            scrub: 1,
            //markers: true
         }
      });
      mobIntro2.from('.intro-2', {opacity:0, top:100});

      
      let mobIntro3 = gsap.timeline({
         scrollTrigger: {
            trigger: ".intro-3",
            start:"0% 70%",
            end:"100% 100%",
            scrub: 1,
            //markers: true
         }
      });
      mobIntro3.from('.intro-3', {opacity:0, top:100});


      let mobSense = gsap.timeline({
         scrollTrigger: {
            trigger: ".sense",
            start:"0% 50%",
            end:"100% 100%",
            scrub: 1,
            //markers: true
         }
      });
      mobSense.from('.sense', {opacity:0, top:100, position:"relative"});
      

      let mobSocial = gsap.timeline({
         scrollTrigger: {
            trigger: ".ao-social",
            start:"0% 40%",
            end:"100% 100%",
            scrub: 1,
            //markers: true
         }
      });
      mobSocial.from('.social', {opacity:0, top:100, position:"relative"});

      
      let mobCreative = gsap.timeline({
         scrollTrigger: {
            trigger: ".ao-creative",
            start:"0% 30%",
            end:"100% 100%",
            scrub: 1,
            //markers: true
         }
      });
      mobCreative.from('.creative', {opacity:0, top:100, position:"relative"});
      mobCreative.to('.creative .sets .sr', {opacity:1});
      mobCreative.to('.creative .sets .sw', {opacity:0});
      mobCreative.from('.creative .copy p', {opacity:0});

      
      let mobRoi = gsap.timeline({
         scrollTrigger: {
            trigger: ".ao-roi",
            start:"0% 40%",
            end:"100% 100%",
            scrub: 1,
            //markers: true
         }
      });
      mobRoi.from('.roi', {opacity:0, top:100, position:"relative"});
      mobRoi.from('.roi h2', {opacity:0});
      mobRoi.from('.roi h5', {opacity:0});

      
      let mobBusiness = gsap.timeline({
         scrollTrigger: {
            trigger: ".ao-business",
            start:"0% 30%",
            end:"100% 100%",
            scrub: 1,
            //markers: true
         }
      });
      mobBusiness.from('.business', {opacity:0, top:100, position:"relative"});
      
   }

});


jQuery('html,body').animate({
   scrollTop: jQuery("body").offset().top
}, 500);  

