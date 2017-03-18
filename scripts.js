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
        // toMove5 = document.getElementById("scroller5");
        // toMove6 = document.getElementById("scroller6");
        // toMove7 = document.getElementById("scroller7");
        toMove.style.backgroundPosition = "0" + cssYPos + "px";
        toMove2.style.backgroundPosition = "0" + cssYPos + "px";
        // toMove5.style.backgroundPosition = "0 " + cssYPos + "px";
        // toMove6.style.backgroundPosition = "0 " + cssYPos + "px";
        // toMove7.style.backgroundPosition = "0 " + cssYPos + "px";
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
        element.style.background = "maroon";
    }, false);
    element.addEventListener("mouseout", function (event) {
        element.style.background = "";
    }, false);
});



//ROUNDED PIC DIV ONMOUSEOVER
var roundedText = [
    text1 = {
        title: " 'Harry Potter and the Cursed Child' by John Tiffany (Adaptation), Jack Thorne, J.K. Rowling ",
        simple: " Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, \
        a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the \
        Harry Potter series and the first official Harry Potter story to be presented on stage. \
        The play will receive its world premiere in London’s West End on July 30, 2016. \
        It was always difficult being Harry Potter and it isn’t much easier now that he is \
        an overworked employee of the Ministry of Magic, a husband and father of three school-age children. \
        While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus \
        must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, \
        both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places."
    },
    text2 = {
        title: " 'A Gathering of Shadows' by V.E. Schwab ",
        simple: "It has been four months since a mysterious obsidian stone fell into Kell's possession. \
        Four months since his path crossed with Delilah Bard. Four months since Prince Rhy was wounded, \
        and since the nefarious Dane twins of White London fell, and four months since the stone was cast \
        with Holland's dying body through the rift--back into Black London. Now, restless after having \
        given up his smuggling habit, Kell is visited by dreams of ominous magical events, waking only \
        to think of Lila, who disappeared from the docks as she always meant to do. As Red London finalizes \
        preparations for the Element Games--an extravagant international competition of magic meant to \
        entertain and keep healthy the ties between neighboring countries--a certain pirate ship draws \
        closer, carrying old friends back into port. And while Red London is caught up in the pageantry \
        and thrills of the Games, another London is coming back to life. After all, a shadow that was gone \
        in the night will reappear in the morning. But the balance of magic is ever perilous, and for one \
        city to flourish, another London must fall."
    },
    text3 = {
        title: " 'The Bands of Mourning' by Brandon Sanderson ",
        simple: "With The Alloy of Law and Shadows of Self, Brandon Sanderson surprised readers with a \
        New York Times bestselling spinoff of his Mistborn books, set after the action of the trilogy, \
        in a period corresponding to late 19th-century America. Now, with The Bands of Mourning, Sanderson \
        continues the story. The Bands of Mourning are the mythical metalminds owned by the Lord Ruler, \
        said to grant anyone who wears them the powers that the Lord Ruler had at his command. Hardly \
        anyone thinks they really exist. A kandra researcher has returned to Elendel with images that \
        seem to depict the Bands, as well as writings in a language that no one can read. Waxillium Ladrian \
        is recruited to travel south to the city of New Seran to investigate. Along the way he discovers \
        hints that point to the true goals of his uncle Edwarn and the shadowy organization known as The Set."
    },
    text4 = {
        title: " 'Feverborn' by Karen Marie Moning ",
        simple: "In Karen Marie Moning’s latest installment of the epic #1 New York Times bestselling Fever \
        series, the stakes have never been higher and the chemistry has never been hotter. Hurtling us into \
        a realm of labyrinthine intrigue and consummate seduction, FEVERBORN is a riveting tale of ancient \
        evil, lust, betrayal, forgiveness and the redemptive power of love. When the immortal race of the \
        Fae destroyed the ancient wall dividing the worlds of Man and Faery, the very fabric of the universe \
        was damaged and now Earth is vanishing bit by bit. Only the long-lost Song of Making—a haunting, \
        dangerous melody that is the source of all life itself—can save the planet. But those who seek the \
        mythic Song—Mac, Barrons, Ryodan and Jada—must contend with old wounds and new enemies, passions \
        that burn hot and hunger for vengeance that runs deep. The challenges are many: The Keltar at war \
        with nine immortals who’ve secretly ruled Dublin for eons, Mac and Jada hunted by the masses, the \
        Seelie queen nowhere to be found, and the most powerful Unseelie prince in all creation determined \
        to rule both Fae and Man."
        //Now the task of solving the ancient riddle of the Song of Making falls to \
        // a band of deadly warriors divided among—and within—themselves. Once a normal city possessing a touch \
        // of ancient magic, Dublin is now a treacherously magical city with only a touch of normal. And in those \
        // war-torn streets, Mac will come face to face with her most savage enemy yet: herself."
    }
];
Array.prototype.forEach.call(document.querySelectorAll(".hoverDiv"), function (element) {
    element.addEventListener("mouseover", function (event) {
            var r = element.id.replace(/[^0-9]+/g, "");
        for (var index = 0; index < roundedText.length; index++) {
            if (r == 0) {
                document.querySelector("#contHoverDiv1").style.display = "block";
                document.querySelector("#contHoverDiv1 > .p1").textContent = roundedText[0].title;
                document.querySelector("#contHoverDiv1 > .p2").textContent = roundedText[0].simple;
            } else if (r == 1) {
                document.querySelector("#contHoverDiv2").style.display = "block";
                document.querySelector("#contHoverDiv2 > .p1").textContent = roundedText[1].title;
                document.querySelector("#contHoverDiv2 > .p2").textContent = roundedText[1].simple;
            } else if (r == 2) {
                document.querySelector("#contHoverDiv3").style.display = "block";
                document.querySelector("#contHoverDiv3 > .p1").textContent = roundedText[2].title;
                document.querySelector("#contHoverDiv3 > .p2").textContent = roundedText[2].simple;
            } else if (r == 3) {
                document.querySelector("#contHoverDiv4").style.display = "block";
                document.querySelector("#contHoverDiv4 > .p1").textContent = roundedText[3].title;
                document.querySelector("#contHoverDiv4 > .p2").textContent = roundedText[3].simple;
            }
        }
       
    }, false);
    element.addEventListener("mouseout", function (event) {
        document.querySelector("#contHoverDiv1").style.display = "none";
        document.querySelector("#contHoverDiv2").style.display = "none";
        document.querySelector("#contHoverDiv3").style.display = "none";
        document.querySelector("#contHoverDiv4").style.display = "none";
                console.log("vyn");
    }, false);
});









//SLIDE images Part 2
var slidePart2 = [
    txt1 = {
        title: " 'Harry Potter and the Cursed Child' by John Tiffany (Adaptation), Jack Thorne, J.K. Rowling ",
        simple: " Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, \
        a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the \
        Harry Potter series and the first official Harry Potter story to be presented on stage. \
        The play will receive its world premiere in London’s West End on July 30, 2016. \
        It was always difficult being Harry Potter and it isn’t much easier now that he is \
        an overworked employee of the Ministry of Magic, a husband and father of three school-age children. \
        While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus \
        must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, \
        both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places."
    },
    txt2 = {
        title: " 'A Gathering of Shadows' by V.E. Schwab ",
        simple: "It has been four months since a mysterious obsidian stone fell into Kell's possession. \
        Four months since his path crossed with Delilah Bard. Four months since Prince Rhy was wounded, \
        and since the nefarious Dane twins of White London fell, and four months since the stone was cast \
        with Holland's dying body through the rift--back into Black London. Now, restless after having \
        given up his smuggling habit, Kell is visited by dreams of ominous magical events, waking only \
        to think of Lila, who disappeared from the docks as she always meant to do. As Red London finalizes \
        preparations for the Element Games--an extravagant international competition of magic meant to \
        entertain and keep healthy the ties between neighboring countries--a certain pirate ship draws \
        closer, carrying old friends back into port. And while Red London is caught up in the pageantry \
        and thrills of the Games, another London is coming back to life. After all, a shadow that was gone \
        in the night will reappear in the morning. But the balance of magic is ever perilous, and for one \
        city to flourish, another London must fall."
    },
    txt3 = {
        title: " 'The Bands of Mourning' by Brandon Sanderson ",
        simple: "With The Alloy of Law and Shadows of Self, Brandon Sanderson surprised readers with a \
        New York Times bestselling spinoff of his Mistborn books, set after the action of the trilogy, \
        in a period corresponding to late 19th-century America. Now, with The Bands of Mourning, Sanderson \
        continues the story. The Bands of Mourning are the mythical metalminds owned by the Lord Ruler, \
        said to grant anyone who wears them the powers that the Lord Ruler had at his command. Hardly \
        anyone thinks they really exist. A kandra researcher has returned to Elendel with images that \
        seem to depict the Bands, as well as writings in a language that no one can read. Waxillium Ladrian \
        is recruited to travel south to the city of New Seran to investigate. Along the way he discovers \
        hints that point to the true goals of his uncle Edwarn and the shadowy organization known as The Set."
    },
    txt4 = {
        title: " 'Feverborn' by Karen Marie Moning ",
        simple: "In Karen Marie Moning’s latest installment of the epic #1 New York Times bestselling Fever \
        series, the stakes have never been higher and the chemistry has never been hotter. Hurtling us into \
        a realm of labyrinthine intrigue and consummate seduction, FEVERBORN is a riveting tale of ancient \
        evil, lust, betrayal, forgiveness and the redemptive power of love. When the immortal race of the \
        Fae destroyed the ancient wall dividing the worlds of Man and Faery, the very fabric of the universe \
        was damaged and now Earth is vanishing bit by bit. Only the long-lost Song of Making—a haunting, \
        dangerous melody that is the source of all life itself—can save the planet. But those who seek the \
        mythic Song—Mac, Barrons, Ryodan and Jada—must contend with old wounds and new enemies, passions \
        that burn hot and hunger for vengeance that runs deep. The challenges are many: The Keltar at war \
        with nine immortals who’ve secretly ruled Dublin for eons, Mac and Jada hunted by the masses, the \
        Seelie queen nowhere to be found, and the most powerful Unseelie prince in all creation determined \
        to rule both Fae and Man."
        //Now the task of solving the ancient riddle of the Song of Making falls to \
        // a band of deadly warriors divided among—and within—themselves. Once a normal city possessing a touch \
        // of ancient magic, Dublin is now a treacherously magical city with only a touch of normal. And in those \
        // war-torn streets, Mac will come face to face with her most savage enemy yet: herself."
    },
    txt5 = {
        title: " 'Feverborn' by Karen Marie Moning ",
        simple: "In Karen Marie Moning’s latest installment of the epic #1 New York Times bestselling Fever \
        series, the stakes have never been higher and the chemistry has never been hotter. Hurtling us into \
        a realm of labyrinthine intrigue and consummate seduction, FEVERBORN is a riveting tale of ancient \
        evil, lust, betrayal, forgiveness and the redemptive power of love. When the immortal race of the \
        Fae destroyed the ancient wall dividing the worlds of Man and Faery, the very fabric of the universe \
        was damaged and now Earth is vanishing bit by bit. Only the long-lost Song of Making—a haunting, \
        dangerous melody that is the source of all life itself—can save the planet. But those who seek the \
        mythic Song—Mac, Barrons, Ryodan and Jada—must contend with old wounds and new enemies, passions \
        that burn hot and hunger for vengeance that runs deep. The challenges are many: The Keltar at war \
        with nine immortals who’ve secretly ruled Dublin for eons, Mac and Jada hunted by the masses, the \
        Seelie queen nowhere to be found, and the most powerful Unseelie prince in all creation determined \
        to rule both Fae and Man."
    }
];

var q = document.querySelectorAll("img.popularImages");

for (var ind = 0; ind < q.length; ind++) {
    var elem = q[ind];

    (function (elem) {
         elem.addEventListener("click", function (event) {
           
            document.getElementById("divAbsolute2").style.display = "block";

            document.querySelector("#divAbsolute2 > img").src = elem.src;
             console.log("elem", elem.src);
             console.log( document.querySelector("#divAbsolute2 > img").src);
            var b = elem.src.replace(/[^0-9]+/g, "");

            for (var j = 0; j < slidePart2.length; j++) {
                 if (b == j) {
                    document.querySelector("#divAbsolute2 > #newP1").textContent = slidePart2[j].title;
                    document.querySelector("#divAbsolute2 > #newP2").textContent = slidePart2[j].simple; 
                 }
            };

        event.stopImmediatePropagation();
        }, false);
    
    }(elem));

};

var button2 = document.querySelector("#divAbsolute2 > #btn2");
button2.addEventListener("click", function (event) {
    document.getElementById("divAbsolute2").style.display = "none";
    event.preventDefault();
}, false);




//ESCAPE&CLOSE BUTTTON

document.body.addEventListener("keydown", function (event) {
    if (event.type === "keydown" && event.keyCode === 27) {
            document.getElementById("divAbsolute2").style.display = "none";
    }
}, false);