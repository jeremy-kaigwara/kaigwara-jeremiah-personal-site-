const sections = document.querySelectorAll('.section');
const sectBtns= document.querySelectorAll('.controls');
const sectBtn= document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}
// Sections  active
allSections.addEventListener('click',(e)=>{
    const id = e.target.dataset.id;
    if(id){
        //remove selected form the other btns
        sectBtns.forEach((btn)=>{
            btn.classlist.remove('active')
        })
        e.target.classlist.add('active')

        //hide other sections
        sections.forEach((section)=>{
            section.classlist.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})
PageTransitions();