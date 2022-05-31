var date = moment().format("MMM D, YYYY");
var time = moment().format("LTS");
var hour = moment().format("h:m");

console.log(date, time)

var toDo = $(".toDo");
var saveButton = $(".saveBtn");

// What happens when you click the save button
function handleSaveButton() {
    localStorage.setItem("To Do: ", toDo.val());


    console.log("To Do: ", toDo.val());
    console.log(date, time)
}

function displayTime() {
    $(".hour").text(moment().format(MMM, D, YYYY, LTS));

    for (let i = 9; i <= 18; i++) {
        var timeEvent = saveTime[i] || "";
        $(".container").append(createTimeBlock(i, timeEvent));

    }

}

function addingCSS() {
    for (let i = 9; i <= 18; i++) {
        if (hour) {
            $("textarea").parent().addClass("present");
        } else if (i < hour) {
            $("textarea").parent().addClass("past");
        } else if (i > hour) {
            $("textarea").parent().addClass("future");
        }
    }
}


// creating the click event for the save button
saveButton.on("click", function (event) {
    var whoAmI = $(event.target).parent().parent().attr("id");
    var whatTimeIsIt = whoAmI.substring(4)
    var whatIsTheParent = $("#time" + whatTimeIsIt)

    localStorage.setItem("time" + whatTimeIsIt, whatIsTheParent.children().eq(1).children().eq(0).val().trim());

    addingCSS();


});