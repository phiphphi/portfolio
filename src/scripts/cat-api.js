/**
 * Make a GET request to a url and pass along the recieved data.
 * 
 * @param {*} url The url to send a GET request to.
 * @param {*} callback Method to pass the received data along to.
 */
function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("x-api-key", "e6164b05-9e36-40be-b0c5-711531101917");
    xmlhttp.send();
}

// Get the modal.
var modal = document.getElementById("myModal");

// Open the modal and get a random cat image when the cat button is clicked.
document.getElementById("catBtn").onclick = function () {
    modal.style.display = "block";

    // Update page with gorgeous cat pictures.
    ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function (data) {
        document.getElementById("a1").innerHTML = data[0]["id"];
        document.getElementById("a2").innerHTML = data[0]["url"];

        var html = '<img src="' + data[0]["url"] + '">';
        document.getElementById("a3").innerHTML = html;
    });
}

// Close the modal when its close button is clicked.
document.getElementsByClassName("close")[0] = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it.
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}