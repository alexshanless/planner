var schedule = JSON.parse(localStorage.getItem('dayplanner'))
// var schedule = localStorage.getItem('dayplanner')
console.log(schedule)
if (!schedule) {
    schedule = {}
}

console.log(schedule['9 am'])

setInterval(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, hh:mm a"))
}, 1 * 1000)

for (var i = 8; i <= 17; i++) {
    CreateRow(i)
}

function CreateRow(time) {
    var thisMoment = moment(time, "H")
    var key = thisMoment.format('h a')


    var event = schedule[key]

    var row = $("<div>").addClass('row time-block')
    var timeBlock = $("<div>").addClass("col-1 hour").text(key)
    var textarea = $("<textarea>").addClass('description col-10').val(event)
    var saveBtn = $("<button>").addClass('saveBtn col-1').text('Save')

    var isSameHour = thisMoment.isSame(moment(), 'hour')
    var isBefore = thisMoment.isBefore(moment(), 'hour')
    var isAfter = thisMoment.isAfter(moment(), 'hour')

    if (isSameHour) {
        textarea.addClass('present')
    }
    else if (isBefore) {
        textarea.addClass('past')
    }
    else if (isAfter) {
        textarea.addClass('future')
    }

    row.append(timeBlock, textarea, saveBtn)
    $("#timeSlots").append(row)
}


$('.saveBtn').on('click', function () {
    let textArea = $(this).parent().children('textarea').val();
    let timeSlot = $(this).parent().children('div.col-1.hour').text()
    schedule[timeSlot] = textArea
    console.log(schedule)

    localStorage.setItem("dayplanner", JSON.stringify(schedule))
    // localStorage.setItem("dayplanner", schedule)
})

//  var data = {
//      name: "Ben"
//  }

// // var key = 'name'

// // console.log(data.name)
// // console.log(data.key)
// // data.age = 31
// // console.log(data)

// key = 'job'
// data[key] = 'tutor'
// data['gender'] = 'male'

// console.log(data['name'])
// console.log(data[key])

// localStorage.setItem("dayplanner", JSON.stringify({ data: 'someData' }))