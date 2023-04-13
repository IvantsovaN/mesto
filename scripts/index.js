  const pictures = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

    const button = document.querySelector('.profile__edit-button');
    const popupEd = document.querySelector('.popup_edit');
    const xbuttonEd = document.querySelector('.popup__xbutton_type_edit');
    const titleName = document.querySelector('.profile__title');
    const textAbout = document.querySelector('.profile__text');
    const formElement = document.querySelector('.popup__form_type_edit');
    const nameInput = document.querySelector('.popup__text_type_name');
    const jobInput = document.querySelector('.popup__text_type_about');

    button.addEventListener('click', function () {
      popupEd.classList.add('popup_opened');
      nameInput.value = titleName.textContent;
      jobInput.value = textAbout.textContent;
      }); 

    xbuttonEd.addEventListener('click', function () {
      popupEd.classList.remove('popup_opened');
      }); 
      
    function handleEditFormSubmit (evt) {
        evt.preventDefault();
      
      titleName.textContent = nameInput.value;
      textAbout.textContent = jobInput.value;
      popupEd.classList.remove('popup_opened');
    }
    formElement.addEventListener('submit', handleEditFormSubmit);
  
     
   
    const pictureTemplate = document.getElementById('pictures-template');
    const pictureFlex = document.querySelector('.elements');
    const addPicturePopup = document.querySelector('.popup_add');
    const addPictureButton = document.querySelector('.profile__add-button');
    const addPictureForm = document.querySelector('.popup__form_type_add');
    const popup = document.querySelector('.popup_add');
    const xbuttonAd = document.querySelector('.popup__xbutton_type_add');

  
    const createPictureElement = (imageDate) => {
    const pictureElement = pictureTemplate.content
    .querySelector('.element')
    .cloneNode(true);
    const pictureName = pictureElement.querySelector('.element__text');
    const pictureImage = pictureElement.querySelector('.element__image');
    
    
    pictureName.textContent = imageDate.name;
    pictureImage.src = imageDate.link;
    pictureImage.alt = imageDate.name;

    const deleteButton = pictureElement.querySelector('.element__delete');
    const likeButton = pictureElement.querySelector('.element__like');
    const pictureCover = document.querySelector('.popup_picture');
    const xbuttonPicture = document.querySelector('.popup__xbutton_type_picture');
    const elementPopup = pictureCover.querySelector('.popup__element')
            
    
    const handleDelete = () => {
        pictureElement.remove();
   };
  
    const handleLike = () => {
        likeButton.classList.toggle('element__like_active');
    };

    deleteButton.addEventListener('click', handleDelete);
  
    likeButton.addEventListener('click', handleLike);

       
    const picturePopup = pictureCover.querySelector('.popup__image');
    const textPopup = pictureCover.querySelector('.popup__element-text');
    
    const handlePictureElement = () => {
        picturePopup.src = pictureImage.src;
        picturePopup.alt = pictureName.alt ;
        textPopup.textContent = pictureName.textContent;
        
        pictureCover.classList.add('popup_opened');
    }         
        pictureElement.addEventListener ('click', handlePictureElement);
    
    xbuttonPicture.addEventListener('click', function () {
        pictureCover.classList.remove('popup_opened');
        
                 
        }); 
        return pictureElement;

  };
  
  const renderPictureElement = (pictureElement) => {
    pictureFlex.prepend(pictureElement);
  }
 
  pictures.forEach((image) => {
    renderPictureElement(createPictureElement(image));
  });
  
  const openPopup = (popup) => {
    popup.classList.add('popup_opened');
  }

  const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
  };

  addPictureButton.addEventListener ('click', () => {
    openPopup(addPicturePopup);
  })

  
  const handleAddPictureSubmit = (event) => {
    event.preventDefault();
  
    const titleInput = addPictureForm.querySelector('.popup__text_type_title');
    const linkInput = addPictureForm.querySelector('.popup__text_type_link');
  
    const title = titleInput.value;
    const link = linkInput.value;

    const imageData = {
      title,
      link,    
    };
    
    renderPictureElement(createPictureElement(imageData));
    closePopup(addPicturePopup);
  };
   
  xbuttonAd.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
    }); 
    
  
  addPictureForm.addEventListener("submit", handleAddPictureSubmit);
    