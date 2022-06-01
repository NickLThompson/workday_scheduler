// current date and time
var date = moment().format("MMM D, YYYY");
var time1 = (moment().format("LT"))

console.log(date, time1)

var toDo = $(".toDo");
var saveButton = $(".saveBtn");

// What happens when you click the save button
function handleSaveButton() {
    localStorage.setItem("To Do: ", toDo.val());


    console.log("To Do: ", toDo.val());
    console.log(date, time)
}

// displays the current time
function displayTime() {
    $(".hour").text(moment().format(MMM, D, YYYY, LTS));

    for (let i = 9; i <= 18; i++) {
        var timeEvent = saveTime[i] || "";
        $(".container").append(createTimeBlock(i, timeEvent));

    }

}

// function allowing time slots
function timeFunction() {
    var format = "h:mma";
    var currentTime = moment();
    var beforeTime = moment("9:00", format)
    var afterTime = moment("18:00", format);

    // if statements determining times to color
    if (currentTime.isBetween(beforeTime, afterTime)) {
        $("textarea").parent().addClass("present");
    } 
    if (currentTime.isAfter(afterTime)) {
        $("textarea").parent().addClass("future");
    }
    if (currentTime.isBefore(beforeTime)) {
        $("textarea").parent().addClass("past");
    }
    
}





// creating the click event for the save button
saveButton.on("click", function (event) {
    var whoAmI = $(event.target).parent().parent().attr("id");
    var whatTimeIsIt = whoAmI.substring(4)
    var whatIsTheParent = $("#time" + whatTimeIsIt)

        // storing the written information to the localStorage
    localStorage.setItem("time" + whatTimeIsIt, whatIsTheParent.children().eq(1).children().eq(0).val().trim());




});

timeFunction();