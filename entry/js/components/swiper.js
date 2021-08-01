'use strict';

const SwiperSlide = function() {}

const visualSwiper = document.querySelector('.visual-banner');
const eventSwiper1 = document.querySelectorAll('.event-banner-type1') ? document.querySelectorAll('.event-banner-type1') : '';
const eventSwiper2 = document.querySelectorAll('.event-banner-type2') ? document.querySelectorAll('.event-banner-type2') : '';
const eventSwiper3 = document.querySelectorAll('.event-banner-type3') ? document.querySelectorAll('.event-banner-type3') : '';
const eventSwiper4 = document.querySelectorAll('.event-banner-type4') ? document.querySelectorAll('.event-banner-type4') : '';

let eventBannerType1 = undefined;
let eventBannerType2 = undefined;
let eventBannerType3 = undefined;
let eventBannerType4 = undefined;

SwiperSlide.prototype = {
    initialize: function() {
        this.setEventBannerType1();
        this.setEventBannerType2();
        this.setEventBannerType3();
        this.setEventBannerType4();
    },
    setVisualBanner: function() {
        const swiper = visualSwiper.querySelector('.visual-banner__swiper');
        const items = visualSwiper.querySelectorAll('.visual-banner__item');

        if(items.length > 1) {
            this.visualBanner = new Swiper(swiper, {
                slidesPerView: 'auto',
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    dynamicBullets: true,
                }
            });
        }
    },
    setEventBannerType1: function() {
        eventSwiper1.forEach((item) => {
            const swipers = item.querySelector('.event-banner__swiper');
            const items = item.querySelectorAll('.event-banner__item');

            if(items.length > 1) {
                eventBannerType1 = new Swiper(swipers, {
                    slidesPerView: 'auto',
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination"
                    },
                    autoplay: true,
                    speed: 500
                });
            }
        });
    },
    setEventBannerType2: function() {
        eventSwiper2.forEach((item) => {
            const swipers = item.querySelector('.event-banner__swiper');
            const items = item.querySelectorAll('.event-banner__item');

            if(items.length > 1) {
                eventBannerType2 = new Swiper(swipers, {
                    slidesPerView: 'auto',
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination"
                    },
                    autoplay: true,
                    speed: 500
                });
            }
        });
    },
    setEventBannerType3: function() {
        eventSwiper3.forEach((item) => {
            const swipers = item.querySelector('.event-banner__swiper');
            const items = item.querySelectorAll('.event-banner__item');

            if(items.length > 1) {
                eventBannerType3 = new Swiper(swipers, {
                    slidesPerView: 'auto',
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination"
                    },
                    autoplay: true,
                    speed: 500
                });
            }
        });
    },
    setEventBannerType4: function() {
        eventSwiper4.forEach((item) => {
            const swipers = item.querySelector('.event-banner__swiper');
            const items = item.querySelectorAll('.event-banner__item');

            if(items.length > 1) {
                eventBannerType4 = new Swiper(swipers, {
                    slidesPerView: 'auto',
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination"
                    },
                    autoplay: true,
                    speed: 500
                });
            }
        });
    },
    update: function() {
        eventSwiper1.forEach((item) => {
            const length = item.querySelectorAll('.event-banner__item').length;
            if(length > 1) {
                eventBannerType1.update();
            }
        });
        eventSwiper2.forEach((item) => {
            const length = item.querySelectorAll('.event-banner__item').length;
            if(length > 1) {
                eventBannerType2.update();
            }
        });
        eventSwiper3.forEach((item) => {
            const length = item.querySelectorAll('.event-banner__item').length;
            if(length > 1) {
                eventBannerType3.update();
            }
        });
        eventSwiper4.forEach((item) => {
            const length = item.querySelectorAll('.event-banner__item').length;
            if(length > 1) {
                eventBannerType4.update();
            }
        });
    }
}
module.exports = SwiperSlide;