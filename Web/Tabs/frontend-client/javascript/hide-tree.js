// Wait for the page to load first.
window.onload = function() {

    // Get a reference to the link on the page
    // with id.
    var a = document.getElementById("hidetree");

    // Set code to run when the link is clicked
    // by assigning a function to "onclick".
    a.onclick = function() {

        var x = document.getElementById("treeid");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

        // If you don't want the link to actually
        // redirect the browser to another page,
        // "google.com" in our example here, then
        // return false at the end of this block.
        // Note that this also prevents event bubbling,
        // which is probably what we want here, but won't
        // always be the case.
        return false;
    }
}
