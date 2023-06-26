const popups = document.querySelectorAll('.popup');
  
const  closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened') 
    close(openedPopup)
  }
}

const open = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);      
} 
  
const close = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);    
};

export {open, close};