class Card {
    constructor(title, link, templateSelector) {
        this._title = title;
        this._image = link;
        this._templateSelector = templateSelector        
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
        const pictureCover = document
        .querySelector('.popup_picture');

        pictureCover.querySelector('.popup__image').src = this._element.querySelector('.element__image').src;
        pictureCover.querySelector('.popup__image').alt = this._element.querySelector('.element__image').alt;
        pictureCover.querySelector('.popup__element-text').textContent = this._element.querySelector('.element__text').textContent;

        this._openPopup(pictureCover);  
    } 
    
    _openPopup = (popup) => {
        popup.classList.add('popup_opened');              
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
