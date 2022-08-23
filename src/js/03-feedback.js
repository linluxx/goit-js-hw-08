import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
let formData = {};
// console.log(formData);
const STORAGE_KEY = 'feedback-form-state';
populateFeedback();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onFormInput(evt) {
  const localStorageData = localStorage.getItem(STORAGE_KEY);
  if (localStorageData) {
    formData = JSON.parse(localStorageData);
  }
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFeedback() {
  try {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData.message) {
      refs.message.value = savedData.message;
    }
    if (savedData.email) {
      refs.email.value = savedData.email;
    }
  } catch (error) {
    console.log(error);
  }
  // console.log(savedData);
}
