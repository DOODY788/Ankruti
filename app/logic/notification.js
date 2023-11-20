'use strict'

export default class notification{

    constructor(title,subtext,success){
        this.configs = {
            'title':title,
            'sub-text':subtext,
            'success':success,
        }
        this.generateDom();
    }

    generateDom(){
        this.mainDom = document.createElement('div');
        this.heading = document.createElement('div');
        this.headingTxt = document.createElement('p');
        this.body = document.createElement('div');
        this.slider = document.createElement('div');
        this.cross_svg = document.createElement('div');
        this.slidebody = document.createElement('div');

        this.mainDom.classList.add("nt_dom"); 
        this.heading.classList.add("nt_head"); 
        this.body.classList.add("nt_body"); 
        this.slider.classList.add("nt_slider");
        this.slider.classList.add('nt_slidebdy');
        this.mainDom.classList.add('nt_slidein')
        this.cross_svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>'
        
        this.headingTxt.innerHTML = this.configs.title;
        this.body.innerHTML = this.configs["sub-text"];

        this.parent = document.querySelector('.main');

        this.heading.appendChild(this.headingTxt);
        this.heading.appendChild(this.cross_svg);
        this.mainDom.appendChild(this.heading);
        this.mainDom.appendChild(this.body);
        this.mainDom.appendChild(this.slider);
        this.parent.appendChild(this.mainDom)
        setTimeout(()=>{
            this.mainDom.classList.remove('nt_slider');
            this.mainDom.classList.remove('nt_slidein');
            this.mainDom.classList.add('fadeout');
            setTimeout(() => {
                this.mainDom.remove();
            }, 1000);
        },2500)
    }
}
