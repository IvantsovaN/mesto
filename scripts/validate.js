const showError = (config, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.classList.add(config.errorClass)
    errorElement.textContent =  errorMessage;      
};
  
const hideError = (config, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass)
    errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {    
    return !inputElement.validity.valid;
  })
}; 
  
const toggleButtonState = (config, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', '');        
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
  }
};

const isValid = (config, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(config, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(config, formElement, inputElement);
  }
};
 
const setEventListeners = (config, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(config, inputList, buttonElement); 

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      toggleButtonState(config, inputList, buttonElement);
      isValid(config, formElement, inputElement);
    });
  }); 
};

const enableValidation = (config) => {
  
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(config, formElement);
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();                      
      
    });
  });
};
  
     
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__text_invalid',
  errorClass: 'error-message_active'
}); 

  