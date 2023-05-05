const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const Container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
    Container.classList.toggle("dark")?(toggle.firstElementChild.className="far fa-moon"):
    (toggle.firstElementChild.className="far fa-sun")
});


//code that will be contacted when the AddTask button is clicked
function addTask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //cross icon to delete a task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //after adding the input box should be empty
    inputBox.value = "";
    //call save data whenever change are added
    saveData();
}
//Whenever we click container
listContainer.addEventListener("click", function(e){
    //check if li is clicked
    if(e.target.tagName === "LI"){
        //the check classname and if the checked class name is already there
        //it will remove it because of the check classlist.toggle from the target element if the clicked target element is LI
        e.target.classList.toggle("checked");
        saveData();
    }
    //if the clicked target element is a span, delete the parent elelment which is LI
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//store task in browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//display data when website is open again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

//to filter list
const filterCheckbox = document.createElement('input');
filterCheckbox.type = 'checkbox';

div.appendChild(filterLabel);
filterLabel.appendChild(filterCheckbox);
Container.insertBefore(div, ul);

filterCheckbox.addEventListener('change', (event) => {
    const isChecked = event.target.checked;
    const lis = ul.children;    

    if(isChecked) {
        for(var i = 0; i < lis.length; i++) {
            var li = lis[i];

            if(li.className == 'checked') {
                li.style.display = '';  
            } else {
                li.style.display = 'none';
            }
        }
    } else {
        for(var i = 0; i < lis.length; i++) {
            var li = lis[i];
            li.style.display ='';
    } 
    }
});