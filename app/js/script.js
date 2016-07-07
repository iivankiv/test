
/**********function for Task 1 **********/
//function buildTable () {
//    var container = $("#container-for-task1");
//    console.log(container);
//    var rows, colls, t;
//
//    for (rows = 1; rows <= 9; rows++) {
//        for (colls = 1; colls <= 9; colls++) {
//            var div = document.createElement("div");
//            div.setAttribute("class", "cell");
//            t = rows*colls;
//            div.innerHTML = t;
//            container.appendChild(div);
//            if (rows % 2 == 0) {
//                div.className += " yellow";
//            }
//        }
//    }
//}
//buildTable();
/**********End of Function for Task 1 **********/

/**********Function for Game 1 **********/
//function smileGame() {
//    var numberOfFaces = 5;
//    var counter = 0;
//
//    function generateFaces() {
//        var theLeftSide = document.getElementById("leftSide");
//        console.log(theLeftSide);
//        var theRightSide = document.getElementById("rightSide");
//        var theBody = document.querySelector("#theBody");
//
//        for (var i = 0; i < numberOfFaces; i++) {
//            var theImage = document.createElement("img");
//            theImage.src = "../images/smile.png";
//            var xPosition = Math.floor(Math.random() * 400);
//            var yPosition = Math.floor(Math.random() * 400);
//            theImage.style.top = xPosition + "px";
//            theImage.style.left = yPosition + "px";
//            theLeftSide.appendChild(theImage);
//        }
//
//        var leftSideImages = theLeftSide.cloneNode(true);
//        leftSideImages.removeChild(leftSideImages.lastChild);
//        theRightSide.appendChild(leftSideImages);
//
//        theLeftSide.lastChild.onclick = function nextLevel(event) {
//            event.stopPropagation();
//            deleteNodes();
//            numberOfFaces += 5;
//            counter += 100;
//            generateFaces();
//        };
//
//        theBody.onclick = function gameOver() {
//            alert("Game Over! Your score:  " + counter);
//            theBody.onclick = null;
//            theLeftSide.lastChild.onclick = null;
//        };
//
//        function deleteNodes() {
//            while (theLeftSide.firstChild)
//                theLeftSide.removeChild(theLeftSide.firstChild);
//
//            while (theRightSide.firstChild)
//                theRightSide.removeChild(theRightSide.firstChild);
//        }
//    }
//    generateFaces();
//}
//smileGame();
/**********END of Function for Game 1 **********/