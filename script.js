"use strict";

const ratingsLabels = document.querySelectorAll('.ratings');
const labelsArray = Array.from(ratingsLabels);
const radioContainer = document.querySelector('.radio-container');
const currentRating = document.getElementById('currentRating');
const radios = document.querySelectorAll('.radio');
const radiosArray = Array.from(radios);
const ratingState = document.querySelector('.ratingState');
const submitState = document.querySelector('.submitState');


// toggle states for testing / checking formatting
const toggleBtn = document.querySelector('.btn');
function toggleStates() {
  ratingState.classList.toggle('hidden');
  submitState.classList.toggle('hidden');
}

toggleBtn.addEventListener('click', toggleStates);

labelsArray.forEach(function (label) {
  label.addEventListener('click', (e) => {
    let current = e.target;
    if (current.classList.contains('checked')) {
      return;
    } else {
      removeChecked();
      current.classList.add('checked');
    }
  })
})

function removeChecked() {
  labelsArray.forEach(function (label) {
    if (label.classList.contains('checked')) {
      label.classList.remove('checked');
    }
  })
}
  // if current radio selected is already checked, do nothing

  // if current radio not checked iterate over array of radios and remove all instance of classs "checked"
  // add class "checked" to currently clicked radio button label to update css
  // update checked radio value (array index) to use for on submit function


// on submit function
  // remove primary state
  // render secondary state
    // use stored value of array index to display what rating was selected on secondary state
    // toggle display class of primary state to hide it
    // toggle display class of secondary state to show it
    // Dynamically render html? ** update to this later **
