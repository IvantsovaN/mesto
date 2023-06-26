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

  const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_invalid',
    errorClass: 'error-message_active'
  }; 
    
  const buttonEdit = document.querySelector('.profile__edit-button');
  const popupEdit = document.querySelector('.popup_edit');
  const buttonAdd = document.querySelector('.profile__add-button');
  const formAddPicture = document.querySelector('.popup__form_type_add');
  const popupAdd = document.querySelector('.popup_add');
  const titleInput = formAddPicture.querySelector('.popup__text_type_title');
  const linkInput = formAddPicture.querySelector('.popup__text_type_link');
    
  //export ;  
  export {config, pictures};
  export {buttonEdit, popupEdit, buttonAdd, formAddPicture, popupAdd, titleInput, linkInput};