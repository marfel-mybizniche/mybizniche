
//Plugins
gsap.registerPlugin(ScrollTrigger);
//gsap.registerPlugin(ScrollToPlugin);


//Intro 
let introTL = gsap.timeline();

if (sessionStorage.getItem('animate') == null){
   
   introTL.set("body", {className:"+=intro-active"});
   //----
   introTL.to(".in-1", { duration:1.5, height:0}, "+=1");
   
   introTL.to(".in-2", { duration:1, opacity:1}, "-=1");
   introTL.from(".in-info", { duration:1, scale:2}, "-=1");
   introTL.to(".in-logo", { duration:.5, marginTop:-40, opacity:1});
   
   introTL.to(".in-logo", { duration:1, marginLeft:100, opacity:0, ease:"back"}, "+=.5");
   introTL.to(".in-3", { duration:1, opacity:1}, "-=1");
   introTL.from(".in-3a", { duration:1, x:-100, rotation:-20, transformOrigin:"left"}, "-=1");
   introTL.to(".in-info .ii-1", { duration:1, left:104, color:"red"}, "-=1");
   introTL.to(".in-info .ii-2", { duration:1, left:239, color:"red"}, "-=1");
   introTL.to(".in-info .ii-3", { duration:1, left:260, color:"red"}, "-=1");
   introTL.to(".in-info .ii-4", { duration:1, opacity:0}, "-=.5");
   
   introTL.to(".in-5", { duration:1, opacity:1});
   introTL.from(".in-5a", { duration:1, top:-40, opacity:0}, "-=1");
   introTL.from(".in-5b", { duration:1, top:-40, opacity:0}, "-=1.5");
   introTL.to(".in-4", { duration:1, opacity:1}, "-=1");
   
   introTL.to(".in-5", { duration:1, opacity:0, scale:0, marginTop:100});
   
   introTL.to(".in-6", { duration:.5, opacity:1, scale:1, marginTop:0}, "-=1");
   introTL.to(".in-6b", { duration:.5, opacity:0, marginTop:-20, marginLeft:-20});
   introTL.to(".in-6c", { duration:.5, opacity:0, marginTop:-20, marginRight:-20}, "-=.5");
   introTL.to(".in-6d", { duration:.5, opacity:0, marginBottom:-20, marginLeft:-20}, "-=.5");
   introTL.to(".in-6a", { duration:.5, opacity:0, marginTop:10, scale:0}, "-=.5");
   
   introTL.fromTo(".in-7", { duration:1, opacity:0, scale:0}, { duration:.5, opacity:1, scale:1}, "-=.5");
   
   introTL.to(".in-7b", { duration:.5, opacity:0}, "+=.5");
   introTL.to(".in-7c", { duration:.5, opacity:0}, "-=.5");
   introTL.to(".in-7a", { duration:.5, opacity:0}, "-=.5");
   
   introTL.to(".in-8a", { duration:.5, opacity:1}, "-=.5");
   introTL.to(".in-8b", { duration:.5, opacity:1, rotation:180}, "-=.5");
   //----------
   
   introTL.from(".navlogo .abr", { duration:.5, top:-100, opacity:0});
   introTL.from(".navlogo .alt", { duration:.5, top:500, opacity:0}, "-=.5");
   
   introTL.to(".in-2, .in-3, .in-4, .in-8", { duration:1, opacity:0, scale:0}, "-=.5");
   introTL.to("#intro", { duration:.5, opacity:0, visibility:"hidden"}, "-=.5");
   
   introTL.from(".si-h6 span", {duration:.5, opacity:0});
   introTL.from(".si-h1 .si-1m", {duration:.5, opacity:0});
   introTL.from(".si-h1 .si-1b", {duration:.5, opacity:0});
   introTL.from(".si-h1 .si-1n", {duration:.5, opacity:0});
   introTL.from(".si-h1 .si-2a b, .si-h1 .si-2b i", {duration:.5, opacity:0});
   introTL.from(".si-p span", {duration:.5, opacity:0, top:100});
   
   introTL.set("body", {className:"+=home"}, "-=.5");

   introTL.from(".scroll", {bottom:-220, ease: "back"}, "-=.5");
   introTL.from(".scroll .circle .big", {opacity:0, width:10, height:10}, "-=.5");

   sessionStorage.setItem('animate', 'true');

} else {

   introTL.pause();
   introTL.play("#intro");
   introTL.to("#intro", { duration:.5, opacity:0, visibility:"hidden"});
   introTL.from(".navlogo", {opacity:0});
   introTL.from(".si-h6 span", {duration:.5, opacity:0});
   introTL.from(".si-h1 .si-1m", {duration:.5, opacity:0});
   introTL.from(".si-h1 .si-1b", {duration:.5, opacity:0});
   introTL.from(".si-h1 .si-1n", {duration:.5, opacity:0});
   introTL.from(".si-h1 .si-2a b, .si-h1 .si-2b i", {duration:.5, opacity:0});
   introTL.from(".si-p span", {duration:.5, opacity:0, top:100});

   introTL.from(".scroll", {bottom:-220, ease: "back"}, "-=.5");
   introTL.from(".scroll .circle .big", {opacity:0, width:10, height:10}, "-=.5");

   jQuery('html,body').animate({
      scrollTop: jQuery("body").offset().top
   }, 500);  

}


const sections = document.querySelectorAll(".panel");

function goToSection(section, anim) {
      gsap.to(window, {
         scrollTo: {y: section, autoKill: false},
         duration: 1.2
      });
      anim && anim.restart();
}
sections.forEach(section => {
   ScrollTrigger.create({
      trigger: section,
      start: "top 99%",
      end: "bottom top",
      //scrub: 5,
      onEnter: () => goToSection(section),
      onEnterBack: () => goToSection(section)
   });
});


ScrollTrigger.matchMedia({ 
   
   // Media Query 
   // Desktop ======================================================
   "(min-width: 1024px)": function() {
    
      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-start .trigger-1",
            onEnter() {
               introMbnPlay.pause(0);
             },
             onEnterBack() {
               introMbnPlay.pause(0);
             }
         }
      });

      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-start .trigger-2",
            onEnter() {
               introMbnPlay.pause(0);
               introMbnPlay.play();
             },
             onEnterBack() {
               //introMbnPlay.pause(0);
               introRoiTL.pause(0);
             }
         }
      });
      let introMbnPlay = gsap.timeline({paused: true});
      
      introMbnPlay.to(".si-2a, .si-2b, .si-p", {opacity:0}, "-=1");     
      introMbnPlay.to(".si-1m", {top:0}, "-=1");
      introMbnPlay.to(".si-1b", {top:0, left:"-12.15vw"}, "-=1");
      //introMbnPlay.to(".si-1n", {left:"-23.4vw", bottom:"-14vh"}, "-=1");
      introMbnPlay.to(".si-1n", {left:"-23.4vw", y:"100%"}, "-=1");
      introMbnPlay.to(".si-h6", {opacity:0}, "-=1");
      introMbnPlay.to(".start-side", {opacity:1}, "-=.5");
      introMbnPlay.to(".si-h1", {opacity:0, visibility:"hidden"}, "-=.5");

      introMbnPlay.to(".scroll .line", {height:20}, "-=.5");
      introMbnPlay.to(".scroll .circle .big", {scale:0.1}, "-=.5");
      
      introMbnPlay.to(".start-side .text li", {fontSize:"3.5vw"}, "+=.5");
      introMbnPlay.from(".si-copy p", {opacity:0, marginTop:50}, "-=.5");
      introMbnPlay.from(".si-copy h2", {opacity:0, position:"relative", top: 100, display: "none"}, "-=.4");

      introMbnPlay.to(".start-side", {top:"21%"}, "-=.5");

      introMbnPlay.to(".si-copy", {top:"20%"}, "-=.5");
      introMbnPlay.from(".si-copy h3", {opacity:0, position:"relative", top: 50, display: "none"}, "-=.3");

      introMbnPlay.to(".start-side .link", {opacity:1}, "-=.2");
      introMbnPlay.from(".start-side .link", {marginTop:100}, "-=.5");
      introMbnPlay.to(".scroll .line", {height:120});

      gsap.timeline({
         //paused: true,
         scrollTrigger: {
            trigger: ".sec-start .trigger-3",
            onEnter() {
               gsap.timeline().to("#wrapper", { className: "light-bg"});
               introRoiTL.pause(0);
               introRoiTL.play();
             },
             onEnterBack() {
               gsap.timeline().to("#wrapper", { className: "light-bg"});
              // introRoiTL.pause(0);
               wwwMarketTL.pause(0);
               gsap.timeline().from(".si-roi", { opacity: 0}, "+=.5");
               playWork.pause(0);   
               
             }
         }
      });
      
      let introRoiTL = gsap.timeline({paused: true});
      
      introRoiTL.to(".si-ball", {duration:1, y:"100vh"});
      introRoiTL.to(".si-copy", {duration:.5, opacity:0}, "-=1");
      introRoiTL.from(".roi-bot", {bottom:-500}, "-=1");
      introRoiTL.from(".si-hat .sih-i1", {opacity:0, duration:1, y:100, ease: "back"}, "-=.5");
      introRoiTL.to(".si-ball", {duration:.5, y:"100vh"}, "-=.5");
      introRoiTL.to(".si-copy p, .si-copy h2", {opacity:0}, "-=.5");
      introRoiTL.to(".si-hat .sih-i1", {opacity:0}, "-=.5");

      introRoiTL.to(".scroll .line", {height:180}, "-=.5");
      introRoiTL.to(".scroll .circle .big", {scale:1}, "-=.2");

      introRoiTL.from(".si-roi .rb1", {duration:.2, height:0}, "-=.2");
      introRoiTL.from(".si-roi .rb2", {duration:.2, height:0});
      introRoiTL.from(".si-roi .rb3", {duration:.2, height:0});
      introRoiTL.to(".si-copy", {duration:.5, top:"-50%"}, "-=.4");
      introRoiTL.from(".your-roi", {duration:1, top:100}, "-=.5");
      introRoiTL.from(".roi-hat .rh1", {opacity:0}, "-=.4");
      introRoiTL.from(".si-roi .glitz", {duration:.2, opacity:0}, "-=.4");  
      introRoiTL.to(".roi-hat .rh1", {bottom:-20}, "-=.4");
      introRoiTL.to(".scroll .line", {height:40});
      introRoiTL.to(".scroll .circle .big", {scale:0.1}, "-=.2");
      introRoiTL.to(".your-roi .glitz", {opacity:0}, "-=.3");



      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-marketers",
            onEnter() {
               gsap.timeline().to("#wrapper", {className: "dark-bg"}, "+=.5");
               wwwMarketTL.pause(0);
               wwwMarketTL.play();
            },
            onEnterBack() {
               gsap.timeline().to("#wrapper", {className: "dark-bg"}, "+=.5");
              // wwwMarketTL.pause(0);
               //playWork.pause(0);   
            },
         }
      });

      let wwwMarketTL = gsap.timeline({paused: true});
      wwwMarketTL.to(".start-intro", {opacity:0}, "-=1");
      wwwMarketTL.to(".start-side .text li span", {opacity:0}, "-=1");
      wwwMarketTL.to(".start-side .link", {top:-600, opacity:0}, "-=.8");
      wwwMarketTL.to(".start-side .text .tn", {fontSize:"3.5vw", top:"-3.5vw", left:"5vw"}, "-=.5");
      wwwMarketTL.to(".start-side .text .tm", {fontSize:"3.5vw"}, "-=.5");
      wwwMarketTL.to(".start-side .text .tb", {fontSize:"3.5vw"}, "-=.5");
      wwwMarketTL.to(".start-side ", {top: "21vh"}, "+=.5");

      wwwMarketTL.from(".sec-marketers .title", {opacity:0}, "=-1");
      wwwMarketTL.to(".start-side", {display: "none"}, "-=.5");
      wwwMarketTL.from(".sec-marketers .body", {ease: "back", y: 300, opacity:0}, "-=.5");
      wwwMarketTL.from(".sec-marketers .team", {ease: "back", y: 300, opacity:0}), "-=.5";
      wwwMarketTL.from(".sec-marketers .buttons", {opacity:0}, "-=.5");
      wwwMarketTL.to(".sec-start", {visibility:"hidden"});
      



      gsap.timeline({
         //paused: true,
         scrollTrigger: {
            trigger: ".sec-www .trigger-1",
            onEnter() {
               gsap.timeline().to("#wrapper", { className: "dark-bg"});
               playWork.play();
            },
            onEnterBack() {  
               gsap.timeline().to("#wrapper", { className: "dark-bg"});
              //playWork.pause(0);   
              wwwMbnPlay.pause(0);        
            }
         }
      });

      let playWork = gsap.timeline({paused: true});
      
      playWork.to(".www-work", {opacity:1}, "+=.8");
      playWork.from(".www-work", {marginTop:200}, "-=.5");
      //playWork.from(".sec-www .bg", {scale:1.2, transformOrigin:"center"});
      playWork.from(".sec-www .tp1-w .w2", {marginLeft:0, duration:.5});
      playWork.from(".sec-www .tp1-w .w3", {marginLeft:0, duration:.5}, "-=.5");
      playWork.from(".sec-www .tp1-h", {opacity:0, duration:.2}, "-=.5");
      playWork.from(".sec-www .tp1-h a", {height:100, width:100, lineHeight:"100px", duration:.2}, "-=.5");
      // playWork.to(".sec-www .bg", {scale:1.2}, "-=.5");
      
      playWork.to(".sec-www .tp1-wrap", {right:"auto",  left: 100,  transform: "scale(.3) rotate(-90deg)",  top: "50%"}, "+=.5");
      playWork.to(".sec-www .www-p1", {width:170, minWidth:1, zIndex:50});


      //Portfolio
      playWork.from(".www-p2 .port-1", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.5");
      playWork.from(".www-p2 .port-2", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.4");
      playWork.from(".www-p2 .port-3", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.4");
      playWork.from(".www-p2 .port-4", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.4");
      playWork.from(".www-p2 .port-5", {opacity:0, y: -200, x: 100, ease: "power2"}, "-=.4");

      playWork.from("#mCSB_1_scrollbar_horizontal", {opacity:0, y: 200, ease: "power2"}, "-=.4");
      
      playWork.to(".port-scroller", { className: "port-scroller active-scroll"});  

      
      //playWork.to(".sec-www .bg", {position:"fixed"});    



      gsap.timeline({
         //paused: true,
         scrollTrigger: {
            trigger: ".sec-www .trigger-2",
            onEnter() {
               gsap.timeline().to("#wrapper", { className: "light-bg"});
               wwwMbnPlay.play();
            },
            onEnterBack() {  
               gsap.timeline().to("#wrapper", { className: "light-bg"});   
               //gsap.timeline().to("#wrapper", { className: "dark-bg"});
              //playWork.pause(0);   
              wwwWeDoIn.pause(0);               
            },
            onLeave() {
               //wwwWeDoIn.play();     
            }
         }
      });

      
      let wwwMbnPlay = gsap.timeline({paused: true});  
      wwwMbnPlay.from(".www-p3 .title", {opacity:0});
      wwwMbnPlay.from(".www-p3 .title span", {padding: "30px 0"});

      wwwMbnPlay.from(".sec-www .wright hr", {width:0}, "-=.5");
      wwwMbnPlay.from(".www-p3 .wquote", {opacity:0, left:-100, duration:.3}, "-=.5");

      wwwMbnPlay.to(".www-p3 .title span", {opacity:1});
      wwwMbnPlay.from(".www-p3 .desc", {opacity:0, top:100}, "-=.5");

      

      
      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-www .trigger-3",
            onEnter() {
               gsap.timeline().to("#wrapper", { className: "light-bg"});
               wwwWeDoIn.play();
            },
            onEnterBack() {  
               gsap.timeline().to("#wrapper", { className: "light-bg"});
               gsap.timeline().to(".sec-www .www-p1", { display:"block"});                   
            }
         }
      });

      let wwwWeDoIn = gsap.timeline({paused: true});  
      //wwwWeDoIn.to(".www-wedowin", {position:"fixed", top:0, height: "45%"});
      wwwWeDoIn.to(".www-wedowin", {top: "175vh"});
      wwwWeDoIn.to(".www-wedowin .wleft", {top:"55%"});
      wwwWeDoIn.to(".www-wedowin .wleft", {scale: ".6", transformOrigin: "top left"}, "-=.5");
      wwwWeDoIn.to(".www-wedowin .wright", {top:"50%"}, "-=.5");
      
      wwwWeDoIn.from(".sec-videos .vidbox", {opacity:0}, "-=.3");


      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-videos",
            start: "top top",
            end: "bottom bottom",
            onEnter() {
               gsap.timeline().to("#wrapper", { className: "dark-bg"});  
               gsap.timeline().to(".sec-www .www-p1", { display:"none"});               
            },
            onEnterBack() {    
               gsap.timeline().to(".sec-www .www-p1", { display:"block"});              
            },
            onLeave(){ 
            },
            onLeaveBack(){ 
              //introMbnPlay.pause(0);
            },
         }
      });
      
      let mbnVideo = gsap.timeline({paused: true});  



      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-featin",
            start: "top top",
            end: "bottom bottom",
            onEnter() {
               gsap.timeline().to("#wrapper", { className: "light-bg"});               
            },
            onEnterBack() {         
                  
            },
            onLeave(){ 
            },
            onLeaveBack(){ 
               gsap.timeline().to("#wrapper", { className: "dark-bg"});    
            },
         }
      });



      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-services .sr-menu",
            start: "top top",
            end: "bottom top",
            onEnter() {
               gsap.timeline().to("#wrapper", { className: "dark-bg"});               
            },
            onEnterBack() {      
               gsap.timeline().to("#wrapper", { className: "dark-bg"});                      
            },
            onLeave(){ 
               gsap.timeline().to("#wrapper", { className: "light-bg"});  
            },
            onLeaveBack(){ 
               gsap.timeline().to("#wrapper", { className: "light-bg"});   
            },
         }
      });
      
      
   },
 


   // Media Query 
   // Moble ======================================================
   "(max-width: 1023px)": function() {
      //location.reload();
      
      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-start .trigger-1",
            onEnter() {
               introMbnPlayMob.pause(0);
             },
             onEnterBack() {
               introMbnPlayMob.pause(0);
               introMbnRoiMob.pause(0);
             }
         }
      });

      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-start .trigger-2",
            onEnter() {
               introMbnPlayMob.play();
             },
             onEnterBack() {
               introMbnRoiMob.pause(0);
             }
         }
      });
      
      let introMbnPlayMob = gsap.timeline({paused: true});
      introMbnPlayMob.to(".start-intro .si-wrap", {opacity:0});   
      introMbnPlayMob.to(".start-side", {opacity:1});   
      introMbnPlayMob.to(".start-side .link", {opacity:1});   
      introMbnPlayMob.from(".start-side .link", {marginTop:30}, "-=.5");   
      introMbnPlayMob.to(".start-intro .si-copy", {opacity:1}, "-=.3");   
      
      
      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-start .trigger-3",
            onEnter() {
               introMbnRoiMob.play();
             },
             onEnterBack() {
               wwwMarketMob.pause(0);
             }
         }
      });
      
      let introMbnRoiMob = gsap.timeline({paused: true});
      introMbnRoiMob.to(".start-intro .si-copy", {opacity:0});    
      introMbnRoiMob.to(".start-intro .si-roi", {opacity:1});  
      
      
      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-marketers",
            onEnter() {
               gsap.timeline().to("#wrapper", {className: "dark-bg"}, "+=.5");
               wwwMarketMob.play();
            },
            onEnterBack() {
               gsap.timeline().to("#wrapper", {className: "dark-bg"}, "+=.5");
              // wwwMarketMob.pause(0);
               playWorkMob.pause(0);   
            },
         }
      });
      let wwwMarketMob = gsap.timeline({paused: true});
      wwwMarketMob.to(".start-intro", {display:"block"});
      wwwMarketMob.to(".start-intro", {opacity:0});
      wwwMarketMob.from(".sec-marketers .title", {opacity:0});
      wwwMarketMob.from(".sec-marketers .body", {ease: "back", y: 300, opacity:0});
      wwwMarketMob.from(".sec-marketers .team", {ease: "back", y: 300, opacity:0}), "-=.5";
      wwwMarketMob.from(".sec-marketers .buttons", {opacity:0}, "-=.5");
      wwwMarketMob.to(".sec-start", {visibility:"hidden"});



      gsap.timeline({
         //paused: true,
         scrollTrigger: {
            trigger: ".sec-www .trigger-1",
            onEnter() {
               gsap.timeline().to("#wrapper", { className: "dark-bg"});
               playWorkMob.play();
            },
            onEnterBack() {  
               gsap.timeline().to("#wrapper", { className: "dark-bg"});
              //playWorkMob.pause(0);   
              wwwMbnPlayMob.pause(0);        
            }
         }
      });

      let playWorkMob = gsap.timeline({paused: true});
      
      playWorkMob.to(".www-work", {display:"block"});
      playWorkMob.to(".www-work", {opacity:1});
      playWorkMob.from(".www-projects", {marginTop:50});
      playWorkMob.to(".www-projects", {opacity:1}, "-=.5");
      playWorkMob.to(".port-scroller", { className: "port-scroller active-scroll"});  

   



      gsap.timeline({
         //paused: true,
         scrollTrigger: {
            trigger: ".sec-www .trigger-2",
            onEnter() {
               gsap.timeline().to("#wrapper", { className: "light-bg"});
               wwwMbnPlayMob.play();
            },
            onEnterBack() {  
               //gsap.timeline().to("#wrapper", { className: "light-bg"});   
               //gsap.timeline().to("#wrapper", { className: "dark-bg"});
              //playWork.pause(0);   
              wwwWeDoInMob.pause(0);               
            },
            onLeave() {
               //wwwWeDoInMob.play();     
            }
         }
      });

      let wwwMbnPlayMob = gsap.timeline({paused: true});  
      wwwMbnPlayMob.to(".www-work", {display:"none"}, "-=1");
      wwwMbnPlayMob.from(".www-p3 .wleft", {opacity:0});
      wwwMbnPlayMob.to(".www-p3 .title span", {opacity:1}, "-=.5");
      wwwMbnPlayMob.from(".www-p3 .wright", {opacity:0});     


      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-videos",
            start: "top top",
            end: "bottom bottom",
            onEnter() {
               gsap.timeline().to("#wrapper", { className: "dark-bg"});  
               gsap.timeline().to(".sec-www .www-p1", { display:"none"});               
            },
            onEnterBack() {    
               gsap.timeline().to(".sec-www .www-p1", { display:"block"});              
            },
            onLeave(){ 
            },
            onLeaveBack(){ 
              //introMbnPlay.pause(0);
            },
         }
      });
      
      let mbnVideo = gsap.timeline({paused: true});  



      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-featin",
            start: "top top",
            end: "bottom bottom",
            onEnter() {
               gsap.timeline().to("#wrapper", { className: "light-bg"});               
            },
            onEnterBack() {         
                  
            },
            onLeave(){ 
            },
            onLeaveBack(){ 
               gsap.timeline().to("#wrapper", { className: "dark-bg"});    
            },
         }
      });



      gsap.timeline({
         scrollTrigger: {
            trigger: ".sec-services .sr-menu",
            start: "top top",
            end: "bottom top",
            onEnter() {
               gsap.timeline().to("#wrapper", { className: "dark-bg"});               
            },
            onEnterBack() {      
               gsap.timeline().to("#wrapper", { className: "dark-bg"});                      
            },
            onLeave(){ 
               gsap.timeline().to("#wrapper", { className: "light-bg"});  
            },
            onLeaveBack(){ 
               gsap.timeline().to("#wrapper", { className: "light-bg"});   
            },
         }
      });
      
   }

}); 

