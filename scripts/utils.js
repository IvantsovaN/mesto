  const popups = document.querySelectorAll('.popup');
  
  popups.forEach((popup) => {
      popup.addEventListener('mousedown', (evt) => {
          if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
          }
          if (evt.target.classList.contains('popup__xbutton')) {
            closePopup(popup)
          }
      })
  });

  const  closeByEscape = (evt) => {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened') 
      closePopup(openedPopup)
    }
  }

  const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);      
  } 
    
  const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);    
  };

  export {openPopup, closePopup};