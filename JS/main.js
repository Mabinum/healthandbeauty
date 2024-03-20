// 프로모션 수평 슬라이드 가능
new Swiper('.screen .swiper', {
  // Optional parameters
  direction: 'horizontal', //수평 슬라이드(기본값)
  loop: true, //반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  autoplay: { //자동 재생 여부 
    delay: 2000 // 5초마다 슬라이드 바뀜(기본값 : 3000)
  } ,
  // slidesPerView: 1,//한 번에 보여줄 슬라이드 개수 (기본값:1)
  // spaceBetween:10, //슬라이드 사이 여백(간격) px
  // centeredSlides: true, //1번 슬라이드가 가운데 보이기
  pagination: { //페이지 번호 사용
    el : '.screen .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true,
  },
  navigation: { //슬라이드의 이전/다음 버튼 사용
    nextEl: '.screen .swiper-button-next',
    prevEl: '.screen .swiper-button-prev',
  },
}); 

// 프로모션 수평 슬라이드 가능
new Swiper('.todayitem_right .swiper', {
  // Optional parameters
  direction: 'horizontal', //수평 슬라이드(기본값)
  loop: true, //반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  autoplay: { //자동 재생 여부 
    delay: 2000 // 5초마다 슬라이드 바뀜(기본값 : 3000)
  } ,
  // slidesPerView: 1,//한 번에 보여줄 슬라이드 개수 (기본값:1)
  // spaceBetween:10, //슬라이드 사이 여백(간격) px
  // centeredSlides: true, //1번 슬라이드가 가운데 보이기
  pagination: { //페이지 번호 사용
    el : '.todayitem_right .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true,
  },
  navigation: { //슬라이드의 이전/다음 버튼 사용
    nextEl: '.todayitem_right .swiper-button-next',
    prevEl: '.todayitem_right .swiper-button-prev',
  },
}); 

// 프로모션 섹션 토글 기능
const screenEl = document.querySelector('.screen');

// TODAY 추천상품
const itemRecommand = document.querySelector('.todayitem_subtitle_recommand');
const itemNewitem = document.querySelector('.todayitem_subtitle_newitem');
const itemBest = document.querySelector('.todayitem_subtitle_best');
// const itemRecommands = document.querySelector('.todayitem_subtitle_recommand.active');
// const itemNewitems = document.querySelector('.todayitem_subtitle_newitem.active');
// const itemBests = document.querySelector('.todayitem_subtitle_best.active');
const titleRecommand = document.querySelector('.recommand');
const titleNewitem = document.querySelector('.newitem');
const titleBest = document.querySelector('.best');

titleRecommand.addEventListener('click',function(){
  itemNewitem.classList.remove('active');
  itemBest.classList.remove('active');
  titleRecommand.setAttribute('style','border: 1px solid black; border-bottom: none; background-color: white;');
  titleNewitem.setAttribute('style','border-bottom: 1px solid black;');
  titleBest.setAttribute('style','border-bottom: 1px solid black;');
  // titleRecommand.setAttribute('style',"border-bottom : 1px solid white;");
  if (itemRecommand.classList.contains('active')) {
    
  } else {
    itemRecommand.classList.add('active');
  }
});
titleNewitem.addEventListener('click',function(){
  itemRecommand.classList.remove('active');
  itemBest.classList.remove('active');
  titleNewitem.setAttribute('style','border: 1px solid black; border-bottom: none; background-color: white;');
  titleRecommand.setAttribute('style','border-bottom: 1px solid black;');
  titleBest.setAttribute('style','border-bottom: 1px solid black;');
  if (itemNewitem.classList.contains('active')) {
    
  } else {
    itemNewitem.classList.add('active');
  }
});
titleBest.addEventListener('click',function(){
  itemNewitem.classList.remove('active');
  itemRecommand.classList.remove('active'); 
  titleBest.setAttribute('style','border: 1px solid black; border-bottom: none; background-color: white;');
  titleNewitem.setAttribute('style','border-bottom: 1px solid black;');
  titleRecommand.setAttribute('style','border-bottom: 1px solid black;');
  if (itemBest.classList.contains('active')) {
    
  } else {
    itemBest.classList.add('active');
  }
});

const sidebarFixed = document.querySelector('#sidebar_fix');
window.addEventListener('scroll',function(){
  // console.log(window.scrollY);
  if (window.scrollY >= 2800){
    sidebarFixed.style.position = 'fixed';
    sidebarFixed.style.top = '100px';
  } else {
    sidebarFixed.style.position = 'absolute';
  }
});
const badgeFixed = document.querySelector('.badge_fix');
window.addEventListener('scroll',function(){
  if (window.scrollY >= 700){
    badgeFixed.style.position = 'fixed';
    badgeFixed.style.top = '100px';
  } else {
    badgeFixed.style.position = 'absolute';
  }
});
const category = document.querySelector('.header_category');
window.addEventListener('scroll',function(){
  if (window.scrollY >= 300){
    category.style.position = 'fixed';
    category.style.top = '0px';
  } else {
    category.style.position = 'relative';
  }
});

const notices = document.querySelector('.notice_event_title_notice');
const events = document.querySelector('.notice_event_title_event');
const notice = document.querySelector('.notice_event_content_notice');
const eventc = document.querySelector('.notice_event_content_event');
notices.addEventListener('click',function(){
  eventc.classList.remove('active');
  notice.classList.add('active');
});
events.addEventListener('click',function(){
  notice.classList.remove('active');
  eventc.classList.add('active');
});

const headerClose = document.querySelector('.header_top > .material-icons');
const headerHead = document.querySelector('.header_top');
headerClose.addEventListener('click',function(){
  // console.log(headerHead);
  headerHead.style.display = 'none';
  headerClose.style.display = 'none';
});

