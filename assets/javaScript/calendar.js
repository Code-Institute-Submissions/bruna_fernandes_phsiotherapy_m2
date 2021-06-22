// The code below is to get a few items by targeting the classes assigned to the divs
const date_picker_element = document.querySelector('.date-picker');

const selected_date_element = document.querySelector('date-picker .selected-date');

const dates_element = document.querySelector('.date-picker .dates');


// Event Listener codes

// Setting up a toggle by using Event Listeners upon click!
date_picker_element.addEventListener('click', toggleDatePicker);

// Function Codes

function toggleDatePicker (e) {
    dates_element.classList.toggle('active');
}