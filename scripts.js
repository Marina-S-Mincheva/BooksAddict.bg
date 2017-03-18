//moving pics
(function () {
    var cssMaxHeight, cssYPos, interval, moveTo, toMove2, toMove3, toMove4;

    function MoveBackGround() {
        cssYPos++;
        if (cssYPos >= cssMaxHeight) {
            window.clearInterval(interval);
        }
        toMove = document.getElementById("scroller");
        toMove2 = document.getElementById("scroller2");
        toMove5 = document.getElementById("scroller5");
        toMove6 = document.getElementById("scroller6");
        toMove7 = document.getElementById("scroller7");
        toMove.style.backgroundPosition = "0" + cssYPos + "px";
        toMove2.style.backgroundPosition = "0" + cssYPos + "px";
        toMove5.style.backgroundPosition = "0 " + cssYPos + "px";
        toMove6.style.backgroundPosition = "0 " + cssYPos + "px";
        toMove7.style.backgroundPosition = "0 " + cssYPos + "px";
    }
    function StartMove() {
        var BGImage = new Image();
        // BGImage.src = "images/background.png";
        cssMaxHeight = 600;
        cssYPos = 0;
        interval = setInterval(MoveBackGround, 40);
    }
    StartMove();
} ());




//slideshow
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}




//thumbnails
Array.prototype.forEach.call(document.querySelectorAll(".thumbnail1"), function (element) {
    element.addEventListener("mouseover", function (event) {
        document.querySelector("#details1 > img").src = element.src;
    }, false);
    element.addEventListener("mouseout", function (event) {
        document.querySelector("#details1 > img").src = "";
    }, false);
});
Array.prototype.forEach.call(document.querySelectorAll(".thumbnail2"), function (element) {
    element.addEventListener("mouseover", function (event) {
        document.querySelector("#details2 > img").src = element.src;
    }, false);
    element.addEventListener("mouseout", function (event) {
        document.querySelector("#details2 > img").src = "";
    }, false);
});
Array.prototype.forEach.call(document.querySelectorAll(".thumbnail3"), function (element) {
    element.addEventListener("mouseover", function (event) {
        document.querySelector("#details3 > img").src = element.src;
    }, false);
    element.addEventListener("mouseout", function (event) {
        document.querySelector("#details3 > img").src = "";
    }, false);
});



//coloring icons
var images = document.querySelectorAll(".colorImage");
Array.prototype.forEach.call(images, function (element) {
    element.addEventListener("mouseover", function (event) {
        element.style.background = "yellow";
    }, false);
    element.addEventListener("mouseout", function (event) {
        element.style.background = "";
    }, false);
});



// //ROTATE BANNERS



