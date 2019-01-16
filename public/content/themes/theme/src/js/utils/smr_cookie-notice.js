// COOKIENOTICE
// styles are locatied in src/scss/utils/_cookie-notice.scss


var cookies = document.cookie.split(';'), //contains all the cookies
    cookieNames = []; // to contain name of all the cookie

for ( i=0; i<cookies.length; i++ ) {
    cookieNames[i] = cookies[i].split('=')[0].trim();
}

// COOKIE NOTIFICATION
(function() {
    var policyLink = '/datenschutzerklaerung/#cookies', // url to the datapolicy
        clientCookie = 'smr-cookie-notice'; // name the cookie - should be pretty unique

    if ( cookieNames.indexOf(clientCookie)>-1 ) {
        return;
    } else {
        var bodyEl = document.body;

        // create Elements
        var cookieBar = document.createElement('div');
        cookieBar.id += 'cookie-bar';
        // cookieBar.className += 'color-bg-black-solid'; // edit the color-class to change bg-color

        var cookieBtn = document.createElement('button');
        cookieBtn.id += 'dismiss-cookie';
        cookieBtn.className += 'push-right'; // edit the color-class to change bg-color for the button

        var cookieTxt = document.createElement('p');
        cookieTxt.className += 'push-left left';

        var learnMore = document.createElement('a');
        learnMore.setAttribute('href', policyLink);

        // create Textnodes
        var BtnTxt = document.createTextNode("Ausblenden");
        var infoTxt = document.createTextNode("Diese Webseite verwendet Cookies. ");
        var moreTxt = document.createTextNode("Mehr erfahren");

        // append texts
        cookieBtn.appendChild(BtnTxt);
        cookieTxt.appendChild(infoTxt);
        learnMore.appendChild(moreTxt);

        // append elements
        cookieTxt.appendChild(learnMore);
        cookieBar.appendChild(cookieBtn);
        cookieBar.appendChild(cookieTxt);

        // insert Element to the DOM
        bodyEl.appendChild(cookieBar);

        document.getElementById('dismiss-cookie').addEventListener("click", function() {
            var cookiebar = document.getElementById('cookie-bar'),
                date = new Date(),
                days = 60; // expire after 60 days

            date.setTime(date.getTime()+(days*24*60*60*1000));

            var expiration = date.toGMTString();

            document.cookie = clientCookie +'=true;expires='+ expiration +'; path=/;'; // set cookie
            cookiebar.className += " hide";
        });
    }

})();
