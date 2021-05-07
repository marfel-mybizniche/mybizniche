$(document).foundation();

(function($){

   var app = {
       onReady: function(){
        app.homeSB();

       },	
       onLoad: function(){

        app.utils();
        app.smoothscroll();
        //app.homeScripts();

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

     homeSB: function(){
      
         $(".port-wrap").mCustomScrollbar({
            axis:"x",
            scrollButtons:{
               enable:false,
               scrollType:"stepped"
            },
            keyboard:{scrollType:"stepped"},
            mouseWheel:{scrollAmount:380,normalizeDelta:true},
            theme:"light-3",
            snapAmount:380,
            callbacks:{               
               whileScrolling:function(){ 
                  $("#scrollbar > img").css('transform','scale(1.'+(this.mcs.leftPct + 10) +')');
               }
            }
         });
         
         jQuery('.sec-marketers .bg-list').slick({
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 1000,
            pauseOnFocus: false,
            pauseOnHover:false
         });
     }
   }


   document.addEventListener('DOMContentLoaded', app.onReady);
   window.addEventListener('load', app.onLoad);
  
})(jQuery);
