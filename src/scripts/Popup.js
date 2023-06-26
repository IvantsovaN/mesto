export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector),
      this._buttonClose = this._popup.querySelector('.popup__xbutton')       
    }; 
   
    open() {
        this._popup.classList.add('popup_opened');  
        document.addEventListener('keydown', this._handleEscClose); 
    };
        
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);    
    };

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
          const openedPopup = document.querySelector('.popup_opened')
          this.close(openedPopup)
        };   
    }

    setEventListeners() {
        this._buttonClose = this._popup.querySelector('.popup__xbutton')
        this._buttonClose.addEventListener('click', (evt) => { 
            this.close();
        });
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
            this.close();
            };
            if (evt.target.classList.contains('popup__xbutton')) {
            this.close();
            };
        });
    };
};
