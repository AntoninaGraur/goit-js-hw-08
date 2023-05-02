

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


const storedData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = storedData.email || '';
messageInput.value = storedData.message || '';


form.addEventListener('input', throttle((event) => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
 
  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem('feedback-form-state');
});

