
//Plugins
gsap.registerPlugin(ScrollTrigger);

//Intro 
let contactTL = gsap.timeline();

contactTL.from(".cf-mbn", { left:-450, opacity:0});
contactTL.from(".cf-mbn span", { padding:"100px 0"}, "-=.5");
contactTL.from(".cf-mbn", {top:-220}, "-=.5");
contactTL.from(".cf-right", {top:-50, opacity:.5, position:"relative"});
contactTL.from(".cf-mbn .text-dark", {opacity:0});
contactTL.from(".cf-do", {duration:1, opacity:0, left:-100}, "-=.5");
contactTL.from(".cf-do .after", {left:0,top:0,right:0,bottom:0}, "-=.5");
contactTL.from(".cf-do .before", {left:0,top:0,right:0,bottom:0}, "-=.5");
contactTL.from(".sc-sub", {top:-50, opacity:0}, "-=.5");
contactTL.from(".cf-talk", {top:-50, opacity:0}, "-=.3");







// jQuery('.skip-intro').click(function(){
//    introTL.pause();
//    introTL.play("#intro");
//    introTL.from(".navlogo", {opacity:0});
// });

