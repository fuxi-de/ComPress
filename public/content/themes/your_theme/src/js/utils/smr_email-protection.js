// ANTISPAM
// INSERT EMAIL
// <span class="addhere" data-local="mustermann" data-global="gmail" data-endung="de">
// => mustermann@gmail.de
var d=jQuery('span.addhere');
d.each(function() {
    var a = jQuery(this).attr('data-local'),
        b = jQuery(this).attr('data-global'),
        c = jQuery(this).attr('data-endung');

    $(this).append('<a hre'+'f="mai'+'lto:'+a+'@'+b+'.'+c+'">'+a+'@'+b+'.'+c+'</a>');
});
