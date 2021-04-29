$(document).foundation();

(function($){

   var app = {
       onReady: function(){
         app.niceScroll();
       },	
       onLoad: function(){
        $(document).foundation();

        app.utils();
        app.smoothscroll();
        app.homeScripts();

     },

     //Nice scroll all pages
     niceScroll: function(){
         jQuery("body").niceScroll({
            cursoropacitymin: 1,
            zindex: 9999,
            scrollspeed: 10
         });
     },

     utils: function(){
        //Fields Placeholder
         jQuery('.field.js label, .fields.js label').click(function() {
            jQuery(this).next().focus();
         });
         jQuery('.field.js input, .field.js select, .field.js textarea').each(function() {
               if (jQuery(this).val() != '') {
                  jQuery(this).parents('.field').addClass('focus');
               }
         });
         jQuery('.field.js input, .field.js select, .field.js textarea').blur(function() {
               if (jQuery(this).val() == '') {
                  jQuery(this).parents('.field').toggleClass('focus');
               }
         });
         jQuery('.field.js input, .field.js select, .field.js textarea').focus(function() {
               if (jQuery(this).val() == '') {
                  jQuery(this).parents('.field').toggleClass('focus');
               }
         });
         
         jQuery('.fields.js input').each(function() {
            if (jQuery(this).val() != '') {
               jQuery(this).parent().addClass('focus');
            }
         });
         jQuery('.fields.js input').blur(function() {
            if (jQuery(this).val() == '') {
               jQuery(this).parent().toggleClass('focus');
            }
         });
         jQuery('.fields.js input').focus(function() {
               if (jQuery(this).val() == '') {
                  jQuery(this).parent().toggleClass('focus');
               }
         });
     },

      smoothscroll: function(){
        $('.smoothscrolling').on('click', function(){
           var headerH	= $('.header').height();

           $('html, body').animate({
              scrollTop: $(this.hash || $('a', this)[0].hash).offset().top
           }, { duration: 5000 });

           
           return false;
           
        });
     },

     homeScripts: function(){

      jQuery('.sec-marketers .bg-list').slick({
         arrows: false,
         fade: true,
         autoplay: true,
         autoplaySpeed: 2000
      });
     
      var $frame  = jQuery('.port-wrap');
         var $slidee = $frame.children('ul').eq(0);
         var $wrap   = $frame.parent();
   
         // Call Sly on frame
         $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'mouseenter',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: $wrap.find('.scrollbar'),
            scrollBy: 1,
            pagesBar: $wrap.find('.pages'),
            activatePageOn: 'mouseenter',
            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,
   
         });
   
         // sly.on('load', function (eventName) {
         //    console.log(eventName); // 'load'
         //    console.log(this.pos);  // Sly position object
         // });
     }
     
   }

   document.addEventListener('DOMContentLoaded', app.onReady);
   window.addEventListener('load', app.onLoad);
  
})(jQuery);
