'use strict';

const ProductsLimit = function(element, limitLength) {
    if(!element) {
        return;
    }
    this.element = element;
    this.limitLength = limitLength;
}

ProductsLimit.prototype = {
    initialize: function() {
        this.productsCount();
    },
    productsCount: function() {
        const thisEl = this.element;
        const thisLimit = this.limitLength;
        const productsArea = thisEl.querySelectorAll('.product-list__area-type2');

        productsArea.forEach((item) => {
            const items = item.querySelectorAll('.product-list__item');
            const Itemlength = items.length;
            let htmlMoreView = '';
            
            if(Itemlength >= thisLimit) {
                items.forEach((el, index) => {
                    const thisLength = index + 1;
                    if(thisLength >= thisLimit) {
                        el.removeChild(el.children[0]);
                    }
                    if(thisLength == thisLimit) {
                        el.classList.add('product-list__more-view');

                        // a 태그 javascript:void(0) -> 전체상품 링크로 연결 필요
                        htmlMoreView += '<a href="javascript:void(0)" class="product-list__link">'
                                    + '<div class="product-list__more-view-text">'
                                        + '<em>'+Itemlength+'</em>개 상품'
                                    + '</div>'
                                    + '<span class="product-list__more-view-button">전체보기</span>'
                                + '</a>';
                        el.innerHTML = htmlMoreView;
                    }
                });
            }
        });
    }
}
module.exports = ProductsLimit;