// crypto library
var CryptoJS = require("crypto-js");

// when document is loaded
document.addEventListener("DOMContentLoaded", function() {

    // set starting cell
    var current = '';

    // fetch starting cell data
    fetch();

    // submit event for search box
    document.body.children[1].children[0].children[0].addEventListener('submit', function(e) {
        e.preventDefault();
        // event.preventDefault ? event.preventDefault() : event.returnValue = false;
        current = e.target.children[0].value || '';
        fetch();
    });

    // submit event for textarea
    document.body.children[1].children[1].children[0].addEventListener('submit', function(e) {
        e.preventDefault();
        // event.preventDefault ? event.preventDefault() : event.returnValue = false;
        localStorage[CryptoJS.SHA256(current, current).toString()] = CryptoJS.AES.encrypt(e.target.children[0].value, current);
    });

    // fetches data from localStorage
    function fetch() {
        document.body.children[1].children[1].children[0].children[0].value = CryptoJS.AES.decrypt((localStorage[CryptoJS.SHA256(current, current).toString()] || ''), current).toString(CryptoJS.enc.Utf8);
    }
});
