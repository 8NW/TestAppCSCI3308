/**
 * @overview Javascript functions for to-DoList.html
 */

/**
 * @func loadDatabaseToDoData
 * Makes the table keep all data saved the the database
 */
 function loadDatabaseToDoData(){
}

/**
 * @func displayCurrentDate
 * Updates the to-do list table to display the day's current date
 */
function displayCurrentDate(){
  var today=new Date();
  var day=today.getDate();
  var month=today.getMonth()+1;
  var year=today.getFullYear();
  if(day < 10){
    day = '0' + day;
  }
  if(month < 10){
    month = '0' + month;
  }
  var table=document.getElementById("ToDoList");
  table.rows[0].cells[0].innerHTML=table.rows[0].cells[0].innerHTML + month + "/" + day + "/" + year;
}

/**
 * @func addRow
 * dynamically adds a row to the to-do list
 *
 */
function addRow(){
  var table=document.getElementById("ToDoList");
  var newTask = document.getElementById("taskName");
  var newTime = document.getElementById("taskTime");
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  row.insertCell(0).innerHTML= '<input type="button" value = "Click me when this task is done!" onClick="Javacsript:completeRow(this)">';
  row.insertCell(1).innerHTML= newTask.value;
  row.insertCell(2).innerHTML= newTime.value;
  row.insertCell(3).innerHTML= '<input type="button" value = "Remove Item" onClick="Javacsript:deleteRow(this)">';
}

/**
 * @func deleteRow
 * dynamically Deletes the row specified
 */
function deleteRow(currentRow){
  var index = currentRow.parentNode.parentNode.rowIndex;
  var table = document.getElementById("ToDoList");
  table.deleteRow(index);
}

/** 
 * @func completeRow 
 * changes the background color of the row and text on the button when completed
 */
function completeRow(currentRow){
  var table = document.getElementById("ToDoList");
  var index = currentRow.parentNode.parentNode.rowIndex;
  table.rows[index].cells[0].innerHTML = '<input type="button" value = "Great work! (Click again to mark unfinished)" onClick="Javacsript:decompleteRow(this)">';
  table.rows[index].bgColor = 'green';
}

/** 
 * @func decompleteRow 
 * changes the background color of the row and text on the button when marked incomplete after being marked complete
 */
 function decompleteRow(currentRow){
  var table = document.getElementById("ToDoList");
  var index = currentRow.parentNode.parentNode.rowIndex;
  table.rows[index].cells[0].innerHTML = '<input type="button" value = "Click me when this task is done!" onClick="Javacsript:completeRow(this)">';
  table.rows[index].bgColor = 'white';
}