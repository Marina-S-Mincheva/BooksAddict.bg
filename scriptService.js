var books = [
    img1 = {
        title: "'A piece of the world'",
        author: "by Christina Baker Kline",
        pic: "images/img1.jpg"
    },
    img2 = {
        title: "'10 Things I Can See...'",
        author: "by Carrie Mac",
        pic: "images/img2.jpg"
    },
    img3 = {
        title: "'Piecing Me Together'",
        author: "by Renée Watson",
        pic: "images/img3.jpg"
    },
    img4 = {
        title: "'Birds Art Life'",
        author: "by Kyo Maclear",
        pic: "images/img4.jpg"
    },
    img5 = {
        title: "'Mouse and Hippo'",
        author: "by Mike Twohy",
        pic: "images/img5.jpg"
    },
    img6 = {
        title: "'The Animators'",
        author: "by Kayla Rae Whitaker",
        pic: "images/img6.jpg"
    },
    img7 = {
        title: "'Arthur and Sherlock'",
        author: "by Michael Sims",
        pic: "images/img7.jpg"
    },
    img8 = {
        title: "'Short'",
        author: "by Holly Goldberg Sloan",
        pic: "images/img8.jpg"
    },
    img9 = {
        title: "'Stef Soto, Taco Queen'",
        author: "by Jennifer Torres",
        pic: "images/img9.jpg"
    },
    img10 = {
        title: "'Giant Days Vol. 4'",
        author: "by John Allison",
        pic: "images/img10.jpg"
    }
];

for (var index = 0; index < books.length; index++) {
    var obj = books[index];
    var parent = document.querySelector("#wrapper");
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "firstMainDiv");
    newDiv.setAttribute("class", "news");


    var div = document.querySelector("#firstMainDiv");  //main Div
    div.setAttribute("class", "news");
    var firstDivChild = div.childNodes[1];   // main Div first child
    firstDivChild.setAttribute("class", "dot");
    firstDivChild.setAttribute("href", "#divAbsolute");
    var firstAChild = firstDivChild.childNodes[1]; //span
    firstAChild.setAttribute("class", "dottedBorder");
    var lastAChild = firstAChild.childNodes[1];
    lastAChild.setAttribute("class", "pic1 newsEffects");


    var lastDivChild = div.childNodes[3];      // main Div last child
    lastDivChild.setAttribute("class", "titleNews");
    var child = lastDivChild.childNodes[1];
    child.setAttribute("class", "wrapDiv");
    var lastChildChild = child.childNodes[3];
    lastChildChild.setAttribute("class", "subTitleNews");


    if (obj.pic) {
        lastAChild.childNodes[1].setAttribute("src", obj.pic);
        lastAChild.childNodes[1].setAttribute("class", "picAbsolute");
    }
    if (obj.title) {
        document.querySelector(".wrapDiv > span").textContent = obj.title;
    }
    if (obj.author) {
        document.querySelector(".subTitleNews > span").textContent = obj.author;
    }


    newDiv.innerHTML = div.innerHTML;
    parent.appendChild(newDiv);


    if (parent.childNodes[12]) {
        parent.removeChild(parent.childNodes[12]);
    }
};







//DIV ABSOLUTE


var myText = [
    text1 = {
        text: "                                                         'Giant Days Vol.4'\n"+
               "\n  Is a springtime story at Sheffield University. Will Susan, Esther, and Daisy make it to summer?" 
              +
              "It is \nspringtime at Sheffield University—the flowers are blooming, the birds are singing, and\n"
               +
              "fast-pals Susan, Esther and Daisy continue to survive their freshman year of college. Susan\n" 
              +
              "is barely dealing with her recent breakup with McGraw, Esther is considering dropping out of\n"
               +
              "school, and Daisy is trying to keep everyone and everyTHING from falling apart! Combined with\n" 
              +
              "house-hunting, indie film festivals, and online dating, can the girls make it to second year?\n"
              +
               "But I’m missing at least a volumes worth of events. And yet, I had no trouble getting\n"
               +
              "into this volume.\n  No lengthy preamble was needed, nor really wanted, the story just gets off running,\n"
               +
              "and is so relatable that you pick up exactly who these characters are and what has happened easily.\n"
               +
              "It works for those who look forward to the heady university days, those currently in university, or\n"
               +
              "those long out of the education experience, and looking for that nostalgic trip down memory lane.\n"
               +
              "Here’s the thing: it doesn’t seem to matter where you went to university, the comically heightened\n" 
              +
              "scenarios presented in Giant Days are so universal, that you can read them and feel like it is exactly\n"
               +
              "how university was for you."
    },
    text2 = {
        text: "                                                           'A piece of the world'\n "+
              "\n   is written from the #1 New York Times bestselling author of the smash bestseller Orphan Train,\n a stunning" +
              "and atmospheric novel of friendship, passion, and art, inspired by Andrew Wyeth’s\n mysterious and iconic" +
              "painting Christina’s World.\n" +
              "   'Later he told me that he’d been afraid to show me the painting. He thought I wouldn’t like the\n way he" +
              "portrayed me: dragging myself across the field, fingers clutching dirt, my legs twisted\n behind. The arid" +
              "moonscape of wheatgrass and timothy. That dilapidated house in the distance,\n looming up like a secret that" +
              "won’t stay hidden.\n" +
              "   To Christina Olson, the entire world was her family’s remote farm in the small coastal town of\n Cushing, Maine." +
              "Born in the home her family had lived in for generations, and increasingly\n incapacitated by illness, Christina" +
              "seemed destined for a small life. Instead, for more than twenty\n years, she was host and inspiration for the" +
              "artist Andrew Wyeth, and became the subject of one\n of the best known American paintings of the twentieth century." +
              "As she did in her beloved smash\n bestseller Orphan Train, Christina Baker Kline interweaves fact and fiction in a" +
              "powerful\n novel that illuminates a little-known part of America’s history."
    },
    text3 = {
        text: "                                                           '10 Things I Can See from Here'\n " +
              "\n   is perfect for fans of Finding Audrey and Everything, Everything, this is the poignant and uplifting\n story of Maeve," +
              "who is dealing with anxiety while falling in love with a girl who is not afraid\n of anything.\n" +
              "\n     'Think positive." +
              "\n      Don’t worry; be happy." +
              "\n      Keep calm and carry on.'\n" +
              "\n   Maeve has heard it all before. She’s been struggling with severe anxiety for a long time, and as\n much as she wishes" +
              "it was something she could just talk herself out of, it’s not. She constantly\n imagines the worst, composes obituaries" +
              "in her head, and is always ready for things to fall apart.\n To add to her troubles, her mom—the only one who really gets" +
              "what Maeve goes through—is\n leaving for six months, so Maeve will be sent to live with her dad in Vancouver." 
            //   "   Vancouver brings a slew of new worries, but Maeve finds brief moments\n of calm (as well as even more worries) with Salix," +
            //   "a local girl\n who doesn’t seem to worry about anything. Between her dad’s wavering sobriety,\n her very pregnant stepmom" +
            //   "insisting on a home birth, and her\n bumbling courtship with Salix, this summer brings more catastrophes than even Maeve\n" +
            //   "could have foreseen. Will she be able to navigate through all the chaos\n to be there for the people she loves?"
    },
    text4 = {
        text: "                                                               'Piecing Me Together'\n" +
             "\n   is a timely and powerful story about a teen girl from a poor neighborhood striving for success,\n from acclaimed author" +
             "Renée Watson. Jade believes she must get out of her neighborhood if she’s\n ever going to succeed. Her mother says she" +
             "has to take every opportunity. She has. She accepted a\n scholarship to a mostly-white private school and even Saturday" +
             "morning test prep opportunities.\n But some opportunities feel more demeaning than helpful. Like an invitation to join" +
             "Women\n to Women, a mentorship program for “at-risk” girls. Except really, it’s for black girls. From “bad”\n neighborhoods." +
             "\n   But Jade doesn’t need support. And just because her mentor is black doesn’t mean\n she understands Jade. And maybe there" +
             "are some things Jade could show these successful women\n about the real world and finding ways to make a real difference." +
             "Friendships, race, privilege,\n identity—this compelling and thoughtful story explores the issues young women face."
    },
    text5 = {
        text: "                                                                'Birds Art Life'\n" +
             "\n    is a story where a writer’s search for inspiration, beauty, and solace leads her to birds in this\n intimate and exuberant meditation" +
             "on creativity and life—a field guide to things small and signi-\n ficant. When it comes to birds, Kyo Maclear isn’t seeking" +
             "the exotic. Rather she discovers joy in the\n seasonal birds that find their way into view in city parks and harbors," +
             "along eaves and on wires. In\n a world that values big and fast, Maclear looks to the small, the steady, the slow" +
             "accumulations\n of knowledge, and the lulls that leave room for contemplation.\n" +
             "   A distilled, crystal-like companion to H is for Hawk, Birds Art Life celebrates the particular madne-\n ss of chasing" +
             "after birds in the urban environment and explores what happens when the core less-\n ons of birding are applied to other" +
             "aspects of art and life. Moving with ease between the granular\n and the grand, peering into the inner landscape as much " +
             "as the outer one, this is deeply personal\n year-long inquiry into big themes: love, waiting, regrets, endings. If Birds" +
             "Art Life was sprung\n from Maclear’s sense of disconnection, her passions faltering under the strain of daily\n existence," +
             " this book is ultimately about the value of reconnection—and how the act of seeking\n engagement and beauty in small ways" +
             "can lead us to discover our most satisfying\n and meaningful lives."
    },
    text6 = {
        text: "                                                                 'Mouse and Hippo'\n" +
             "\n   is a perfect story for great friendships which come along when we least expect them, and this is\n especially true in Mouse and Hippo, New Yorker" +
             "cartoonist Mike Twohy’s hilarious tale of a chance\n encounter on a summer afternoon. Meticulous Mouse is focused on" +
             "getting the waves just right as\n he paints at the lake, easel atop a gray rock. But, oops! The rock is actually Hippo," +
             "who accidentally\n jolts Mouse into the water. Hippo rescues him, and in thanks, Mouse offers to paint his portrait.\n" +
             "  Hippo preens and poses while Mouse uses his biggest brush—and paints the whole canvas gray.\n    “My paper was too small" +
             "to fit all of you in,”\n Mouse explains. But Hippo is far from disappointed, and he rushes home to hang the monochrome\n" +
             " masterpiece over his bathtub (or rather, a reedy nook of the lake). When Hippo returns the favor\n by painting a portrait" +
             "of Mouse, he uses the tiniest brush, and the finished painting is a carefullyzn\n crafted dot. “I love it!” Mouse says.\n" +
             "      “You made me look so cute!”\n" + 
             " With their appreciation for each other’s point of view, Mouse and Hippo become fast, if unlikely,\n friends. They work" +
             "together to fit Mouse’s portrait inside his mouse-sized house."
    },
    text7 = {
        text: "                                                                 'The Animators'\n" +
            "\n   is a story where in the male-dominated field of animation, Mel Vaught and Sharon Kisses are a\n dynamic duo, the friction of their" +
            "differences driving them: Sharon, quietly ambitious but self-\n doubting; Mel, brash and unapologetic, always the life of" +
            "the party. Best friends and artistic partners\n since the first week of college, where they bonded over their working-class" +
            "roots and obvious\n talent, they spent their twenties ensconced in a gritty Brooklyn studio. Working, drinking, laughing.\n Drawing:" +
            "Mel, to understand her tumultuous past, and Sharon, to lose herself altogether.\n" +
            "   Now, after a decade of striving, the two are finally celebrating the release of their first full-\n length feature, which transforms" +
            "Mel’s difficult childhood into a provocative and visually daring\n work of art. The toast of the indie film scene, they stand at the" +
            "cusp of making it big. But with\n their success come doubt and destruction, cracks in their relationship threatening the delicate\n" +
            " balance of their partnership. Sharon begins to feel expendable, suspecting that the ever-more\n raucous Mel is the real artist. During" +
            "a trip to Sharon’s home state of Kentucky, the only other\n partner she has ever truly known—her troubled, charismatic childhood best" +
            "friend."
    },
    text8 = {
        text: "                                                         'Arthur and Sherlock' is a great book.\n" +
            "\n   As a young medical student, Arthur Conan Doyle studied in Edinburgh under the vigilant eye of a\n diagnostic genius," +
            "Dr. Joseph Bell.Doyle often observed Bell identifying a patient's occupation,\n hometown, and ailments from the smallest details" +
            "of dress, gait, and speech.\n   Although Doyle was training to be a surgeon, he was meanwhile cultivating essential knowledge\n" +
            " that would feed his literary dreams and help him develop the most iconic detective in fiction.\n Michael Sims traces the" +
            "circuitous development of Conan Doyle as the father of the modern mys-\n tery, from his early days in Edinburgh surrounded by" +
            "poverty and violence, through his escape to\n University (where he gained terrifying firsthand knowledge of poisons), leading" +
            "to his own medical\n practice in 1882. Five hardworking years later--after Doyle's only modest success in both medicine\n and" +
            "literature--Sherlock Holmes emerged in A Study in Scarlet.\n   Sims deftly shows Holmes to be a\n product of Doyle's varied" +
            "adventures in his personal and professional life, as well as built out of\n the traditions of Edgar Allan Poe, Émile Gaboriau," +
            "Wilkie Collins, and Charles Dickens--not just\n a skillful translator of clues, but a veritable superhero of the mind in the" +
            "tradition of Doyle's\n esteemed teacher."
    },
    text9 = { 
        text: "                                                                     'Short'\n" +
            "\n   Here is what most people today don’t know about me: I was very short as a kid. How short? I was\n the smallest girl in my" +
            "class every year until seventh grade. I was positioned up front in all of the\n school photos. I bought my clothing in the" +
            "little kids’ department and didn’t advance like my friends\n to the pre-teen section of the store.\n" +
            "   My strongest memory of that time was the day the Principal came to class to get me. We were\n all afraid of Mr. Hockstatter." +
            "Every day he wore a narrow black tie and a white, short sleeve shirt,\n black pants, and uncomfortable looking shoes. He had" +
            "square glasses and a flat-top haircut that\n was severe. The Beatles and mod fashion were happening all around us but he wasn’t" +
            "buying it.\n I think he had been a Marine.\n" +
            "   Principal Hockstatter didn’t say anything as he led me from the classroom outside onto the black-\n top playground. He had a big," +
            "wind-up tape measurer and a canvas sack filled with softballs.\n I carried my blue nylon coat. I was both special and terrified." +
            "It was a great feeling.\n" +
            "   It started to rain. I did."
    },
    text10 = {
        text: "                                                                'Stef Soto, Taco Queen'\n" +
            "\n   is written by Jennifer Torres, her latest book, “Stef Soto, Taco Queen,” came from a lifetime of\n experiences." +
            "“A lot of inspiration came from my own upbringing. I come from a Mexican-American\n family,” she said." +
            "In Torres’ novel, Stef Soto wants to ride the city bus like her former friend\n Julia, or even just the school bus." +
            "She wishes that she could go to a concert like her classmates.\n" +
            "   “When I was a kid, I felt a little like Stef feels, that her parents were a little overprotective,”\n Torres said." +
            "Now, as the mother of a 3-year-old and a 7-year-old, she sympathizes Stef’s parents.\n" +
            "   In the story, Estefania “Stef” Soto is tired of her classmates seeing her as the Taco Queen. Her\n immigrant parents" +
            "run a taco truck called Tia Perla, but she wishes her father would get a “normal”\n job." +
            "“I feel very privileged to share a story that a young reader can maybe see him or herself in,\n” Torres said." +
            "Growing up, she was a reader. Books helped her to learn about the world and see\n things from other people’s perspectives." +
            "She was also very lucky to have parents who read to her,\n she said.\n" +
            "   As a mother, she spends a lot of time reading to her children, and she’s seen how powerful\n stories are for them.\n"
            // "Books can teach children about others, but it can also show them that they’re not alone. It’s important for children" +
            // "to read about characters who are different from themselves, but it’s also important they have characters they see" +
            // "themselves in, too, Torres said." +
            // "“People who write for young readers play such a powerful role in the education of young children,” she said."
    }
];



var a = document.querySelectorAll(".pic1 > img.picAbsolute");

for (var i = 0; i < a.length; i++) {
    var t = a[i];

    (function (t) {
         t.addEventListener("click", function (event) {
            document.getElementById("divAbsolute").style.display = "block";

            document.querySelector("#divAbsolute > img").src = t.src;
            console.log(t.src);
            var b = t.src.replace(/[^0-9]+/g, "");

            for (var j = 0; j < myText.length; j++) {
                 if (b == j) {
                    document.querySelector("#divAbsolute > pre").textContent = myText[j].text;
                 } else if (b > j) {
                    document.querySelector("#divAbsolute > pre").textContent = myText[0].text; 
                 }
            };

        event.stopImmediatePropagation();
        }, false);
    
    }(t));

};

var button = document.querySelector("#divAbsolute > #btn");
button.addEventListener("click", function (event) {
    document.getElementById("divAbsolute").style.display = "none";
    event.preventDefault();
}, false);






//ESCAPE&CLOSE BUTTTON

document.body.addEventListener("keydown", function (event) {
    if (event.type === "keydown" && event.keyCode === 27) {
            document.getElementById("divAbsolute").style.display = "none";
    }
}, false);












