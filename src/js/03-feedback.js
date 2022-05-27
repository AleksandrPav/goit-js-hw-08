import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
}


refs.form.addEventListener('input',throttle(handleFormInput, 500));
refs.form.addEventListener('submit', handleFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
dataFromLocalStorage()
const formData = {};


function handleFormInput (e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleFormSubmit(e) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function dataFromLocalStorage() {
   const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (data) {
    refs.email.value = data.email;
    refs.message.value = data.message;
  }
};