var now = moment()

setInterval(function(){    
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, hh:mm a"))
}, 1 * 1000)

for(var i = 8; i <= 17; i++){
    CreateRow(i, "")
}

function CreateRow(time, event){
    console.log(time)
    var thisMoment = moment(time, "H")

    var row = $("<div>").addClass('row time-block')
    var timeBlock = $("<div>").addClass("col-1 hour").text(thisMoment.format('h a'))
    var textarea = $("<textarea>").addClass('description col-10').val(event)
    var saveBtn = $("<button>").addClass('saveBtn col-1').text('Save')

    var isSameHour = thisMoment.isSame(moment(), 'hour')
    var isBefore = thisMoment.isBefore(moment(), 'hour')
    var isAfter = thisMoment.isAfter(moment(), 'hour')
    
    if(isSameHour){
        console.log("SAME HOUR")
        textarea.addClass('present')
    }
    else if(isBefore){
        console.log("IS BEFORE")
        textarea.addClass('past')
    }
    else if(isAfter){
        console.log("IS AFTER")
        textarea.addClass('future')
    }
    
    row.append(timeBlock, textarea, saveBtn)
    $("#timeSlots").append(row)
    
 
    
}

var saveBtn = $('.saveBtn');
saveBtn.on('click', function(){
    let textArea = $(this).parent().children('textarea').val();
    console.log(textArea);
    let timeSlot =  $(this).parent().children('div.col-1.hour').text()
    console.log(timeSlot);
    localStorage.setItem(timeSlot, textArea);
    console.log(localStorage);
    
})