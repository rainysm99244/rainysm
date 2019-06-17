function colorSelect(id, color) {
    var path = "../img/" + id + "-" + color + ".JPG";
    var image = document.getElementById("image");
    image.style.background = "url(" + path + ") no-repeat center";
    image.style.backgroundSize = "cover";
}
