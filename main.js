// setting u variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCompleted = document.querySelector(".tasks-completed span");
let tasksCount = document.querySelector(".tasks-count span")

// Focus ON input field

window.onload = function() {
    theInput.focus();
};

//Adding The Task 
theAddButton.onclick = function() {

  // If Input is empty 
   if(theInput.value === "") {

 console.log("No Value");

   }else{

    let noTasksMsg = document.querySelector(".no-tasks-message");
   

    // check if span with no tasks message is Exist 
    if(document.body.contains(document.querySelector(".no-tasks-message"))) {
    // Remove NO tasks Message
    noTasksMsg.remove();
    }

    // Create Main Span Element
    let mainSpan = document.createElement("span");
    // create Delete Button
    let deleteElement = document.createElement("span");

    // create the Main span Text
    let text = document.createTextNode(theInput.value);
     
    //Add Text to Delete Button Text
     let deleteText = document.createTextNode("Delete");

    //Add Text to span
    mainSpan.appendChild(text);
    // Add Class to span
    mainSpan.className ="task-box";
    
    // Add Text Delete Button 
    deleteElement.appendChild(deleteText);
    // Ass Class to Delete Button
    deleteElement.className ="delete";

    // Add Delete Button TO Main Span
    mainSpan.appendChild(deleteElement);

// Add the Task to The Container
  tasksContainer.appendChild(mainSpan);

// Empty the Input
  theInput.value = "";

// focus ON field
theInput.focus();


}

   // Calculate Tasks
};
document.addEventListener('click', function(e){

// Delete Task
if(e.target.className == "delete") {

    //Remove current task 
    e.target.parentNode.remove();
    // check Number of tasks InSIDE The container
    if(tasksContainer.childElementCount ==0) {
         createNoTasks();
    }

}

// Finish Task
if(e.target.classList.contains("task-box")) {

    // Toggle Class 'Finished'
   e.target.classList.toggle("finished");
}

});

// Function To No Create No Tasks Message
function createNoTasks() {
    
    // create Message Span Element
    let msgSpan = document.createElement("span");

 // Create The Text Message
let msgText = document.createTextNode("No Tasks To Show");

// Add Text TO Message span Element
msgSpan.appendChild(msgText);

//Add class To Message Span
msgSpan.className = 'no-tasks-message';

// Append The Message Span Element the Task Container
 tasksContainer.appendChild(msgSpan);
}


// function to calculate Tasks
function calculateTasks() {

    // calculate All Tasks
      tasksCount.innerHtml = document.querySelectorALL(".tasks-content .task-box").length;

      // calculate completed Tasks
      tasksCompleted.innerHtml = document.querySelectorALL(".tasks-content .finished").length;

}


