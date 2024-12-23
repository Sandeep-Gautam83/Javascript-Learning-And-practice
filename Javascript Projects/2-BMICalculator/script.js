const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Fetch input values
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Validate height
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height (positive number).`;
    return;
  }

  // Validate weight
  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight (positive number).`;
    return;
  }

  // Calculate BMI
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Show the result
  results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
});
