import './style.css'

let input = document.querySelector('#emailInput');
let btn = document.querySelector('#submitBtn');
let emailError = document.querySelector('#emailError');
let successMsg = document.querySelector('#successMsg');

emailError.hidden = true;
successMsg.hidden = true;

btn.addEventListener('click', () => {

  let email = input.value;
  // validateEmail function takes an email
  if(validateEmail(email)) {
    input.classList.remove('border-red-400');
    emailError.hidden = true;
    successMsg.hidden = false;
    setTimeout(() => {
      successMsg.hidden = true;
    }, [3000])

    input.value = '';
  } else {
    alert('Please add a valid email before submitting');
    input.classList.add('border-red-400')
    emailError.hidden = false;
  }
});

function validateEmail(email) {
  const validPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validPattern.test(email);
}