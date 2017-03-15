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
        // toMove3 = document.getElementById("scroller3");
        // toMove4 = document.getElementById("scroller4");
        toMove.style.backgroundPosition = "0 " + cssYPos + "px";
        toMove2.style.backgroundPosition = "0 " + cssYPos + "px";
        // toMove3.style.backgroundPosition = "0 " + cssYPos + "px";
        // toMove4.style.backgroundPosition = "0 " + cssYPos + "px";
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
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
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



//ABSOLUTE DIV

// Array.prototype.forEach.call(document.querySelectorAll(".picAbsolute"), function (element) {
//     element.addEventListener('click', function () {
//         // document.querySelector('#divAbsolute > img').src = element.src;
//         console.log("click");
//         document.getElementById('divAbsolute').style.display = "block";
//     }, false);

// });

// var a = document.querySelectorAll(".pic1");
// (function () {
// var a = document.querySelectorAll(".dottedBorder");
// console.log("a", a);
// for (var i = 0; i < a.length; i++) {
//     var t = a[i];
//     console.log(a[i]);
//     t.addEventListener("click", function () {
//         alert("click");
//         document.getElementById("divAbsolute").style.display = "block";
//     }, false);
// };
// } ());