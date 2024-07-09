var student_data = [
  {
    NAME: "MADHU",
    AGE: "19",
    CAMPUS: "AEC",
  },
  {
    NAME: "KIRAN",
    AGE: "19",
    CAMPUS: "AEC",
  },
  {
    NAME: "RAVI",
    AGE: "19",
    CAMPUS: "AEC",
  },
];

var i = 0;
var cnt = true;

function addtable() {
  var mainDiv = document.querySelector('.main');
  var table;

  if (cnt) {
    table = document.createElement('table');
    table.setAttribute('id', 'table');
    mainDiv.appendChild(table);

    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    var headers = ["NAME", "AGE", "CAMPUS","UPDATE", "ACTIONS"];
    headers.forEach(headerText => {
      var th = document.createElement("th");
      th.innerHTML = headerText;
      headerRow.appendChild(th);
    });

    var button = (document.getElementById("bt").innerHTML = "ADD ROWS");
    student_data.map((ele) => {
      i += 1;
      var tr = document.createElement("tr");
      tr.setAttribute("id", i);

      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "delete";
      deleteButton.setAttribute("onclick", "del(this)");
      deleteButton.setAttribute("class","delbut");

      var updateButton = document.createElement("button");
      updateButton.innerHTML = "Update";
      updateButton.setAttribute("onclick", "update(this)");
      updateButton.setAttribute("class","upbut");

      Object.entries(ele).map((data) => {
        var td = document.createElement("td");
        td.innerHTML = data[1];
        tr.appendChild(td);
      });
      var tdUpdate = document.createElement("td");
      tdUpdate.appendChild(updateButton);
      tr.appendChild(tdUpdate);
      var tdDelete = document.createElement("td");
      tdDelete.appendChild(deleteButton);
      tr.appendChild(tdDelete);
      table.appendChild(tr);
    });
    cnt = false;
  } else {
    table = document.getElementById('table');

    i += 1;
    var tr = document.createElement("tr");

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.setAttribute("onclick", "del(this)");
    deleteButton.setAttribute("class","delbut");

    var updateButton = document.createElement("button");
    updateButton.innerHTML = "Update";
    updateButton.setAttribute("onclick", "update(this)");
    updateButton.setAttribute("class","upbut");

    Object.entries(student_data[0]).map((data) => {
      var tdvalue = window.prompt(data[0]);
      var td = document.createElement("td");
      td.innerHTML = tdvalue;
      tr.appendChild(td);
    });
    var tdUpdate = document.createElement("td");
    tdUpdate.appendChild(updateButton);
    
    tr.appendChild(tdUpdate);
    var tdDelete = document.createElement("td");
    tdDelete.appendChild(deleteButton);
    tr.appendChild(tdDelete);
    table.appendChild(tr);
  }
}

function del(button) {
  var row = button.parentNode.parentNode;
  var table = document.getElementById("table");
  table.removeChild(row);
}

function update(button) {
  var row = button.parentNode.parentNode;
  var tds = row.getElementsByTagName("td");

  for (var i = 0; i < tds.length - 2; i++) { // Exclude the last two cells (buttons)
    var currentValue = tds[i].innerHTML;
    var newValue = window.prompt("Enter new value for " + currentValue, currentValue);

    if (newValue !== null) { // If the user didn't click cancel
      tds[i].innerHTML = newValue;
    }
  }
}
