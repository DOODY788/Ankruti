'use strict'
import notification from "./notification.js";
// import Database from "../branch/system.js";

export default class _App{
    
    // Mainstream class
    constructor(){
        this.comp_loader = document.querySelector('#out_loader');
        this.comp_loader.onclick = ()=>{this.loadcomponents()};
        this.snap_div = document.querySelectorAll('.sn_div');
        this.snap_div.forEach((elem)=>{
            elem.onclick = ()=>{
                this.snapSection(elem);
            }
        })
    }

    loadcomponents(){
        this.comp_loader.style.display = 'none';
        this.loadingAnimation('.main_container','block');
    }
    
    
    notification(){
        this.notify = new notification('hello','we successfully setuped your software. Enjoy the premium',true)
    }

    loadingAnimation(target,mode){
        const maindom = document.createElement('div');
        const dot1 = document.createElement('div');
        const dot2 = document.createElement('div');
        const dot3 = document.createElement('div');

        maindom.appendChild(dot1)
        maindom.appendChild(dot2)
        maindom.appendChild(dot3)

        maindom.classList.add('ld_maindom');
        dot1.classList.add('ld_dot1');
        dot2.classList.add('ld_dot2');
        dot3.classList.add('ld_dot3');
        dot1.classList.add('ld_dot');
        dot2.classList.add('ld_dot');
        dot3.classList.add('ld_dot');

        dot1.classList.add('ld_animation');
        dot2.classList.add('ld_animation');
        dot3.classList.add('ld_animation');


        document.querySelector(target).appendChild(maindom);
    }

    fetchData(){
        const db = new Database();
        db.pull();
    }

    snapSection(parent){
        document.querySelector(`#${parent.getAttribute('data-parent')}`).classList.toggle('ed');
    }

}
// app.fetchData();
const app = new _App();
app.notification();
