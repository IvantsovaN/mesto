
const buttonEd = document.querySelector('.edit-button');
const popup = document.querySelector('.popup');
const buttonX = document.querySelector('.popup__button-X');
const titleName = document.querySelector('.title-info');
const textAbout = document.querySelector('.text-info');


buttonEd.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  nameInput.value = titleName.textContent;
  jobInput.value = textAbout.textContent;
  }); 
buttonX.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
  }); 

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_about');

  
function handleFormSubmit (evt) {
    evt.preventDefault();
  
  titleName.innerHTML =`<h1 class="title-info">${nameInput.value}</h1>`;
  textAbout.innerHTML = `<p class="text-info">${jobInput.value}</p>`;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);