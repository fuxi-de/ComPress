/************************ DEPENDENCIES ***************************/

//=require ../../node_modules/picturefill/dist/picturefill.js
//=require ../../node_modules/flickity/dist/flickity.pkgd.min.js
//=require ../../node_modules/lazysizes/lazysizes.js
//=require ../../node_modules/svg4everybody/dist/svg4everybody.js
//=require ../../node_modules/jquery-touchswipe/jquery.touchSwipe.min.js


/********************** DOCUMENT READY START *************************/
jQuery( document ).ready(function( $ ) {

   // global vars
   var $body = $('body'),
       mqTab = window.matchMedia("(min-width: 768px)"), // use this for media queries in js
       mqDesk = window.matchMedia("(min-width: 1024px)"); // if (mqTab.matches) { ... }

   // INIT FUNCTION
   function InitScreen() {
      svg4everybody();
   }
   InitScreen();


   /*--------- IMPORT UTILITIES START --------*/
   // import all files from the util directory
   //=require utils/*.js
   /*-----------------------------------------*/

   /*--------- IMPORT MODULES START ---------*/
   // import all js-files from the modules directory
   //=require ../../templates/modules/**/*.js
   /*-----------------------------------------*/

});

/********************** DOCUMENT READY END +*************************/


// Animate the Logo on scroll down
// function scrolledLogo() {
//     var $this = jQuery(this),
//         $head = jQuery('#header'),
//         $headH = $head.outerHeight(),
//         $logo = jQuery('a.logo'),
//         $balken = jQuery('#balken');
//
//     if ( $this.scrollTop() > $headH ) { // If scroll down more then the height of the header
//         if ( !$logo.hasClass('scrolled' )) {
//             $logo.addClass('scrolled');
//             $balken.attr({'transform':'translate(-179, 0)'});
//             console.log('class added');
//         } else {
//             return false;
//         }
//     } else {
//         if ( $logo.hasClass('scrolled') ) {
//             $logo.removeClass('scrolled');
//             $balken.attr({'transform':'translate(0, 0)'});
//             console.log('class removed');
//         } else {
//             return false;
//         }
//     }
// }

jQuery(window).scroll( function(){
    // scrolledLogo();
});

jQuery(window).load( function(){
  // your functions here
});
