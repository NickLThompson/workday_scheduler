var date = moment().format("MMM D, YYYY");
var time = moment().format("LTS");

console.log(date, time)

var toDo = $(".toDo");
var saveButton = $(".saveBtn");

// What happens when you click the save button
function handleSaveButton(event) {
    event.preventDefault();
    localStorage.setItem("To Do: ", toDo.val());
    
    console.log("To Do: ", toDo.val());
    console.log(date, time)
}

function displayTime() {
    $(".hour").text(moment().format("MMM D, YYYY, LTS"));
    var saveTime = JSON.parse(localStorage.getItem("scheduleTime")) || {};

    for (let i = 9; i <=18; i++) {
        var timeEvent = saveTime[i] || "";
        $(".container").append(createTimeBlock(i, timeEvent));

    }


// getting the current time to display

    // formatting the displayed date
    var saveTime = JSON.parse(localStorage.getItem("scheduleTime")) || {};

    let target = $(event.target);
    let hour = target.siblings(".hour").text();
    var textArea = target.siblings(".toDo").val();

    saveTime[hour] = textArea;
    localStorage.setItem("scheduleTime", JSON.stringify(saveTime));

}

// creating the click event for the save button
saveButton.on("click", handleSaveButton)