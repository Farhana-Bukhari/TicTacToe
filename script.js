//html input & addbutton
const input = document.getElementById("input");
const fieldAdded = document.getElementById("fieldAdded");

function taskDone() {
  if (input.value === "") {
    alert("you must write something");
  } else {
    //create task holder
    const li = document.createElement("li");
    //set task
    li.innerHTML = input.value;
    //append taskholder in its container
    fieldAdded.appendChild(li);

    //create delete button
    let span = document.createElement("span");
    //set button content
    span.innerHTML = "\u00d7";
    //append delete button in li
    li.appendChild(span);
    console.log(li);
  }
  input.value = "";
  saveData();
}

fieldAdded.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      console.log("notdone");
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      console.log("done");
      saveData();
    }
  },
  false
);

//prevent changes at refreshing
function saveData() {
  localStorage.setItem("data", fieldAdded.innerHTML);
}
function showData() {
  fieldAdded.innerHTML = localStorage.getItem("data");
}
showData();
