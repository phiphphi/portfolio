/** 
 * Grab the html from the url and load it into the given element.
 * 
 * @param {*} url The html to load in.
 * @param {*} element The document element to insert the html into.
 */
function load(url, element) {
    fetch(url)
        .then(data => {
            return data.text()
        })
        .then(data => {
            element.innerHTML = data;
        })
}

// Initialize page.
load("../html/home.html", document.getElementById("main"));

// TODO: add links to other content, along with event listeners

document.addEventListener("click", loadContent);

function loadContent(e) {
    let elm = e.target;
    if (elm.tagName === "A" && elm.id.slice(-4) === "link") {
        let url = elm.id.slice(0, -5);
        load(`../html/${url}.html`, document.getElementById("main"));
    }
}