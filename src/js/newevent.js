function showDiv(str) {
    var divs = []; 

    for(var i = 0;i < 4;i++) {
        divs[i] = document.getElementById("div" + i);
        divs[i].style.visibility = "hidden";
    }
    document.getElementById(str).style.visibility = "";               
}
var navi_buttons = document.getElementById("navi").getElementsByTagName("button");
