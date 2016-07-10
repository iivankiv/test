(function() {
    var btn_start = document.getElementById('startGame1');
    var btn_restart = document.getElementById('restartGame1');
    var theLeftSide = document.getElementById("leftSide");
    var theRightSide = document.getElementById("rightSide");
    var theBody = document.querySelector("#container-for-game1");
    var numberOfFaces = 5;
    var counter = 0;

    btn_start.addEventListener('click', startGame);
    btn_restart.addEventListener('click', function(e) {
        numberOfFaces = 5;
        counter = 0;
        deleteNodes();
        startGame(e);
    });

    function startGame(e) {
        generateFaces();
        e.stopPropagation();
        btn_start.removeEventListener('click', startGame);
    }

    function generateFaces() {
            for (var i = 0; i < numberOfFaces; i++) {
                var theImage = document.createElement("img");
                theImage.src = "images/smile.png";
                var xPosition = Math.floor(Math.random() * 280);
                var yPosition = Math.floor(Math.random() * 280);
                theImage.style.top = xPosition + "px";
                theImage.style.left = yPosition + "px";
                theLeftSide.appendChild(theImage);
            }

            var leftSideImages = theLeftSide.cloneNode(true);
            leftSideImages.removeChild(leftSideImages.lastChild);
            theRightSide.appendChild(leftSideImages);

            theLeftSide.lastChild.onclick = function nextLevel(event) {
                event.stopPropagation();
                deleteNodes();
                numberOfFaces += 5;
                counter += 100;
                generateFaces();
            };

            theBody.onclick = function gameOver() {
                alert("Game Over! Your score:  " + counter);
                theBody.onclick = null;
                theLeftSide.lastChild.onclick = null;
            };
        }

        function deleteNodes() {
            while (theLeftSide.firstChild)
            theLeftSide.removeChild(theLeftSide.firstChild);

            while (theRightSide.firstChild)
            theRightSide.removeChild(theRightSide.firstChild);
        }
}());


