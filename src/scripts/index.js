import '../pages/index.css';

import Card from './Сard.js';
import Popup from './Popup.js';
import  {open, close} from './utils.js';
import UserInfo from './UserInfo.js'
import PopupWithImage from './PopupWithImage.js'
import PopupWithForm from './PopupWithForm.js'
import FormValidator from './FormValidator.js';
import pictures from './constants.js';
import Section from './Section.js';

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
  //const profileName = document.querySelector('.profile__title');
  //const textAbout = document.querySelector('.profile__text');
  //const formEditProdile = document.querySelector('.popup__form_type_edit');
  //const nameInput = document.querySelector('.popup__text_type_name');
  //const aboutInput = document.querySelector('.popup__text_type_about');
  //const pictureFlex = document.querySelector('.elements');
  const buttonAdd = document.querySelector('.profile__add-button');
  const formAddPicture = document.querySelector('.popup__form_type_add');
  const popupAdd = document.querySelector('.popup_add');
  const titleInput = formAddPicture.querySelector('.popup__text_type_title');
  const linkInput = formAddPicture.querySelector('.popup__text_type_link');
  //const popups = document.querySelectorAll('.popup');
  
  const popupPicture = new PopupWithImage('.popup_picture');
  popupPicture.setEventListeners();

  const popupEditValidator = new FormValidator (config, popupEdit);
  const popupAddValidator = new FormValidator (config, popupAdd);

  popupEditValidator.enableValidation();
  popupAddValidator.enableValidation(); 

  const createCard = (data) => { 
    const pictureElement = new Card(data, (data) => {
      popupPicture.open(data.title, data.link)
      });
    return pictureElement.generateCard(); 
  }

  const section = new Section('.elements', {
    renderer: (item) => {
      const picture = createCard(item);
      section.addItem(picture); 
    }
  });   
  const formAdd = new PopupWithForm('.popup_add', newInputValues => {
    const newData = {
      title: titleInput.value,
      link: linkInput.value      
      } 
    const newPicture = createCard(newData);    
    section.addItem(newPicture)   
    });
  formAdd.setEventListeners(); 
  
  section.renderItems(pictures);

  buttonAdd.addEventListener ('click', () => {
    popupAddValidator.disableButton();
    popupAddValidator.resetError();
    formAdd.open();     
  });

  const userInfo = new UserInfo({ });

  const formEdit = new PopupWithForm ('.popup_edit', newInputValues => {
     userInfo.setUserInfo(newInputValues);   
  });
  formEdit.setEventListeners();

  buttonEdit.addEventListener('click', () => {
    userInfo.getUserInfo();   
    popupEditValidator.resetError(); 
    formEdit.open();    
    });
