// BURGER MENU
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

window.onscroll = function () {
    stickyFunction();
    scrollFunction();
};

var header = document.getElementById("myBurgermenu");
var sticky = header.offsetTop;

function stickyFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function closeFunction(x) {
    x.classList.toggle("change");
}



// GO TO TOP
// Når du ruller 20px fra the toppen af dokumentet, vis button

function scrollFunction() {
    console.log("scroll function");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Når du klikker på button, rul til toppen af siden
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
