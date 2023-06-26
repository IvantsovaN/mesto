export default class Section {
    constructor(containerSelector, {renderer}) {
      this._section = document.querySelector(containerSelector);
      this._renderer = renderer;      
    } 
   
    renderItems(items) {
        items.forEach((item) => {
        this._renderer(item)
      });
    };

    addItem(htmlElement) {
        this._section.prepend(htmlElement)
      };
    };
    
