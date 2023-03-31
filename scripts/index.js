
const buttonEd = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const buttonX = document.querySelector('.popup__button-x');
const titleName = document.querySelector('.profile__title');
const textAbout = document.querySelector('.profile__text');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_about');


buttonEd.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  nameInput.value = titleName.textContent;
  jobInput.value = textAbout.textContent;
  }); 
buttonX.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
  }); 



  
function handleFormSubmit (evt) {
    evt.preventDefault();
  
  titleName.textContent = nameInput.value
  textAbout.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);