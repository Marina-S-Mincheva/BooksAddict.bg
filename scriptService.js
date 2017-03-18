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
        text: "'Giant Days Vol.4' " +
              "is a springtime story at Sheffield University. Will Susan, Esther, and Daisy make it to summer? "+
              "It is springtime at Sheffield University—the flowers are blooming, the birds are singing, and "+
              "fast-pals Susan, Esther and Daisy continue to survive their freshman year of college. Susan "+
              "is barely dealing with her recent breakup with McGraw, Esther is considering dropping out of "+
              "school, and Daisy is trying to keep everyone and everyTHING from falling apart! Combined with "+
              "house-hunting, indie film festivals, and online dating, can the girls make it to second year? "+
              "The Eisner Award-nominated series from John Allison (Bad Machinery, Scary Go Round) with artist "+
              "Max Sarin delivers another delightful slice-of-life adventure in Giant Days Volume 4. Collects "+
              "issues 13-16."
    },
    text2 = {
        text: "'A piece of the world' \
              is written from the #1 New York Times bestselling author of the smash bestseller Orphan Train, a stunning \
              and atmospheric novel of friendship, passion, and art, inspired by Andrew Wyeth’s mysterious and iconic \
              painting Christina’s World. \
             'Later he told me that he’d been afraid to show me the painting. He thought I wouldn’t like the way he \
              portrayed me: dragging myself across the field, fingers clutching dirt, my legs twisted behind. The arid \
              moonscape of wheatgrass and timothy. That dilapidated house in the distance, looming up like a secret that \
              won’t stay hidden.'\
              To Christina Olson, the entire world was her family’s remote farm in the small coastal town of Cushing, Maine. \
              Born in the home her family had lived in for generations, and increasingly incapacitated by illness, Christina \
              seemed destined for a small life. Instead, for more than twenty years, she was host and inspiration for the \
              artist Andrew Wyeth, and became the subject of one of the best known American paintings of the twentieth century.\
              As she did in her beloved smash bestseller Orphan Train, Christina Baker Kline interweaves fact and fiction in a \
              powerful novel that illuminates a little-known part of America’s history. \
              Told in evocative and lucid prose, A Piece of the World is a story about the burdens and blessings of familyhistory,\
              and how artist and muse can come together to forge a new and timeless legacy."
    },
    text3 = {
        text: "'10 Things I Can See from Here' \
              is perfect for fans of Finding Audrey and Everything, Everything, this is the poignant and uplifting story of Maeve,\
              who is dealing with anxiety while falling in love with a girl who is not afraid of anything.\
                  Think positive. \
                  Don’t worry; be happy. \
                  Keep calm and carry on. \
              Maeve has heard it all before. She’s been struggling with severe anxiety for a long time, and as much as she wishes \
              it was something she could just talk herself out of, it’s not. She constantly imagines the worst, composes obituaries \
              in her head, and is always ready for things to fall apart. To add to her troubles, her mom—the only one who really gets \
              what Maeve goes through—is leaving for six months, so Maeve will be sent to live with her dad in Vancouver.\
              Vancouver brings a slew of new worries, but Maeve finds brief moments of calm (as well as even more worries) with Salix, \
              a local girl who doesn’t seem to worry about anything. Between her dad’s wavering sobriety, her very pregnant stepmom \
              insisting on a home birth, and her bumbling courtship with Salix, this summer brings more catastrophes than even Maeve \
              could have foreseen. Will she be able to navigate through all the chaos to be there for the people she loves?"
    },
    text4 = {
        text: "'Piecing Me Together' \
             is a timely and powerful story about a teen girl from a poor neighborhood striving for success, from acclaimed author \
             Renée Watson. Jade believes she must get out of her neighborhood if she’s ever going to succeed. Her mother says she \
             has to take every opportunity. She has. She accepted a scholarship to a mostly-white private school and even Saturday \
             morning test prep opportunities. But some opportunities feel more demeaning than helpful. Like an invitation to join \
             Women to Women, a mentorship program for “at-risk” girls. Except really, it’s for black girls. From “bad” neighborhoods.\
             But Jade doesn’t need support. And just because her mentor is black doesn’t mean she understands Jade. And maybe there \
             are some things Jade could show these successful women about the real world and finding ways to make a real difference.\
             Friendships, race, privilege, identity—this compelling and thoughtful story explores the issues young women face."
    },
    text5 = {
        text: "'Birds Art Life' \
             is a story where a writer’s search for inspiration, beauty, and solace leads her to birds in this intimate and exuberant meditation \
             on creativity and life—a field guide to things small and significant. When it comes to birds, Kyo Maclear isn’t seeking \
             the exotic. Rather she discovers joy in the seasonal birds that find their way into view in city parks and harbors, \
             along eaves and on wires. In a world that values big and fast, Maclear looks to the small, the steady, the slow \
             accumulations of knowledge, and the lulls that leave room for contemplation. \
             A distilled, crystal-like companion to H is for Hawk, Birds Art Life celebrates the particular madness of chasing \
             after birds in the urban environment and explores what happens when the core lessons of birding are applied to other \
             aspects of art and life. Moving with ease between the granular and the grand, peering into the inner landscape as much \
             as the outer one, this is a deeply personal year-long inquiry into big themes: love, waiting, regrets, endings. If Birds \
             Art Life was sprung from Maclear’s sense of disconnection, her passions faltering under the strain of daily existence, \
             this book is ultimately about the value of reconnection—and how the act of seeking engagement and beauty in small ways \
             can lead us to discover our most satisfying and meaningful lives."
    },
    text6 = {
        text: "'Mouse and Hippo' \
             is a perfect story for great friendships which come along when we least expect them, and this is especially true in Mouse and Hippo, New Yorker \
             cartoonist Mike Twohy’s hilarious tale of a chance encounter on a summer afternoon. Meticulous Mouse is focused on \
             getting the waves just right as he paints at the lake, easel atop a gray rock. But, oops! The rock is actually Hippo, \
             who accidentally jolts Mouse into the water. Hippo rescues him, and in thanks, Mouse offers to paint his portrait. \
             Hippo preens and poses while Mouse uses his biggest brush—and paints the whole canvas gray. “My paper was too small \
             to fit all of you in,” Mouse explains. But Hippo is far from disappointed, and he rushes home to hang the monochrome \
             masterpiece over his bathtub (or rather, a reedy nook of the lake). When Hippo returns the favor by painting a portrait \
             of Mouse, he uses the tiniest brush, and the finished painting is a carefully crafted dot. “I love it!” Mouse says. \
             “You made me look so cute!”\
             With their appreciation for each other’s point of view, Mouse and Hippo become fast, if unlikely, friends. They work \
             together to fit Mouse’s portrait inside his mouse-sized house. Mouse invites Hippo to visit his painting any time, and \
             though Hippo can only peer in with one large eyeball, the new friendship is sure to last well beyond the pages of this clever book.\
             Twohy’s zany humor is a rare treat. His beguiling characters burst with so much personality that readers will long for a sequel.!"
    },
    text7 = {
        text: "'The Animators' \
            is a story where in the male-dominated field of animation, Mel Vaught and Sharon Kisses are a dynamic duo, the friction of their \
            differences driving them: Sharon, quietly ambitious but self-doubting; Mel, brash and unapologetic, always the life of \
            the party. Best friends and artistic partners since the first week of college, where they bonded over their working-class \
            roots and obvious talent, they spent their twenties ensconced in a gritty Brooklyn studio. Working, drinking, laughing. Drawing: \
            Mel, to understand her tumultuous past, and Sharon, to lose herself altogether.\
            Now, after a decade of striving, the two are finally celebrating the release of their first full-length feature, which transforms \
            Mel’s difficult childhood into a provocative and visually daring work of art. The toast of the indie film scene, they stand at the \
            cusp of making it big. But with their success come doubt and destruction, cracks in their relationship threatening the delicate \
            balance of their partnership. Sharon begins to feel expendable, suspecting that the ever-more raucous Mel is the real artist. During \
            a trip to Sharon’s home state of Kentucky, the only other partner she has ever truly known—her troubled, charismatic childhood best \
            friend, Teddy—reenters her life, and long-buried resentments rise to the surface, hastening a reckoning no one sees coming."
    },
    text8 = {
        text: "'Arthur and Sherlock' is a great book. \
            As a young medical student, Arthur Conan Doyle studied in Edinburgh under the vigilant eye of a diagnostic genius, \
            Dr. Joseph Bell.Doyle often observed Bell identifying a patient's occupation, hometown, and ailments from the smallest details \
            of dress, gait, and speech. \Although Doyle was training to be a surgeon, he was meanwhile cultivating essential knowledge \
            that would feed his literary dreams and help him develop the most iconic detective in fiction. Michael Sims traces the \
            circuitous development of Conan Doyle as the father of the modern mystery, from his early days in Edinburgh surrounded by \
            poverty and violence, through his escape to University (where he gained terrifying firsthand knowledge of poisons), leading \
            to his own medical practice in 1882. Five hardworking years later--after Doyle's only modest success in both medicine and \
            literature--Sherlock Holmes emerged in A Study in Scarlet. Sims deftly shows Holmes to be a product of Doyle's varied \
            adventures in his personal and professional life, as well as built out of the traditions of Edgar Allan Poe, Émile Gaboriau, \
            Wilkie Collins, and Charles Dickens--not just a skillful translator of clues, but a veritable superhero of the mind in the \
            tradition of Doyle's esteemed teacher."
    },
    text9 = {
        text: "'Short' tell us: \
            Here is what most people today don’t know about me: I was very short as a kid. How short? I was the smallest girl in my \
            class every year until seventh grade. I was positioned up front in all of the school photos. I bought my clothing in the \
            little kids’ department and didn’t advance like my friends to the pre-teen section of the store. \
            My strongest memory of that time was the day the Principal came to class to get me. We were all afraid of Mr. Hockstatter. \
            Every day he wore a narrow black tie and a white, short sleeve shirt, black pants, and uncomfortable looking shoes. He had \
            square glasses and a flat-top haircut that was severe. The Beatles and mod fashion were happening all around us but he wasn’t \
            buying it. I think he had been a Marine. \
            Principal Hockstatter didn’t say anything as he led me from the classroom outside onto the blacktop playground. He had a big, \
            wind-up tape measurer and a canvas sack filled with softballs. I carried my blue nylon coat. I was both special and terrified. \
            It was a great feeling. \
            It started to rain. This was Oregon so that didn’t mean much. Girls were not allowed to wear pants at school back then. I had \
            on cotton tights and a dress. I slipped into my shiny blue coat.\
            Principal Hockstatter set down the sack and rolled out the measuring tape to mark the distance I would need to reach to \
            qualify for the President’s Physical Fitness Award. He then handed me a softball and instructed me to throw.\
            I did."
    },
    text10 = {
        text: "'Stef Soto, Taco Queen' \
            is written by Jennifer Torres, her latest book, “Stef Soto, Taco Queen,” came from a lifetime of experiences. \
            “A lot of inspiration came from my own upbringing. I come from a Mexican-American family,” she said. \
            In Torres’ novel, Stef Soto wants to ride the city bus like her former friend Julia, or even just the school bus. \
            She wishes that she could go to a concert like her classmates. \
            “When I was a kid, I felt a little like Stef feels, that her parents were a little overprotective,” Torres said.\
            Now, as the mother of a 3-year-old and a 7-year-old, she sympathizes with Stef’s parents. \
            In the story, Estefania “Stef” Soto is tired of her classmates seeing her as the Taco Queen. Her immigrant parents \
            run a taco truck called Tia Perla, but she wishes her father would get a “normal” job. \
            “I feel very privileged to share a story that a young reader can maybe see him or herself in,” Torres said.\
            Growing up, she was a reader. Books helped her to learn about the world and see things from other people’s perspectives. \
            She was also very lucky to have parents who read to her, she said. \
            As a mother, she spends a lot of time reading to her children, and she’s seen how powerful stories are for them. \
            Books can teach children about others, but it can also show them that they’re not alone. It’s important for children \
            to read about characters who are different from themselves, but it’s also important they have characters they see \
            themselves in, too, Torres said. \
            “People who write for young readers play such a powerful role in the education of young children,” she said."
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
                    document.querySelector("#divAbsolute > p").textContent = myText[j].text;
                 } else if (b > j) {
                    document.querySelector("#divAbsolute > p").textContent = myText[0].text; 
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












