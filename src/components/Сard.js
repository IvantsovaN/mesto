export default class Card {
    constructor(data, handleCardClick, templateSelector) {
        this._title = data.title,
        this._image = data.link,
        this._handleCardClick = handleCardClick,       
        this._templateSelector = templateSelector                            
    };    

    _getTemplate() {
        const pictureElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.element')
          .cloneNode(true);
    
        return pictureElement;
    };

    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__image');
        this._cardImage.src = this._image;
        this._cardImage.alt = this._title;
        this._element.querySelector('.element__text').textContent = this._title;
        this._likeButton = this._element.querySelector('.element__like');            
        this._setEventListeners();
       
        return this._element;
    }; 
    
    _handleDelete = () => {
        this._element.remove();
    };

    _handleLike = () => {
        this._likeButton.classList.toggle('element__like_active');
    };

    _handleClick = () => {
        this._handleCardClick({ title: this._title, link: this._image })
    };

    _setEventListeners() {
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._handleDelete();
        });         
    
        this._likeButton.addEventListener('click', () => {
            this._handleLike();
        });
    
        this._cardImage.addEventListener('click', () => {
            this._handleClick();
        });    
    };  
};


