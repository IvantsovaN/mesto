import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector),
      this._image = this._popup.querySelector('.popup__image'),
      this._title = this._popup.querySelector('.popup__element-text')          
    }     

    open(title, link) {       
        super.open();     
        this._image.src = link;
        this._title.textContent = title;
        this._image.alt = title;
    }        
}
