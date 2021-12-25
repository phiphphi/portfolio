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