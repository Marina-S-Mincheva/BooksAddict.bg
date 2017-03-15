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
    firstDivChild.setAttribute("href", "#divAbsolute");
    var firstAChild = firstDivChild.childNodes[1]; //span
    firstAChild.setAttribute("class", "dottedBorder");
    var lastAChild = firstAChild.childNodes[1];
    lastAChild.setAttribute("class", "pic1 newsEffects");


    var lastDivChild = div.childNodes[3];      // main Div last child
    lastDivChild.setAttribute("class", "titleNews");
    var child = lastDivChild.childNodes[1];
    child.setAttribute("class", "wrapDiv");
    // var firstChildChild = child.childNodes[1];
    // firstChildChild.setAttribute("href", "#divAbsolute");
    var lastChildChild = child.childNodes[3];
    lastChildChild.setAttribute("class", "subTitleNews");


    if (obj.pic) {
        lastAChild.childNodes[1].setAttribute("src", obj.pic);
        lastAChild.childNodes[1].setAttribute("class", "picAbsolute");
    }

    if (obj.title) {
        document.querySelector(".wrapDiv > span").textContent = obj.title;
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





//DIV ABSOLUTE
var a = document.querySelectorAll(".picAbsolute");

for (var i = 0; i < a.length; i++) {
    var t = a[i];
    t.addEventListener("click", function (event) {
        document.getElementById("divAbsolute").style.display = "block";
        event.stopImmediatePropagation();
    }, false);
    t.addEventListener("click", function (event) {
        document.querySelector("#divAbsolute > img").src = t.src;
        // console.log(document.querySelector("#divAbsolute > img").src);
    }, false);
    console.log(t);
    console.log(t.getAttribute("src"));
    console.log(t.src);
};


var button = document.querySelector("#divAbsolute > button");
button.addEventListener("click", function (event) {
    document.getElementById("divAbsolute").style.display = "none";
    event.preventDefault();
}, false);


// Array.prototype.forEach.call(document.querySelectorAll(".picAbsolute"), function (element) {
//     element.addEventListener("click", function () {
//         document.querySelector("#divAbsolute > img").src = element.src;
//     }, false);
//     console.log(element);
//     console.log(element.src);
// });

