var currentDay = moment().format("dddd, MMMM Do, YYYY");
var hour = moment().format("H");

var saveBtn = $(".saveBtn")
saveBtn.on("click", save)
function save() {
    var id = $(this).attr("data-id");
    var textBox = $("#" + id).text();
    localStorage.setItem(id, textBox);
    refresh();
};

function refresh() {
    for(var i=9; i < 18; i++) {
        var textBox = localStorage.getItem(i);
        $("#" + i).text(textBox);
    }
};

refresh()

$("#currentDay").html(currentDay);
$("#hour").html(hour);

function colors(){
    if (hour = $(".hour")) {
        document.getElementById("9").classlist.add("present");
    } else {  
        document.getElementById("9").classlist.add("past");
    };
    // insert other hours here once this is figured out
    if (hour === 17) {
        $("#17").classlist.add("present");
    } else if (hour >= 17) {        
        $("#17").addClass("past");
    } else if (hour <= 17) { 
        $("#17").addClass("future");
    };

};
