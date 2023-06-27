import '../pages/index.css';
//import config from '../utils/constants.js'
import Card from '../components/Сard.js';
//import Popup from './Popup.js';
import {buttonEdit, popupEdit, buttonAdd, formAddPicture, popupAdd, titleInput, linkInput, nameInput, aboutInput} from '../utils/constants.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import {config, pictures} from '../utils/constants.js';
import Section from '../components/Section.js';

  
  const popupPicture = new PopupWithImage('.popup_picture');
  popupPicture.setEventListeners();

  const popupEditValidator = new FormValidator(config, popupEdit);
  const popupAddValidator = new FormValidator(config, popupAdd);

  popupEditValidator.enableValidation();
  popupAddValidator.enableValidation(); 

  const createCard = (data) => { 
    const pictureElement = new Card(data, (data) => {
      popupPicture.open(data.title, data.link)}, 
      '#pictures-template');
    return pictureElement.generateCard(); 
  }

  const section = new Section('.elements', {
    renderer: (item) => {
      const picture = createCard(item);
      section.addItem(picture); 
    }
  });   
  const formAdd = new PopupWithForm({
    popupSelector: '.popup_add',
    handleSubmit: (newInputValues) => {
    const newPicture = createCard(newInputValues);     
    section.addItem(newPicture) 
    }  
  });
  formAdd.setEventListeners(); 
  
  section.renderItems(pictures);

  buttonAdd.addEventListener ('click', () => {
    popupAddValidator.disableButton();
    popupAddValidator.resetError();
    formAdd.open();     
  });

  const userInfo = new UserInfo({ name, about });
  
  const formEdit = new PopupWithForm({
    popupSelector: '.popup_edit',
    handleSubmit: (data) => {
      userInfo.setUserInfo(data);
    }        
  });
  formEdit.setEventListeners();

  buttonEdit.addEventListener('click', () => {
    const infoObject = userInfo.getUserInfo();
      nameInput.value = infoObject.name;
      aboutInput.value = infoObject.about;      
    popupEditValidator.resetError(); 
    formEdit.open();    
    });
