'use strict';

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
