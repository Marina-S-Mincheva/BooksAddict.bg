var books = [
    img1 = {
        title: "A piece of the world",
        author: "by Christina Baker Kline",
        pic: "images/img1.jpg"
    },
    img2 = {
        title: "10 Things I Can See from Here ",
        author: "by Carrie Mac",
        pic: "images/img2.jpg"
    },
    img3 = {
        title: "Piecing Me Together",
        author: "by Renée Watson",
        pic: "images/img3.jpg"
    },
    img4 = {
        title: "Birds Art Life",
        author: "by Kyo Maclear",
        pic: "images/img4.jpg"
    },
    img5 = {
        title: "Mouse and Hippo",
        author: "by Mike Twohy",
        pic: "images/img5.jpg"
    },
    img6 = {
        title: "The Animators",
        author: "by Kayla Rae Whitaker",
        pic: "images/img6.jpg"
    },
    img7 = {
        title: "Arthur and Sherlock",
        author: "by Michael Sims",
        pic: "images/img7.jpg"
    },
    img8 = {
        title: "Short",
        author: "by Holly Goldberg Sloan",
        pic: "images/img8.jpg"
    },
    img9 = {
        title: "Stef Soto, Taco Queen",
        author: "by Jennifer Torres",
        pic: "images/img9.jpg"
    },
    img10 = {
        title: "Giant Days Vol. 4",
        author: "by John Allison",
        pic: "images/img10.jpg"
    }
];



for (var index = 0; index < books.length; index++) {
    var obj = books[index];
    // console.log(books[index]);
    var parent = document.querySelector("#wrapper");
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "firstMainDiv");
    newDiv.setAttribute("class", "news");

    var div = document.querySelector("#firstMainDiv");  //main Div
    div.setAttribute("class", "news");
    var firstDivChild = div.childNodes[1];   // main Div first child
    firstDivChild.setAttribute("class", "dot");
    firstDivChild.setAttribute("href", "#");
    var firstAChild = firstDivChild.childNodes[1]; //span
    firstAChild.setAttribute("class", "dottedBorder");
    var lastAChild = firstAChild.childNodes[1];
    lastAChild.setAttribute("class", "pic1 newsEffects");


    var lastDivChild = div.childNodes[3];      // main Div last child
    lastDivChild.setAttribute("class", "titleNews");
    var child = lastDivChild.childNodes[1];
    child.setAttribute("class", "wrapDiv");
    var firstChildChild = child.childNodes[1];
    firstChildChild.setAttribute("href", "#");
    var lastChildChild = child.childNodes[3];
    lastChildChild.setAttribute("class", "subTitleNews");


    if (obj.pic) {
        lastAChild.childNodes[1].setAttribute("src", obj.pic);
    }

    if (obj.title) {
        document.querySelector(".wrapDiv > a > span").textContent = obj.title;
        // console.log(obj.title);
    }
    if (obj.author) {
        document.querySelector(".subTitleNews > span").textContent = obj.author;
        // console.log(obj.author);
    }

    newDiv.innerHTML = div.innerHTML;
    parent.appendChild(newDiv);

    if (parent.childNodes[12]) {
        parent.removeChild(parent.childNodes[12]);
    }

};
