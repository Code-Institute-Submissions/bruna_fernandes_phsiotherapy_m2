// The code below is to get a few items by targeting the classes assigned to the divs
const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// To give us the current day
let date = new Date();
// This day starts at 0 index meaning 1
let day = date.getDate();
// This month starts at 0 index meaning January
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

// Here I'm getting the month and it will return which month it is which will be June and then add the Year to the string.
mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);

populateDates();



// Event Listener codes

// Setting up a toggle by using Event Listeners upon click!
date_picker_element.addEventListener('click', toggleDatePicker);
// Now I will get the next month element
next_mth_element.addEventListener('click', goToNextMonth);
// Now I will get the next month element
prev_mth_element.addEventListener('click', goToPrevMonth);



// Function Codes
// toggleDatePicker is passed through (e) Event
function toggleDatePicker (e) {
    if (!checkEventPathForClass(e.path, 'dates')){
        dates_element.classList.toggle('active');
    }
    
}

function goToNextMonth (e) {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    mth_element.textContent = months[month] + ' ' + year;
    populateDates();

}

function goToPrevMonth (e) {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    mth_element.textContent = months[month] + ' ' + year;
    populateDates();
}

// A function to populate the days

 function populateDates (e) {

    days_element.innerHTML = '';
    let amount_days = 31;
    
    if (month == 1) {
            amount_days = 28;
        }

        
     for (let i = 0; i < amount_days; i++) {
        const day_element = document.createElement('div');
        day_element.classList.add('day');
        day_element.textContent = i + 1;

        if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
            day_element.classList.add('selected');
        }

        day_element.addEventListener('click', function () {
            selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
            selectedDay = (i + 1);
            selectedMonth = month;
            selectedYear = year;
            selected_date_element.textContent = formatDate(selectedDate);
            selected_date_element.dataset.value = selectedDate;

            populateDates();
        });

        days_element.appendChild(day_element);
     }
 }


// Helper Functions

//This function will check the EVENT path so where I click, it will give me the path
// of where I clicked. I if I clicked an element in the DatePicker it will tell me the whole
// path of what the parents are of every single file from the element I clicked.
function checkEventPathForClass (path, selector) {
    for (let i = 0; i < path.length; i++) {
// Here I loop through every single item in the path and check that the class exist and then it checks the 
// class path list which contains the selector which it will pass through!
        if (path[i].classList && path[i].classList.contains(selector)) {
            return true;
        }
    }

    return false;
}

function formatDate (d) {
    let day = d.getDate();
    if (day < 10) {
        day = '0' + day;
    }

    let month = d.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }

    let year = d.getFullYear();

    return day + ' / ' + month + ' / ' + year;
}