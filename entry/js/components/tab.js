'use strict';

const TabMenu = function(element, sectionEl) {
    if(!element) {
        return;
    }
    this.element = element;
    this.sectionEl = sectionEl;
}

TabMenu.prototype = {
    initialize: function() {
        this.onClick();
    },
    onClick: function() {
        const tabMenu = this.element;
        const tabMenuItem = tabMenu.querySelectorAll('.navigation-tab__button');
        const tabSection = this.sectionEl;
        const tabSectionItem = tabSection.querySelectorAll('.navigation-tab__section-item');

        tabMenu.addEventListener('click', (e) =>{
            const self = e.target;
            const tabDataName = e.target.dataset.label;

            // menu : class remove & add
            tabMenuItem.forEach((menu) => {
                menu.classList.remove('navigation-tab__button--selected');
            });
            self.classList.add('navigation-tab__button--selected');

            // section : class remove & add
            tabSectionItem.forEach((section) => {
                const tabSectionName = section.dataset.label;
                section.classList.remove('navigation-tab__section-item--show');
                if(tabDataName == tabSectionName) {
                    section.classList.add('navigation-tab__section-item--show');
                }
            });     
            
            // slider update
            ui.index.slider.update();
            
        },false);        
    }
}
module.exports = TabMenu;