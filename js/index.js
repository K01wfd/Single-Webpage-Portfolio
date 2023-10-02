const contactForm = document.getElementById('contactForm');
const senderName = document.getElementById('senderName');
const senderEmail = document.getElementById('senderEmail');
const senderMessage = document.getElementById('senderMessage');
const projectImage = document.querySelectorAll('.project__image');
const projectLinks = document.querySelectorAll('.project__links');
const formBtn = document.querySelector('.btn-form');

let readyName = false;
let readyEmail = false;
let readyMessage = false;

document.addEventListener('DOMContentLoaded', () => {
  projectImage.forEach((image, i) => {
    image.addEventListener('mouseover', (e) => {
      image.classList.add('shadowed-project');
      projectLinks[i].classList.add('display-project-links');
    });
    projectLinks[i].addEventListener('mouseover', () => {
      image.classList.add('shadowed-project');
      projectLinks[i].classList.add('display-project-links');
    });
    image.addEventListener('mouseout', () => {
      image.classList.remove('shadowed-project');
      projectLinks[i].classList.remove('display-project-links');
    });
  });

  senderName.addEventListener('keyup', (e) => {
    let currentElement = e.target;
    let elementValue = e.target.value;
    readyName = validateInputs(elementValue, currentElement);
  });
  senderEmail.addEventListener('keyup', (e) => {
    let currentElement = e.target;
    let elementValue = e.target.value;
    readyEmail = validateInputs(elementValue, currentElement);
  });
  senderMessage.addEventListener('keyup', (e) => {
    let currentElement = e.target;
    let elementValue = e.target.value;
    readyMessage = validateInputs(elementValue, currentElement);
  });
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const senderObj = {
      name: new String(senderName.value).trim(),
      email: senderEmail.value,
      message: senderMessage.value.toString().trim(),
    };
    if (readyName && readyEmail && readyMessage) {
      console.log(senderObj);
    }
  });
  formBtn.addEventListener('click', (e) => {});
});
String;
function validateInputs(fieldValue, element) {
  let isReady = false;
  if (fieldValue === '') {
    isReady = false;
    setError(element, `${element.name} is required`);
    return isReady;
  } else if (!isValidEmail(fieldValue) && element.id === 'senderEmail') {
    isReady = false;
    setError(element, 'Sorry,invalid format here');
    return isReady;
  } else if (isWhiteSpace(fieldValue)) {
    isReady = false;
    setError(element, 'No white space allowed');
    return isReady;
  } else {
    setSuccess(element);
    isReady = true;
    return isReady;
  }
}
const setError = (element, message) => {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector('.error');
  errorDisplay.innerText = message;

  element.classList.add('error-field');
  element.classList.remove('success');
};

const setSuccess = (element) => {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector('.error');
  errorDisplay.innerText = '';

  element.classList.add('success');
  element.classList.remove('error-field');
};
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const isWhiteSpace = (s) => {
  const re = /\s{2,}/g;
  return re.test(String(s));
};
