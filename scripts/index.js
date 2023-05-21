import Card from './Сard.js';
import FormValidator from './FormValidator.js';

  const pictures = [
    {
      title: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      title: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      title: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      title: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      title: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      title: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  const buttonEdit = document.querySelector('.profile__edit-button');
  const popupEdit = document.querySelector('.popup_edit');
  const profileName = document.querySelector('.profile__title');
  const textAbout = document.querySelector('.profile__text');
  const formElement = document.querySelector('.popup__form_type_edit');
  const nameInput = document.querySelector('.popup__text_type_name');
  const aboutInput = document.querySelector('.popup__text_type_about');
  const pictureFlex = document.querySelector('.elements');
  const buttonAddPicture = document.querySelector('.profile__add-button');
  const formAddPicture = document.querySelector('.popup__form_type_add');
  const popupAdd = document.querySelector('.popup_add');
  const titleInput = formAddPicture.querySelector('.popup__text_type_title');
  const linkInput = formAddPicture.querySelector('.popup__text_type_link');
  const buttonSubmitAdd = formAddPicture.querySelector('.popup__button_type_add');
  const popups = document.querySelectorAll('.popup');
  const listErrorEdit = formElement.querySelectorAll('.error-message');

  const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_invalid',
    errorClass: 'error-message_active'
  }; 

  popups.forEach((popup) => {
      popup.addEventListener('mousedown', (evt) => {
          if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
          }
          if (evt.target.classList.contains('popup__xbutton')) {
            closePopup(popup)
          }
      })
  })

  function closeByEscape(evt) {
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

  buttonEdit.addEventListener('click', () => {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    aboutInput.value = textAbout.textContent; 
    listErrorEdit.forEach((item) => {
      item.textContent = '';
    });
    nameInput.classList.remove('popup__text_invalid');
    aboutInput.classList.remove('popup__text_invalid');
  });  
            
  function handleEditFormSubmit (evt) {
    evt.preventDefault();
      
    profileName.textContent = nameInput.value;
    textAbout.textContent = aboutInput.value;
    closePopup(popupEdit);    
  }
  
  formElement.addEventListener('submit', handleEditFormSubmit);  

  const renderPictureElement = (pictureElement) => {
    pictureFlex.prepend(pictureElement);
  }
       
  pictures.forEach((card) => {
      card = new Card(card.title, card.link);
      const pictureElement = card.generateCard();
      renderPictureElement(pictureElement);
    });   
  
  buttonAddPicture.addEventListener ('click', () => {
    openPopup(popupAdd);
    buttonSubmitAdd.setAttribute('disabled', ''); 
    buttonSubmitAdd.classList.add('popup__button_disabled'); 
  })
    
  const handleAddPictureSubmit = (event) => {
    event.preventDefault();
       
    const title = titleInput.value;
    const link = linkInput.value;
    const card = new Card(title, link);
    const pictureElement = card.generateCard();
    renderPictureElement(pictureElement);
    formAddPicture.reset();
    closePopup(popupAdd);  
  };
    
  formAddPicture.addEventListener("submit", handleAddPictureSubmit);  
  
  const popupEditValidator = new FormValidator (config, popupEdit);

  const popupAddValidator = new FormValidator (config, popupAdd);

  popupEditValidator.enableValidation();
  popupAddValidator.enableValidation();