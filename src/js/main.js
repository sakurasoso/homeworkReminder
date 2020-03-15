'use strict';

var USERID = "";
var TOKEN ="";

function create_todo_columns(colnum) {
    var todo_row = document.getElementById("todo_main_row");
    var col = 0;
    while (col != colnum) {
        var column = document.createElement("div");
        column.className = "todo_column";
        column.setAttribute("col", col);
        todo_row.appendChild(column);
        col++;
    }
}

function create_a_reminder(title, time) {
    var post = document.createElement("div");
    post.className = "reminder_con";
    post.innerHTML = title + "  " + time;
    return post;
}
//login
function changeUerUI(){
    var userUI = document.getElementById("userui");
    userUI.textContent = "Hi, "+USERID +"!";
}


function closelogin(){
    var loginpage = document.getElementById("loginpage");

    loginpage.classList.add("hidden");
}

function login() {
 
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    var Accesstoken = document.getElementById("token");
 
    if (username.value == "") {
 
        alert("Please input username");
 
    } else if (pass.value  == "") {
 
        alert("please input password");
 
    } else if(username.value == "admin" && pass.value == "123456"){
        USERID= username.value;
        TOKEN = Accesstoken.value;
        closelogin();
        changeUerUI();
 
    } else {
 
        alert("Please input corret password and username！")
 
    }
}

var loginbotton = document.getElementById("btn_login");
loginbotton.addEventListener("click", function(){login();});


