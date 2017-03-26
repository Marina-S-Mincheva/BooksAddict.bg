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
        title: " 'Saturdays at Sea' ",
        simple: " This bestselling series comes to a rousing conclusion as Celie and her family \
        set sail on a ship made from their beloved Castle! After constructing a grand ship built \
        from parts of the Castle, Celie, Lilah and Rolf are ready to set sail! But on its maiden \
        voyage, the Ship steers them far off course into uncharted waters. Celie and her sister, \
        Lilah, hope that the Ship is heading to the ancient island where unicorns once roamed, but \
        as the journey grows longer and supplies run low, they could be in trouble. Can Celie and \
        her family trust the Ship just as they’ve always trusted the Castle? Readers will delight \
        in this adventure-filled conclusion to Jessica Day George’s bestselling series. Jessica \
        Day George's magical bestselling series comes to a rousing conclusion as Celie and her \
        family set sea on a grand ship made in the likeness of their beloved Castle! There is never \
        a dull moment for Celie and her family in Castle Glower--even when they're not in the Castle \
        itself! After traveling to the seaside kingdom of Lilah's betrothed prince, Lulath, Celie and \
        her companions are busy training griffins, enjoying wedding festivities, and finishing construction \
        of a grand ship built from parts of the Castle. But on their maiden voyage, the Ship steers them \
        far off course into uncharted waters. Celie and Lilah hope that the Ship is taking them to the \
        ancient island where unicorns once roamed, but as the journey grows longer and supplies run low, \
        they are in trouble. Celie, Lilah, and Rolf know they must trust the Ship as they trust the Castle, \
        but what if they never reach land again?"
    },
    txt2 = {
        title: " 'Pip Bartlett's Guide to Unicorn Training' ",
        simple: "From bestselling authors Maggie Stiefvater and Jackson Pearce comes the second \
        installment in a series bursting with magical creatures, whimsical adventures, and quirky \
        illustrations. Now that the mystery of the exploding Fuzzles has been solved, it's up to \
        Pip and Tomas to save their town from another magical troublemaker . . . the Unicorn. \
        Pip Bartlett has a way with magical creatures.But even she’s challenged by Regent \
        Maximus, a unicorn who’s afraid of everything. With the help of her friend Tomas, Pip has to \
        get Regent Maximus ready for a big unicorn competition—even if Regent Maximus would rather do \
        anything than compete. Making matters worse, someone mysterious is trying to win the competition \
        by cheating—and if Pip and Tomas don’t stop the bad things from happening, it’s not only Regent \
        Maximus who’ll have reason to be afraid."
    },
    txt3 = {
        title: " 'Bunny's Book Club' ",
        simple: "Frances Gilbert at Doubleday has acquired world rights to Annie Silvestro's Bunny's \
        Book Club, illustrated by Tatjana Mai-Wyss, It tells the story of a book-loving bunny who sneaks \
        into the town library and borrows books for all his forest friends. It will pub in spring 2017. \
        Liza Voges at Eden Street represented the author; the illustrator was unagented. Bunny, a rabbit, \
        has been eavesdropping on the local library’s outdoor story time and fallen in love with how books \
        can spark an array of adventures: “As he listened, Bunny imagined himself climbing mountains... \
        captaining a ship... ruling a kingdom.” But now that it’s sweater weather, and story time has moved \
        indoors, what will Bunny do? The answer isn’t exactly legal (book return slots are intended for books, \
        after all) and it gets a little out of hand (pretty soon Bunny’s friends all want in on his after-hours \
        library excursions). But the librarian turns out to be forgiving where these trans-species bibliophiles \
        are concerned, and since “All libraries have rules,” Bunny and his accomplices end up with their own \
        library cards. Debut author Silvestro can sometimes be too literal and earnest (“He followed his nose \
        to the adventure section”), but she makes the pleasures of reading abundantly clear. Mai-Wyss (The Passover \
        Lamb) smartly divides the storytelling into small, telling moments, amplifying each vignette with a fine eye \
        for detail and warmhearted humor."
    },
    txt4 = {
        title: " 'The Dragon with a Chocolate Heart' ",
        simple: "Aventurine is the fiercest, bravest dragon there is. And she's ready to prove it to her family by \
        leaving the safety of their mountain cave and capturing the most dangerous prey of all: a human. But when \
        the human she finds tricks her into drinking enchanted hot chocolate, Aventurine is transformed into a puny \
        human girl with tiny blunt teeth, no fire, and not one single claw. But she's still the fiercest creature \
        in the mountains -- and now she's found her true passion: chocolate! All she has to do is get herself an \
        apprenticeship (whatever that is) in a chocolate house (which sounds delicious), and she'll be conquering \
        new territory in no time...won't she?. Aventurine is the fiercest, bravest kind of dragon, and she's ready \
        to prove it to her family by leaving the safety of their mountain cave and capturing the most dangerous prey \
        of all: a human. But when the human she captures tricks her into drinking enchanted hot chocolate, she finds \
        herself transformed into a puny human girl with tiny blunt teeth, no fire, and not one single claw. She's still \
        the fiercest creature in these mountains though – and now she's found her true passion: chocolate! All she has \
        to do is walk on two feet to the human city, find herself an apprenticeship (whatever that is) in a chocolate \
        house (which sounds delicious), and she'll be conquering new territory in no time … won't she? Wild and reckless \
        young Aventurine will bring havoc to the human city – but what she doesn't expect is that she'll find real \
        friendship there too, along with betrayal, deception, scrumptious chocolate and a startling new understanding \
        of what it means to be a human (and a dragon). A pinch of Ella Enchanted, a sprinkling of How to Train your \
        Dragon and a generous helping of Eva Ibbotsen –The Dragon with a Chocolate Heart is entirely delicious."
    },
    txt5 = {
        title: " 'Simon Thorn and the Viper's Pit' ",
        simple: "The excitement continues for the secret race of animal shape-shifters with a hero “worthy of a young \
        Harry Potter” (Booklist Online). Simon Thorn's life is almost unrecognizable from a few months ago. Along with \
        a surprise twin brother and an uncle he never knew, Simon has also found his first real friends to hang out, train, \
        and study with at the secret Animalgam Academy. The only piece missing is his mother, held captive by his evil \
        grandfather, Orion, who's bent on taking over the five kingdoms. To rescue his mother, Simon sets off cross-country \
        with his friends to the reptile kingdom, battling rogue Animalgams and their own doubts and torn loyalties along the way. \
        But if he’s going to stop Orion, Simon will need to keep him from gathering together the fragments of a terrible weapon, \
        or the lives of everyone Simon loves will be at risk. With action and adventure, this story is perfect for fans of Rick \
        Riordan and Brandon Mull. Simon Thorn only recently discovered that he's an Animalgam--one of a secret race who can shift \
        into animals. Now, for the first time in his life Simon has real friends to train and study with at the secret Animalgam \
        Academy. The only missing part is his mother, held captive by his evil grandfather, Orion, who's bent on taking over the \
        animal world. To rescue his mom, Simon must head cross-country with his friends, battling rogue Animalgams and their own \
        doubts and torn loyalties along the way. But if Simon's going to succeed, he will need to keep Orion from gathering \
        together the fragments of a terrible weapon, or the lives of everyone Simon loves will be at risk. With plenty of action \
        and adventure and characters full of heart, this story is perfect for fans of Rick Riordan and Brandon Mull."
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






//ZAGRUSKA
Array.prototype.forEach.call(document.querySelectorAll("iframe"), function (element) {
    element.addEventListener("load", function () {
       setTimeout(function () {
            document.getElementById("iframe1").style.display = "inline-block";
            document.getElementById("iframe2").style.display = "inline-block";
            document.getElementById("zagruskaPng1").style.display = "none";
            document.getElementById("zagruskaPng2").style.display = "none";
        }, 1000);
    }, false);
});


// Когато преключи лоадване на страница...
document.addEventListener("DOMContentLoaded", function () {
    function checkCaruselButtonState(elementsWrapper, buttonLeft, buttonRight) {
        buttonLeft.classList.remove('disabled');
        buttonRight.classList.remove('disabled');

        if (elementsWrapper.offsetWidth + elementsWrapper.scrollLeft >= elementsWrapper.scrollWidth) {
            buttonRight.classList.add('disabled');
        }

        if (elementsWrapper.scrollLeft === 0) {
            buttonLeft.classList.add('disabled');
        }
    }

    document.querySelectorAll('.carusel').forEach(function(container) {
        var buttonLeft = container.querySelector('.left');
        var buttonRight = container.querySelector('.right');
        var elementsWrapper = container.querySelector('ol');

        checkCaruselButtonState(elementsWrapper, buttonLeft, buttonRight);

        buttonLeft.addEventListener('click', function(event) {
            event.preventDefault();
            elementsWrapper.scrollLeft = elementsWrapper.scrollLeft - elementsWrapper.clientWidth;
            
            checkCaruselButtonState(elementsWrapper, buttonLeft, buttonRight);
        });

        buttonRight.addEventListener('click', function(event) {
            event.preventDefault();
            elementsWrapper.scrollLeft = elementsWrapper.scrollLeft + elementsWrapper.clientWidth;

            checkCaruselButtonState(elementsWrapper, buttonLeft, buttonRight); 
        });
    });
});