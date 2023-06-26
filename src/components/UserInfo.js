
export default class UserInfo {
    constructor({ profileName, textAbout })  {
        //this._profileNameSelector = profileNameSelector,
        //this._textAboutSelector = textAboutSelector,
        this._profileName = document.querySelector('.profile__title'),
        this._textAbout =  document.querySelector('.profile__text') 
        //this._nameInput = document.querySelector('.popup__text_type_name'),
        //this._aboutInput = document.querySelector('.popup__text_type_about')
    }    

    getUserInfo() {         
        //console.log(this._profileName);
        //console.log(this._textAbout);
        this._profileInfo = {
        name: this._profileName.textContent,
        about: this._textAbout.textContent
        };
        return this._profileInfo; 
    };  
            
    setUserInfo(data) {            
        this._profileName.textContent = data.name;
        this._textAbout.textContent = data.about;        
    };
}


