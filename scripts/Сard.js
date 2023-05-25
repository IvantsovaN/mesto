import {openPopup, closePopup} from './utils.js';
class Card {
    constructor(data, templateSelector) {
        this._title = data.title;
        this._image = data.link;
        this._templateSelector = templateSelector;
        this._pictureCover = document.querySelector('.popup_picture');
    }

    _getTemplate() {
        const pictureElement = document
          .querySelector('#pictures-template')
          .content
          .querySelector('.element')
          .cloneNode(true);
    
        return pictureElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._image;
        this._element.querySelector('.element__image').alt = this._title;
        this._element.querySelector('.element__text').textContent = this._title;            
        this._setEventListeners();
        
        return this._element;
    }
     
                   
    _handleDelete = () => {
        this._element.remove();
    };

    _handleLike = () => {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    };

    _handlePictureImage = () => {        
        this._pictureCover.querySelector('.popup__image').src = this._image;
        this._pictureCover.querySelector('.popup__image').alt = this._title;
        this._pictureCover.querySelector('.popup__element-text').textContent = this._title;

        openPopup(this._pictureCover);  
    } 
    
    _setEventListeners() {
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._handleDelete();
        });         
    
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLike();
        });
    
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handlePictureImage();
        });      
    }  
};

export default Card;
