// Show Mobile-Navigation
function showMenu() {
    var navButton = $('#navbar-toggle'), // burger-icon
        mainNav = $('nav#main-nav'), // <nav>
        mainMenu = mainNav.find('ul'), // main-navigation list
        logo = $('svg#smr-logo'), // logo
        header = $('header#header'),
        section = $('section.scroller.active');

    $body.toggleClass('noscroll'); // freeze the body by disabling scroll - noscroll => overflow: hidden
    navButton.toggleClass('open');

    if ( !mainNav.hasClass('toggle')) {
        mainNav.addClass('toggle').css('height', calcVH()); // set height
        mainMenu.addClass('active');

        if ( header.hasClass('black') ) { // if the header is currently black (icons)
            header.removeClass('black'); // make it white again, cause the overlay has a dark bg-color
        }

    } else {
        mainNav.removeClass('toggle').css('height', '0');
        mainMenu.removeClass('active');
        if (section.hasClass('light')) {
            header.addClass('black')
        }
    }
}


// calculate the height without the browser-toolbar
// this function is used for showMenu();
function calcVH() {
    var docHeight = window.innerHeight;
    return docHeight;
}

// recalc the height on resize
function resizeHeight() {
    var mainNav = $('nav#main-nav');

    if ( mainNav.hasClass('toggle')) {
        mainNav.css('height', calcVH());
    } else {
        return false;
    }
}


$('#navbar-toggle').click(function (e) {
    showMenu();
});

$( window ).resize(function() {
    resizeHeight();
});


