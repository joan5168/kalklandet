function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

window.onscroll = function () {
    stickyFunction()
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
