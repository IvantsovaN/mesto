//import  config from '../utils/constants.js';
export default class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(config.submitButtonSelector); 
  }
  
  _showError (inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent =  errorMessage;      
  };
  
  _hideError (inputElement) {
    const errorElement = this._formElement.querySelector(`#error-${inputElement.id}`);      
    inputElement.classList.remove(this._inputErrorClass);      
    errorElement.classList.remove(this._errorClass)
    errorElement.textContent = '';
  };

  resetError () {
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement)
    });
  } 

  _hasInvalidInput = () => {
    return  this._inputList.some((inputElement) => {    
      return !inputElement.validity.valid;      
    })
  }; 
 
  _enableButton () {   
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', '');             
  }  

  disableButton () {
    this._enableButton ()    
  } 
  
  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._enableButton ();           
      } else {        
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
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
    this._toggleButtonState(); 

    this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
        this._toggleButtonState();
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