function Create(a) {
    var parent1 = document.createElement(a);
    var element = document.body;
    for (var i = 1; i < arguments.length; i++) {
        var child = arguments[i];
        if (typeof child === "string") {
            child = document.createElement(child);
            parent1.appendChild(child);
        } else if (Array.isArray(arguments[i])) {
            if (typeof arguments[i][0] === "string") {
                var parent2 = document.createElement(arguments[i][0]);
                parent1.appendChild(parent2);
            } for (var j = 1; j < arguments[i].length; j++) {
                if (!Array.isArray(arguments[i][j])) {
                    var child2 = arguments[i][j];
                    child2 = document.createElement(child2);
                    parent2.appendChild(child2);
                } else if (Array.isArray(arguments[i][j])) {
                    var newArray = arguments[i][j];
                    var parent3 = document.createElement(newArray[0]);
                    parent2.appendChild(parent3);
                    for (var p = 1; p < newArray.length; p++) {
                        if (!Array.isArray(arguments[i][j][p])) {
                            var child10 = arguments[i][j][p];
                            child10 = document.createElement(child10);
                            parent3.appendChild(child10);
                        } else if (Array.isArray(arguments[i][j][p])) {
                            var lastArr = arguments[i][j][p];
                            var parent4 = document.createElement(lastArr[0]);
                            parent3.appendChild(parent4);
                            for (var k = 1; k < lastArr.length; k++) {
                                if (!Array.isArray(arguments[i][j][p][k])) {
                                    var child4 = lastArr[k];
                                    child4 = document.createElement(child4);
                                    parent4.appendChild(child4);
                                } else if (Array.isArray(arguments[i][j][p][k])) {
                                    for (var d = 0; d < lastArr[k].length; d++) {
                                        var last = arguments[i][j][p][k][d]; // array
                                        var parent5 = document.createElement(last[0]);
                                        parent4.appendChild(parent5);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } element.appendChild(parent1);
    } console.log(parent1);
}

Create.prototype.setAttr = function() {
    var newsDiv = document.body.childNodes[2]; // main div
    if (newsDiv) {
        newsDiv.setAttribute("class", "news");
    }

    var fChild = newsDiv.childNodes[0];
    if (fChild) {
        fChild.setAttribute("class", "dot");
    }

    var fChildFChild = fChild.firstChild; // first child of a --- span
    if (fChildFChild) {
        fChildFChild.setAttribute("class", "dottedBorder");
    }

    var lastDiv = fChildFChild.firstChild; // first child of span
    if (lastDiv) {
        lastDiv.setAttribute("class", "newsEffects");
    }

    var image = lastDiv.firstChild; // image
    if (image) {
        image.setAttribute("class", "pic1");
    }

    var lChild = newsDiv.lastChild; // last DIV child --- a
    if (lChild) {
        lChild.setAttribute("class", "titleNews");
    }

    var lChildFChiild = lChild.firstChild;
    if (lChildFChiild) {
        lChildFChiild.setAttribute("class", "wrapDiv");
    }

    var lChildFChiildLast = lChildFChiild.lastChild;
    if (lChildFChiildLast) {
        lChildFChiildLast.setAttribute("class", "subTitleNews");
    }
}
// var u = new Create("div", ["a", ["span", ["div", "img"]]], ["div", ["div", ["a", "span"], ["div", "span"]]]);


// var newsDiv = document.body.childNodes[2]; // main div
// newsDiv.setAttribute("class", "news");
// var fChild = newsDiv.childNodes[0]; // first DIV child --- a
// fChild.setAttribute("class", "dot");
// var fChildFChild = fChild.firstChild; // first child of a --- span
// fChildFChild.setAttribute("class", "dottedBorder");
// var lastDiv = fChildFChild.firstChild; // first child of span
// lastDiv.setAttribute("class", "newsEffects");
// var image = lastDiv.firstChild; // image
// image.setAttribute("class", "pic1");



// var lChild = newsDiv.lastChild; // last DIV child --- a
// lChild.setAttribute("class", "titleNews");
// var lChildFChiild = lChild.firstChild;
// lChildFChiild.setAttribute("class", "wrapDiv");
// var lChildFChiildLast = lChildFChiild.lastChild;
// lChildFChiildLast.setAttribute("class", "subTitleNews");


var images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg", "images/img6.jpg",
    "images/img7.jpg", "images/img8.jpg", "images/img9.jpg", "images/img10.jpg"];



for (var index = 0; index < 10; index++) {
    var u = new Create("div", ["a", ["span", ["div", "img"]]], ["div", ["div", ["a", "span"], ["div", "span"]]]);
    u.setAttr();
}