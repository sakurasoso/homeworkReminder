function showDiv(str) {
    var divs = []; 

    for(var i = 0;i < 4;i++) {
        divs[i] = document.getElementById("div" + i);
        divs[i].style.visibility = "hidden";
    }
    document.getElementById(str).style.visibility = "";               
}
var navi_buttons = document.getElementById("navi").getElementsByTagName("button");
var new_event_window = document.getElementById("neweventpage");
function closeCreate(){
    new_event_window.style.visibility = "hidden";
    var divs = []; 
    for(var i = 0;i < 4;i++) {
        divs[i] = document.getElementById("div" + i);
        divs[i].style.visibility = "hidden";
    }
}

function show_create(){
    new_event_window.style.visibility = "";
    document.getElementById("div0").style.visibility = "";
}