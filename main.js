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

