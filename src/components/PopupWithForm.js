import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmit }) {
      super(popupSelector),
      this._input = Array.from(this._popup.querySelectorAll('.popup__text')), 
      this._handleSubmit = handleSubmit,
      this._form = this._popup.querySelector('.popup__form')
      
    }
    
    _getInputValues() {
        this._newInputValues = {};
        this._input.forEach((inputElement) => {
          this._newInputValues [inputElement.name] = inputElement.value 
        });
        return this._newInputValues;       
      };       
        
    setEventListeners() {
      this._popup.addEventListener('submit', (evt) => {
        evt.preventDefault ();        
        this._handleSubmit(this._getInputValues()); 
        this.close();
      });
      super.setEventListeners();      
    }; 
       
    close() {      
      this._form.reset();
      super.close();
    }; 
  
}
