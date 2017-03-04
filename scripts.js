//moving pics
(function() {
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

}());



//slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}