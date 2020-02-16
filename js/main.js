(function ($) {
    "use strict";
   
   /*----------------------------
    jQuery MeanMenu
   ------------------------------ */
   
         
       // Data images
       //----------------------------------
       if ($('.background-image').length > 0) {
           $('.background-image').each(function () {
               var src = $(this).attr('data-src');
               $(this).css({
                   'background-image': 'url(' + src + ')'
               });
           });
       }
   })(jQuery); 