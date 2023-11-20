// import notification from "./notification.js";

function projectSegment(){
    document.querySelector('.projectSegment').style.display = 'block';
}


const scaler = document.querySelectorAll('.scaler');
const scalerConfig = {
    'movable':false,
    'initialX':null,
    'finalX':null
}
scaler.forEach((scale)=>{
    scale.addEventListener('mousedown',(e)=>{
        scalerConfig.movable = true;
        scalerConfig.initialX = e.clientX;
    })
    scale.addEventListener('mousemove',(e)=>{
        if(scalerConfig.movable){
            scalerConfig.finalX = e.clientX;
        
            const diff = (scalerConfig.finalX - scalerConfig.initialX);
            
            if(scale.classList.contains('L')){
                const parentElem = document.querySelector('._comp');
                const com_wid = parentElem.offsetWidth;
                parentElem.style.width = (com_wid + diff + 'px');
            }else{
                const parentElem = document.querySelector('._prop');
                const com_wid = parentElem.offsetWidth;
                parentElem.style.width = (com_wid - diff + 'px');
            }
        }
    })
    scale.addEventListener('mouseup',(e)=>{
        scalerConfig.movable = false;
        scalerConfig.initialX = 0;
        scalerConfig.finalX = 0;
    })
    scale.addEventListener('mouseleave',(e)=>{
        setTimeout(() => {
            scalerConfig.movable = false;
            scalerConfig.initialX = 0;
            scalerConfig.finalX = 0;
        }, 600);
    })

})

function changeTab(elem){
    const data = elem.getAttribute('data-frame');
    try{
        const el = document.querySelectorAll('.frs');
        el.forEach((y)=>{
            y.style.display = 'none';
        })
        const body = document.querySelector(`.${data}`);
        body.style.display = 'flex';
        if(data == 'out_frame'){
            const silder = document.querySelector('.innerline');
            silder.style.left = '0';
        }
        else{
            const silder = document.querySelector('.innerline');
            silder.style.left = '50%';
        }
    }catch(err){
        alert('internal error' ,err);
    }
}
document.querySelector('.projectWindow').scrollIntoView();


function extendOptions(elem){
    const pullup = document.querySelector('.pullups');
    document.querySelectorAll('.dd_div').forEach((y)=>{
        y.style.display = 'none';
    })
    const dom = document.querySelector(`.${elem.getAttribute('data-type')}`);
    pullup.style.display = 'block';
    pullup.classList.add('fadein');
    dom.style.display = 'block';
    dom.classList.add('slidein');
    let i = 10;
    document.querySelectorAll('.dd_elem').forEach((y)=>{
       y.style.animationDelay = `0.${i}s`
        y.classList.add('slidein2');
        i += 1;
    })

    pullup.onclick = ()=>{
        pullup.style.display = 'none';
        document.querySelectorAll('.dd_div').forEach((y)=>{
            y.style.display = 'none';
        })
    }
}


function hovers(){
    const  elem = document.querySelectorAll('.dd_elem');
    elem.forEach((item)=>{
        if(item.classList.contains('grp')){
            hoverassigner(item)
        }
        else if(item.classList.contains('add_grps') || item.classList.contains('wid_grps')){
            add_pulls(item);
        }
        else{
            console.log('none');
        }
    })
}
hovers();

function hoverassigner(elem){
    let child = null;
    elem.addEventListener('mouseover',(e)=>{
        child = document.querySelector(`.${elem.getAttribute('data-name')}`);
        child.classList.add('makeDisplay');
        child.classList.add('slidein');
    })
    elem.addEventListener('mouseout',(e)=>{
            child.classList.remove('makeDisplay');
            child.classList.remove('slidein');
    })
}


function loadComp(name,childof){
    const chunk = `

    <div class="childcomp flex-row centerY fadein" style="animation-delay: 0.5s; opacity: 0;">
    <div class="sidebar"></div>
    <div class="cont flex-row centerY">
        <div class="name">Head</div>
        <div class="cc_prop">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
        </div>
        </div>
    </div>
    
    `
    document.querySelector('.comp_frame').insertAdjacentHTML('beforeend',chunk);

}
loadComp();

function snapCont(){
    const elem = document.querySelector('._comp')
    elem.classList.toggle('snap');
}
function snapProp(){
    const elem = document.querySelector('._prop')
    elem.classList.toggle('snap');
}

function loadChildelem(parent){
            const childDom = document.createElement('div');
            childDom.setAttribute('class','add_child')
            childDom.classList.add('childlist');
            childDom.innerHTML = 'this is a child dom .. where u can get every thing///'
            parent.appendChild(childDom);
            return childDom;
}


function add_pulls(parent){
    let glob = null
    let child = loadChildelem(parent);
    parent.addEventListener('mouseover',(e)=>{
        child.classList.add('makeDisplay');
        child.classList.add('slidein');
    })
    parent.addEventListener('mouseout',(e)=>{
                child.classList.remove('makeDisplay');
                child.classList.remove('slidein');
                // removeChildelem(parent);     
                console.log(e.clientX , e.clientY)
    })
}


