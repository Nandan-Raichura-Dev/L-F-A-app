//  this array holds all the data

let statusLi = [];

// eelements we need 
const board = document.getElementById("board");
const input = document.getElementById("statusInput");
const addBtn = document.getElementById("addBtn");


//load dt frm local stroage
function loadData() {
  const saved=localStorage.getItem("statusLi");
  if (saved) {
     statusLi
    =JSON.parse(saved);
  }
}

// save data to ls
function saveData() {
  localStorage.setItem("statusLi",JSON.stringify(statusLi));
}



function render() {
  board.innerHTML = "";

  statusLi
.forEach(function (item,idx) {
     const li = document.createElement("li");

    li.innerHTML =`<span>${item}</span>
       <button onclick="deleteStatus(${idx})">Delete</button>`;// conecting delete btn with each li

    board.appendChild(li);
  });
}


function addStatus() {
  const text = input.value.trim(); // remove extra spaces

  if (text ==="") {
  alert("Please type something before adding.");
  return;
  }

  statusLi.push(text);//update array
  saveData();// itsave to localStorage
  render();//update screen

  input.value = "";
}


function deleteStatus(idx) {
  statusLi
.splice(idx, 1); //remove 1 item at that idx
  saveData();
  render();
}



 addBtn.addEventListener("click",addStatus);

input.addEventListener("keydown",function (e) {
        if (e.key === "Enter") {
             addStatus();
        }
    });


loadData();
render();