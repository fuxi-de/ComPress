// DEPENDECY
//=require ../../../node_modules/jquery-visible/jquery.visible.min.js

// works like wow.js
// if the element is in view -> add class "in-view"
// also add class "vw" -> element was already in view
// REQUIRED JQUERY-VISIBLE - MAKE SURE ITS IMPLEMENTED
function checkVisibility() {
    var elements = jQuery('.wow');
    // Loop over each container, and check if it's visible.
    elements.each(function(){

        var $this = jQuery(this);

        // Is this element visible onscreen?
        var visible = $this.visible( true );

        // Set the visible status into the span
        if ( visible == true ) {
            $this.addClass('in-view');

            if (!$this.hasClass('vw')) {
                $this.addClass('vw');
            }

        } else {
            $this.removeClass('in-view');
        }

    });

    console.log('checking visibility of elements with class .wow');
}

// throttle function
function throttle(fn, wait) {
    var time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

// CHECK VISIBLITY WHILE SCROLLING
// EVERY HALF SECOND
window.addEventListener('scroll',
    throttle(checkVisibility, 500)
);
