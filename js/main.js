function goIntroduce(){
    window.location.href = "/introduce";
}

window.onload = function() {
    window.open("popup.html", "popUp1", "width=450, height=630");
}

function details(param){
    window.location.href = "/detail/" + param;
}
function buyNew(param){
    window.location.href = "/detail/" + param;
}