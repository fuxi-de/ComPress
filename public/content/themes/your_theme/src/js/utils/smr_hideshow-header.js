// Hide Header on Scroll down
// Show Header on Scroll up
(function() {
    // Hide Header on scroll down
    var didScroll,
        lastScrollTop = 0,
        delta = 5,
        $header = $('header#header'),
        navbarHeight = $header.outerHeight()*4;

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the header, add class .header-up.
        // This is necessary so you never see what is "behind" the header.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $header.addClass('header-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $header.removeClass('header-up');
            }
        }
        lastScrollTop = st;
    }
})();