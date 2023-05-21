class FormValidator {
  
  constructor(config, formElement) {
      this._formSelector = config.formSelector;
      this._inputSelector = config.inputSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._errorClass = config.errorClass;
      this._formElement = formElement;
  }

  
  _showError = (inputElement, errorMessage) => {
      const errorElement = this._formElement.querySelector(`#error-${inputElement.id}`);
      inputElement.classList.add(this._inputErrorClass);
      errorElement.classList.add(this._errorClass);
      errorElement.textContent =  errorMessage;      
  };
  
  _hideError = (inputElement) => {
      const errorElement = this._formElement.querySelector(`#error-${inputElement.id}`);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass)
      errorElement.textContent = '';
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {    
      return !inputElement.validity.valid;      
    })
  }; 
  
  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute('disabled', '');        
      } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
  };

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);      
    }
  };
 
  _setEventListeners = () => {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement); 

   inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
        this._toggleButtonState(inputList, buttonElement);
        this._isValid(inputElement);        
      });
    }); 
  };

  enableValidation = () => {
    this._setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault(); 
    });
  }; 
}

export default FormValidator;