const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//click function
function addTask(){
    //checking if the input box will be empty and give a message if user tries to add something with empty input section
    if(inputBox.value === ''){
        alert("Please write some text to add to your To-Do List");
    }
    // otherwise ceate a new HTML element and store element in li variable, in li we store whatever is in the input section
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//javaScript for the click function when we want to remove anything from the list

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
 // if we click on span (the x ) it should remove whatever is in the LI (whatever is in the list)   
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

//function which allows one to store data(in other words even if you refresh the page youll still have your To-do-List data )

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//function which will keep data on the List even if one were to exit the entire page
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();