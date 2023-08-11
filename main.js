import './style.css'

let input = document.querySelector('#emailInput');
let btn = document.querySelector('#submitBtn');
let emailError = document.querySelector('#emailError');
let successMsg = document.querySelector('#successMsg');

btn.addEventListener('click', () => {

  let email = input.value;
  // validateEmail function takes an email
  if(validateEmail(email)) {
    input.classList.remove('border-red-400');
    successMsg.classList.remove('hidden')
    emailError.classList.add('hidden');
    setTimeout(() => {
      successMsg.classList.add('hidden')
    }, [3000])

    input.value = '';
  } else {
    alert('Please add a valid email before submitting');
    input.classList.add('border-red-400')
    emailError.classList.remove('hidden')
  }
});

function validateEmail(email) {
  const validPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validPattern.test(email);
}