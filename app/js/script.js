
/**********function for Task 1 **********/
function buildTable () {
    var container = document.getElementById("container");
    var rows, colls, t;

    for (rows = 1; rows <= 9; rows++) {
        for (colls = 1; colls <= 9; colls++) {
            var div = document.createElement("div");
            div.setAttribute("class", "cell");
            t = rows*colls;
            div.innerHTML = t;
            container.appendChild(div);
            if (rows % 2 == 0) {
                div.className += " yellow";
            }
        }
    }
}
buildTable();
/**********End of Function for Task 1 **********/