"use strict";

const labelsArray = Array.from(document.querySelectorAll('.ratings'));
const currentRatingSpan = document.getElementById('current-rating');
const ratingState = document.querySelector('.ratingState');
const submitState = document.querySelector('.submitState');
const submitBtn = document.getElementById('submit');
let currentRating;


// Add listener to each radio label to update styling as well as store which value is selected
labelsArray.forEach(function (label) {
  label.addEventListener('click', (e) => {
    let current = e.target;
    currentRating = current.innerText;
    if (current.classList.contains('checked')) {
      return;
    } else {
      removeChecked();
      current.classList.add('checked');
      updateRatingSpan();
    }
  })
})

// Iterate over styles in the radio labels and clear them before applying the selected styling to the selected label
function removeChecked() {
  labelsArray.forEach(function (label) {
    if (label.classList.contains('checked')) {
      label.classList.remove('checked');
    }
  })
}

function updateRatingSpan() {
  currentRatingSpan.innerText = currentRating;
}

submitBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  if (currentRating) {
    ratingState.classList.toggle('hidden');
    submitState.classList.toggle('hidden');
  }
  else {
    return;
  }
})
