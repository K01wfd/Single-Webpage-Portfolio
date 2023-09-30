const contactForm = document.getElementById('contactForm');
const senderName = document.getElementById('senderName');
const senderEmail = document.getElementById('senderEmail');
const senderMessage = document.getElementById('senderMessage');
const lightThemeButton = document.getElementById('light');
const projectImage = document.querySelectorAll('.project__image');
const projectLinks = document.querySelectorAll('.project__links');

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
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  validateInput();
});

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
  const re = /^\s+$/;
  return re.test(String(s));
};
function validateInput() {
  //   const senderNameValue = senderName.value.trim();
  //   const senderEmailValue = senderEmail.value.trim();
  //   const senderMessageValue = senderMessage.value.trim();

  senderName.addEventListener('keyup', (e) => {
    const senderNameValue = e.target.value;
    if (senderNameValue === '') {
      setError(senderName, 'Name is required');
    } else if (isWhiteSpace(senderNameValue)) {
      setError(senderName, 'No white space allowed');
    } else {
      setSuccess(senderName);
    }
  });

  senderEmail.addEventListener('keyup', (e) => {
    const senderEmailValue = e.target.value;
    if (senderEmailValue === '') {
      setError(senderEmail, 'Email is required');
    } else if (!isValidEmail(senderEmailValue)) {
      setError(senderEmail, 'Sorry,invalid format here');
    } else if (isWhiteSpace(senderEmailValue)) {
      setError(senderEmail, 'No white space allowed');
    } else {
      setSuccess(senderEmail);
    }
  });

  senderMessage.addEventListener('keyup', (e) => {
    const senderMessageValue = e.target.value;
    if (senderMessageValue === '') {
      setError(senderMessage, 'Message is required');
    } else if (isWhiteSpace(senderMessageValue)) {
      setError(senderMessage, 'No white space allowed');
    } else {
      setSuccess(senderMessage);
    }
  });
}

// lightThemeButton.addEventListener('click', () => {
//   document.body.classList.toggle('light-theme');
// });
