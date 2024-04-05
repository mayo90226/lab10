document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("message").innerText = "Text changed successfully!";
});

window.addEventListener("load", function() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});


window.addEventListener("load", function() {
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "New paragraph added dynamically!";
    document.getElementById("container").appendChild(newParagraph);
});

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

