// function show() {
//   var welcome = document.getElementById('abc');
//   welcome.style.display = '';
// }

// function hide() {
//   var welcome = document.getElementById('abc');
//   welcome.style.display = 'none';

// }
// function init() {
//   var surround = document.getElementById('wrapImgJS');
//   surround.setAttribute("style", "opacity: 0.8;")
//   surround.onmouseover = show;
//   surround.onmouseout = hide;  
// }

// window.onload = init;   


(function() {
    var cssMaxHeight, cssYPos, interval, moveTo, toMove2;

    function MoveBackGround() {
        cssYPos++;        
        if (cssYPos >= cssMaxHeight) {
            window.clearInterval(interval);
        }
        toMove = document.getElementById("scroller");
        toMove2 = document.getElementById("scroller2");
        toMove.style.backgroundPosition = "0 " + cssYPos + "px";
        toMove2.style.backgroundPosition = "0 " + cssYPos + "px";
    }

    function StartMove() {
        var BGImage = new Image();
        // BGImage.src = "images/background.png";
        cssMaxHeight = 600;
        cssYPos = 0;
        interval = setInterval(MoveBackGround, 50);
    }

    StartMove();

}());