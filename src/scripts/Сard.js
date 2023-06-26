import PopupWithImage from './PopupWithImage.js'
export default class Card {
    constructor(data, handleCardClick, pictureSelector) {
        this._title = data.title;
        this._image = data.link;
        this._handleCardClick = handleCardClick;
        this._pictureSelector = pictureSelector;         
    };    

    _getTemplate() {
        const pictureElement = document
          .querySelector('#pictures-template')
          .content
          .querySelector('.element')
          .cloneNode(true);
    
        return pictureElement;
    };

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._image;
        this._element.querySelector('.element__image').alt = this._title;
        this._element.querySelector('.element__text').textContent = this._title;            
        this._setEventListeners();
       
        return this._element;
    }; 
    
    _handleDelete = () => {
        this._element.remove();
    };

    _handleLike = () => {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    };

    _handleClick = () => {
        this._handleCardClick({ title: this._title, link: this._image })
    };

    _setEventListeners() {
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._handleDelete();
        });         
    
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLike();
        });
    
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleClick();
        });    
    };  
};


