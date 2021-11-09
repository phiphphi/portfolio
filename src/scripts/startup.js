function addPageLayout() {
    load("../html/header.html", document.getElementById("header"));
    load("../html/footer.html", document.getElementById("footer"));
}

// Grab the html from the url and load it into the given element.
function load(url, element)
{
    fetch(url)
    .then(data => {
      return data.text()
    })
    .then(data => {
        element.innerHTML = data;
    })
}

addPageLayout();