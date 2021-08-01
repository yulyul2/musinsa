/*
 * @namespace ui
 */

const SwiperSlide = require('./components/swiper');
const TabMenu = require('./components/tab');
const Ranking = require('./components/ranking');
const ProductsLimit = require('./components/productsLimit');
const Scroll = require('./components/scroll');

const tabMenu  = document.querySelector('.navigation-tab');
const tabSection  = document.querySelector('.navigation-tab__section');

const sectionRanking  = document.querySelector('.section__item-ranking');
const rankingItem  = sectionRanking.querySelectorAll('.product-list__item');
const rankingBedge = sectionRanking.querySelectorAll('.badge-rank');
const lengthRank = rankingItem.length;
let highRank = 2;

const sectionUpdate  = document.querySelector('.section__item-update');
let limitLength = 8;

const headerEl = document.querySelector('header');

window.ui = window.ui || {};
ui.index = ui.index || {};

// slider
ui.index.slider = {};
ui.index.slider = new SwiperSlide();
ui.index.slider.initialize();
ui.index.slider.setVisualBanner();

// tab
ui.index.tab = {};
ui.index.tab = new TabMenu(tabMenu, tabSection);
ui.index.tab.initialize();

// ranking
ui.index.ranking = {};
ui.index.ranking = new Ranking(rankingBedge, lengthRank, highRank);
ui.index.ranking.initialize();

// products
ui.index.products = {};
ui.index.products.limit = {};
ui.index.products.limit = new ProductsLimit(sectionUpdate, limitLength);
ui.index.products.limit.initialize();

// scroll
ui.index.scroll = {};
ui.index.scroll.mouse = {};
ui.index.scroll.mouse = new Scroll(headerEl);
ui.index.scroll.mouse.initialize();