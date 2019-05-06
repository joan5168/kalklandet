// denne funtion myFunction er taget fra w3schools. https://www.w3schools.com/howto/howto_js_mobile_navbar.asp. Vi har brugt denne kode til at lave vores burgermenu, dog med ændringer i styling af css.
function myFunction() {
    var x = document.getElementById("myLinks"); // Hvis vores links har display block, vises linksne. Hvis de har display none skjules de.
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



window.onscroll = function () {
    stickyFunction(); // Vi kalder sticky funktionen
    scrollFunction(); // Vi kalder scroll funktionen
};

var header = document.getElementById("myBurgermenu");
var sticky = header.offsetTop;

// denne funktion stickyFunction er taget fra w3schools. https://www.w3schools.com/howto/howto_js_sticky_header.asp. Vi har brugt den til at lave vores burger menu sticky.
function stickyFunction() {
    if (window.pageYOffset > sticky) { //når YOffset er større end sticky, skal den tilføje class sticky
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky"); // ellers skal den fjernes
    }
}

function closeFunction(x) {
    x.classList.toggle("change");
}



// GO TO TOP



function scrollFunction() {
    console.log("scroll function");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { // Når du scroller 20px fra the toppen af dokumentet, vis button
        document.getElementById("myBtn").style.display = "block";
    } else { //ellers ikke vis button
        document.getElementById("myBtn").style.display = "none";
    }
}

// Når du klikker på button, rul til toppen af siden
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
