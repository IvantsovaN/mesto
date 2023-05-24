import Card from './Сard.js';
import FormValidator from './FormValidator.js';
import  {openPopup, closePopup} from './utils.js';
import pictures from './constants.js';
  
  const buttonEdit = document.querySelector('.profile__edit-button');
  const popupEdit = document.querySelector('.popup_edit');
  const profileName = document.querySelector('.profile__title');
  const textAbout = document.querySelector('.profile__text');
  const formEditProfile = document.querySelector('.popup__form_type_edit');
  const nameInput = document.querySelector('.popup__text_type_name');
  const aboutInput = document.querySelector('.popup__text_type_about');
  const pictureFlex = document.querySelector('.elements');
  const buttonAddPicture = document.querySelector('.profile__add-button');
  const formAddPicture = document.querySelector('.popup__form_type_add');
  const popupAdd = document.querySelector('.popup_add');
  const titleInput = formAddPicture.querySelector('.popup__text_type_title');
  const linkInput = formAddPicture.querySelector('.popup__text_type_link');
    
  const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_invalid',
    errorClass: 'error-message_active'
  }; 

  
  buttonEdit.addEventListener('click', () => {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    aboutInput.value = textAbout.textContent; 
    popupEditValidator.resetError();    
  });  
            
  function handleEditFormSubmit (evt) {
    evt.preventDefault();
      
    profileName.textContent = nameInput.value;
    textAbout.textContent = aboutInput.value;
    closePopup(popupEdit);    
  }
  
  formEditProfile.addEventListener('submit', handleEditFormSubmit);  

  const createCard = (data) => { 
    const pictureElement = new Card(data).generateCard();
    return pictureElement;     
  };
  const renderPictureElement = (pictureElement) => {
    pictureFlex.prepend(pictureElement);
  }
 
    
  pictures.forEach((data) => {
    renderPictureElement(createCard(data));
    });
   
  
  buttonAddPicture.addEventListener ('click', () => {
    openPopup(popupAdd);    
    _disableButton ();
  })
    
  const handleAddPictureSubmit = (event) => {
    event.preventDefault();      
    const title = titleInput.value;
    const link = linkInput.value;  
    const imageData = {
      title,
      link   
    };  
    
    renderPictureElement(createCard(imageData));  
    formAddPicture.reset();
    closePopup(popupAdd);  
  };
    
  formAddPicture.addEventListener("submit", handleAddPictureSubmit);  
  
  const popupEditValidator = new FormValidator (config, popupEdit);

  const popupAddValidator = new FormValidator (config, popupAdd);

  popupEditValidator.enableValidation();
  popupAddValidator.enableValidation();
  