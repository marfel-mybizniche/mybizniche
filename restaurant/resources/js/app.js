$(document).foundation();

(function($){

   var app = {
       onReady: function(){

       },	
       onLoad: function(){
        $(document).foundation();

        app.utils();
        app.smoothscroll();

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
           }, { duration: 1000 });
           return false;
        });
     },
     
     
   }

   document.addEventListener('DOMContentLoaded', app.onReady);
   window.addEventListener('load', app.onLoad);
  
})(jQuery);
