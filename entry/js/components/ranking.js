'use strict';

const Ranking = function(element, length, highRank) {
    if(!element) {
        return;
    }
    this.element = element;
    this.length = length;
    this.highRank = highRank;
}

Ranking.prototype = {
    initialize: function() {
        this.rankCount();
    },
    rankCount: function() {
        const target = this.element;
        const checkNum = this.highRank;

        target.forEach((item, index) => {
            const number = index + 1;

            item.textContent = number;
            if(number <= checkNum) {
                item.style.backgroundColor = '#333';
            }
        });
    }
}
module.exports = Ranking;