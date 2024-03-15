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

// 프로모션 섹션 토글 기능
const screenEl = document.querySelector('.screen');

// TODAY 추천상품
const itemRecommand = document.querySelector('.todayitem_subtitle_recommand');
const itemNewitem = document.querySelector('.todayitem_subtitle_newitem');
const itemBest = document.querySelector('.todayitem_subtitle_best');
const itemRecommands = document.querySelector('.todayitem_subtitle_recommand.active');
const itemNewitems = document.querySelector('.todayitem_subtitle_newitem.active');
const itemBests = document.querySelector('.todayitem_subtitle_best.active');
const titleRecommand = document.querySelector('.recommand');
const titleNewitem = document.querySelector('.newitem');
const titleBest = document.querySelector('.best');

titleRecommand.addEventListener('click',function(){
  itemNewitems.classList.remove('active');
  itemBests.classList.remove('active');
  if (itemRecommand.classList.contains('active')) {
    
  } else {
    itemRecommand.classList.add('active');
  }
});
titleNewitem.addEventListener('click',function(){
  itemNewitems.classList.remove('active');
  itemBests.classList.remove('active');
  if (itemNewitem.classList.contains('active')) {
    
  } else {
    itemNewitem.classList.add('active');
  }
});
titleBest.addEventListener('click',function(){
  itemNewitems.classList.remove('active');
  itemRecommands.classList.remove('active');
  if (itemBest.classList.contains('active')) {
    
  } else {
    itemBest.classList.add('active');
  }
});

