const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//function to store the text on the input box into the list container
function addTask(){
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        //add a cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        //Display the cross icon
        li.appendChild(span);
    }

    //clear the inputbox after a task has been added
    inputBox.value = ""; 

    //Call the saveData any time the task is added to the list
    saveData();
}

//Click function on the x button
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//Function to save data even if the browser is refreshed
function saveData () {
    localStorage.setItem("data", listContainer.innerHTML);
}

//Display the data every time the browser is repoened
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
//call the showTask Function
showTask();

