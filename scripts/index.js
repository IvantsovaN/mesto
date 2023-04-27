 
  const buttonEdit = document.querySelector('.profile__edit-button');
  const popupEdit = document.querySelector('.popup_edit');
  const profileName = document.querySelector('.profile__title');
  const textAbout = document.querySelector('.profile__text');
  const formElement = document.querySelector('.popup__form_type_edit');
  const nameInput = document.querySelector('.popup__text_type_name');
  const aboutInput = document.querySelector('.popup__text_type_about');
  const pictureTemplate = document.getElementById('pictures-template');
  const pictureFlex = document.querySelector('.elements');
  const addPictureButton = document.querySelector('.profile__add-button');
  const addPictureForm = document.querySelector('.popup__form_type_add');
  const popupAdd = document.querySelector('.popup_add');
  const pictureCover = document.querySelector('.popup_picture');
  const picturePopup = pictureCover.querySelector('.popup__image');
  const textPopup = pictureCover.querySelector('.popup__element-text');
  const titleInput = addPictureForm.querySelector('.popup__text_type_title');
  const linkInput = addPictureForm.querySelector('.popup__text_type_link');
  const popups = document.querySelectorAll('.popup');
  const textErrror = document.querySelectorAll('.error-message');

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

  buttonEdit.addEventListener('click', () => {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    aboutInput.value = textAbout.textContent;    
  });  
            
  function handleEditFormSubmit (evt) {
    evt.preventDefault();
      
    profileName.textContent = nameInput.value;
    textAbout.textContent = aboutInput.value;
    closePopup(popupEdit);    
  }
  
  formElement.addEventListener('submit', handleEditFormSubmit);      
  
  const createPictureElement = (imageDate) => {
    const pictureElement = pictureTemplate.content
      .querySelector('.element')
      .cloneNode(true);
    const pictureTitle = pictureElement.querySelector('.element__text');
    const pictureImage = pictureElement.querySelector('.element__image');
    
    pictureTitle.textContent= imageDate.title;
    pictureImage.src = imageDate.link;
    pictureImage.alt = imageDate.name;

    const deleteButton = pictureElement.querySelector('.element__delete');
    const likeButton = pictureElement.querySelector('.element__like');
           
    const handleDelete = () => {
      pictureElement.remove();
    };
  
    const handleLike = () => {
      likeButton.classList.toggle('element__like_active');
    };

    deleteButton.addEventListener('click', handleDelete);
  
    likeButton.addEventListener('click', handleLike);
         
    const handlePictureImage = () => {
      picturePopup.src = pictureImage.src;
      picturePopup.alt = pictureTitle.alt ;
      textPopup.textContent = pictureTitle.textContent;
      openPopup(pictureCover);  
    } 

    pictureImage.addEventListener ('click', handlePictureImage);
    
    return pictureElement;  
  };
  
  const renderPictureElement = (pictureElement) => {
    pictureFlex.prepend(pictureElement);
  }
 
  pictures.forEach((image) => {
    renderPictureElement(createPictureElement(image));
  });
  
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
    textErrror.textContent = '';
    document.removeEventListener('keydown', closeByEscape);    
  };

  addPictureButton.addEventListener ('click', () => {
    openPopup(popupAdd);
  })
    
  const handleAddPictureSubmit = (event) => {
    event.preventDefault();
       
    const title = titleInput.value;
    const link = linkInput.value;

    const imageData = {
      title,
      link   
    };
   
    addPictureForm.reset();

    renderPictureElement(createPictureElement(imageData));
    closePopup(popupAdd);  
  };
    
  addPictureForm.addEventListener("submit", handleAddPictureSubmit);  