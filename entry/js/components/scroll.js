'use strict';

const Scroll = function(element) {
    this.element = element;
}

const scrollArea = document.querySelectorAll('.navigation-scroll__area');

Scroll.prototype = {
    initialize: function() {
        this.scroll();
        this.moveScroll();
    },  
    scroll: function () {
        const headerEl = this.element;

        window.addEventListener('scroll', () => {
            const offsetY = window.pageYOffset;

            if(offsetY == 0){
                headerEl.classList.remove('position-fixed');
            }else{
                headerEl.classList.add('position-fixed');
            }
        });
    },
    moveScroll: function() {
        scrollArea.forEach((el) => {
            el.addEventListener('click', (e, index) =>{
                const btns = el.querySelectorAll('.navigation-scroll__button');
                const thisBtn = e.target;
                const thisBtnDataName = thisBtn.dataset.label;
                const thisBtnWidth = thisBtn.offsetWidth; 
                let thisBtnMargin = 8; 
                let areaSpace = 15;
                let allBtnWidth = 0;

                // button select
                btns.forEach((btn) => {
                    btn.classList.remove('navigation-scroll__button--selected');  
                });
                thisBtn.classList.add('navigation-scroll__button--selected');

                // positionX
                for(let i=0; i < btns.length; i++){
                    let getDataName = btns[i].dataset.label;

                    allBtnWidth += btns[i].offsetWidth + thisBtnMargin;
                    if((getDataName == thisBtnDataName)){
                        break;
                    }
                    // console.log(allBtnWidth);
                }
                el.scrollLeft = allBtnWidth - thisBtnWidth - areaSpace;
            });    
        });
    }
}
module.exports = Scroll;