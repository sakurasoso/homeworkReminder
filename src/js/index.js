'use strict';



var login_box = document.getElementById("login_box");
var login_id = document.getElementById("username");
var login_pwd = document.getElementById("password");
var login = document.getElementById("submit");
var cal_con = document.getElementById("todo_con_inside");

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
var all_data;
//usage:
readTextFile("../test_user/data.json", function(text){
    all_data = JSON.parse(text);
    console.log(all_data);
});
function login_invisible(){
    login_box.style.visibility = "hidden";
}
function create_post(upper,lower){
    var node = document.createElement("div");
    node.className = "reminder_con";
    
    var check_mark_con = document.createElement("div");
    check_mark_con.className = "reminder_check_mark_con";
    
    var check_mark_inside = document.createElement("div");
    check_mark_inside.className = "check_mark_inside";
    
    var check_mark_outside = document.createElement("div");
    check_mark_outside.className = "check_mark_outside";
    check_mark_inside.innerHTML = "<svg xmlns=\"http:\/\/www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/></svg>";
    
    var reminder_detail_con = document.createElement("div");
    reminder_detail_con.className = "reminder_detail_con";

    var reminder_detail = document.createElement("div");
    reminder_detail.className = "reminder_detail";

    var detail_upper = document.createElement("div");
    detail_upper.className = "detail_upper";
    detail_upper.innerHTML = upper;

    var detail_lower = document.createElement("div");
    detail_lower.className = "detail_lower";
    detail_lower.innerHTML = lower;
    reminder_detail.appendChild(detail_upper);
    reminder_detail.appendChild(detail_lower);
    reminder_detail_con.appendChild(reminder_detail);
    check_mark_outside.appendChild(check_mark_inside);
    check_mark_con.appendChild(check_mark_outside);
    node.appendChild(check_mark_con);
    node.appendChild(reminder_detail_con);
    cal_con.appendChild(node);
}


function ini_post(data){
    console.log(data);
    var upper_data = "";
    var lower_data = "";
    if(data["title"]){
        upper_data += data["title"];
    }
    if(data["type"]){
        upper_data += (" -- " + data["type"]);
    }
    if(data["courseid"]){
        upper_data += ("  courseid: " + data["courseid"]);
    }
    if(data["coursetype"]){
        upper_data += (" -- " + data["coursetype"]);
    }
    if(data["location"]){
        upper_data += ("  location: " + data["location"]);
    }
    if(data["starttime"]){
        lower_data += ("  Start: " + data["starttime"]);
    }
    if(data["endtime"]){
        lower_data += ("  End: " + data["endtime"]);
    }
    if(data["members"]){
        var i = 0;
        lower_data += "  Members: ";
        for(i = 0;i < data.members.length; i++){
            var temp = "\"" + i.toString() + "\"";
            lower_data += (i.toString() + ": " + data.members[temp]);
        }
    }
    console.log(upper_data);
    console.log(lower_data);
    create_post(upper_data,lower_data);
}



login.onclick = function initialize(){
    if(all_data[0]["name"] === login_id.value && all_data[0]["password"] === login_pwd.value){
        login_invisible();
        ini_posts(all_data);
    }
}
function ini_posts(data){
    var i = 0;
    var j = 0;
    console.log((0 < data[0].calendar.length))
    for(i = 0; i < data[0].calendar.length;i++){
        console.log(data[0].calendar[i].length);
        for(j = 0; j < data[0].calendar[i].events.length;j++){
                ini_post(all_data[0]["calendar"][i]["events"][j]);
        }
    }
    var name = document.getElementById("info_user_id");
    name.innerHTML = data[0].name;
}
