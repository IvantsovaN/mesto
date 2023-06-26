
export default class UserInfo {
    constructor({ profileNameSelector, textAboutSelector })  {
        this._profileNameSelector = profileNameSelector,
        this._textAboutSelector = textAboutSelector,
        this._profileName = document.querySelector('.profile__title');
        this._textAbout =  document.querySelector('.profile__text');   
        this._nameInput = document.querySelector('.popup__text_type_name'),
        this._aboutInput = document.querySelector('.popup__text_type_about')
    }

    

    getUserInfo() {         
        this._nameInput.value = this._profileName.textContent;
        this._aboutInput.value = this._textAbout.textContent;     
    };  
            
    setUserInfo() {            
        this._profileName.textContent = this._nameInput.value;
        this._textAbout.textContent = this._aboutInput.value;        
    };
}


