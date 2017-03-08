function create(a) {
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

        // } else if (Array.isArray(arguments[i][0])) {
        //     var arr = arguments[i][0];
        //     var parent6 = document.createElement(arr[0]);
        //     parent1.appendChild(parent6);
        //     for (var l = 1; l < arr.length; l++) {
        //         if (typeof arr[l] === "string") {
        //             var child5 = arr[l];
        //             child5 = document.createElement(child5);
        //             parent6.appendChild(child5);
        //         } else if (Array.isArray(arr[l])) {
        //             var nextArr = arr[l];
        //             var parent7 = document.createElement(nextArr[0]);
        //             parent1.appendChild(parent7);
        //             for (var t = 1; t < nextArr.length; t++) {
        //                 if (typeof nextArr[t] === "string") {
        //                     var child6 = nextArr[t];
        //                     child6 = document.createElement(child6);
        //                     parent7.appendChild(child6);
        //                 } else if (Array.isArray(nextArr[t])) {
        //                     var endParent = nextArr[t];
        //                     var parent8 = document.createElement(endParent[0]);
        //                     parent7.appendChild(parent8);
        //                     for (var w = 1; w < endParent.length; w++) {
        //                         if (typeof endParent[w] === "string") {
        //                             var child11 = endParent[w];
        //                             child11 = document.createElement(child11);
        //                             parent8.appendChild(child11);
        //                         }
        //                     }
        //                 }

                //     }
                // }
            // }
        } element.appendChild(parent1);
    } console.log(parent1);
}

var u = create("div", ["a", ["span", ["div", "img"]]], ["div", ["div", ["a", "span"], ["div", "span"]]]);


var newsDiv = document.body.childNodes[2]; // main div
newsDiv.setAttribute("class", "news");
var fChild = newsDiv.childNodes[0]; // first DIV child --- a
fChild.setAttribute("class", "dot");
var fChildFChild = fChild.firstChild; // first child of a --- span
fChildFChild.setAttribute("class", "dottedBorder");
var lastDiv = fChildFChild.firstChild; // first child of span
lastDiv.setAttribute("class", "newsEffects");
var image = lastDiv.firstChild; // image
image.setAttribute("class", "pic1");



var lChild = newsDiv.lastChild; // last DIV child --- a
lChild.setAttribute("class", "titleNews");
var lChildFChiild = lChild.firstChild;
lChildFChiild.setAttribute("class", "wrapDiv");
var lChildFChiildLast = lChildFChiild.lastChild;
lChildFChiildLast.setAttribute("class", "subTitleNews");