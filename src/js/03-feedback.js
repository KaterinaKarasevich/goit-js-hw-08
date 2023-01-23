import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")
const textarea = document.querySelector(".feedback-textarea")
const input = document.querySelector(".feedback-input")


const STORAGE_KEA = "feedback-form-state";

populateTextInput()

const formData = {};

form.addEventListener("submit", onFormSubmit)
form.addEventListener("input", throttle(onFormInput, 500));

function onFormSubmit(e) {
    e.preventDefault();
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEA)
  
}

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEA, JSON.stringify(formData))
}

function populateTextInput() {
    const savedData = localStorage.getItem(STORAGE_KEA);
    const savedObj = JSON.parse(savedData);

    if (savedObj) {
        input.value = savedObj.email;
        textarea.value = savedObj.message;
        
    }
}