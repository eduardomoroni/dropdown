function loadJSON(path, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.response));
        }
    };
    xobj.send(null);
}

// If this doesn't work, feel free to copy and paste the JSON into this file.
// If you use this function, keep in mind that this is and xhr call, the callback will be fired after the promise resolves
loadJSON("./countries.json", console.log);
