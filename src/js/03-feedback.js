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

function handleFormInput (e) {
 
  const value = {
    email: refs.email.value,
    message: refs.message.value,
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
 
}

function handleFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  refs.form.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  
  
};

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (data) {
    refs.email.value = data.email || '';
    refs.message.value = data.message || '';
   
  }
   
};
// const ref


    