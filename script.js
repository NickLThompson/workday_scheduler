var toDo = $(".toDo");
var saveButton = $(".saveBtn");

function handleSaveButton(event) {
    event.preventDefault();
    localStorage.setItem("To Do: ", toDo.val());
    
    console.log("To Do: ", toDo.val());
}

saveButton.on("click", handleSaveButton);