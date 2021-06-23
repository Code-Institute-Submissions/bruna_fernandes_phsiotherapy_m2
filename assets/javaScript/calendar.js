// The code below is to get a few items by targeting the classes assigned to the divs
const date_picker_element = document.querySelector('.date-picker');

const selected_date_element = document.querySelector('date-picker .selected-date');

const dates_element = document.querySelector('.date-picker .dates');


// Event Listener codes

// Setting up a toggle by using Event Listeners upon click!
date_picker_element.addEventListener('click', toggleDatePicker);

// Function Codes
// toggleDatePicker is passed through (e) Event
function toggleDatePicker (e) {
    if (!checkEventPathForClass(e.path, 'dates')){
        dates_element.classList.toggle('active');
    }
    
}

// Helper Functions

//This function will check the EVENT path so where I click, it will give me the path
// of where I clicked. I if I clicked an element in the DatePicker it will tell me the whole
// path of what the parents are of every single file from the element I clicked.
function checkEventPathForClass (path, selector) {
    for (let i=0; i < path.length; i++) {
// Here I loop through every single item in the path and check that the class exist and then it checks the 
// class path list which contains the selector which it will pass through!
        if (path[i].classList && path[i].classList.contains(selector)) {
            return true;
        }
    }
    return false;
}