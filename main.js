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
const screenToggleElBtn = document.querySelector('.toggle-screen');
const screenToggleElIcon = screenEl.querySelector('.material-icons');

// Quiz
// 토글 버튼을 클릭했을 때 아래 기능을 실행
// 프로모션 요소에 'hide'라는 클래스 값이 있으면 보임 처리!
// ('hide')클래스를 제거하고 아이콘 모양을 'upload'로 설정
// 그렇지 않으면 숨김 처리!
// ('hide')클래스를 추가하고 아이콘 모양을 'download'로 설정

screenToggleElBtn.addEventListener('click',function(){
  if (screenEl.classList.contains('hide')) {
    screenEl.classList.remove('hide');
    screenToggleElIcon.textContent = 'upload';
  } else {
    screenEl.classList.add('hide');
    screenToggleElIcon.textContent = 'download';
  }
});

let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() { //라이브러리가 이 함수의 이름을 찾아 실행
  player = new YT.Player('player', { //id가 player인 요소
    // height: '360',
    // width: '640',   기본값
    videoId: 'p_9xigrPUbE', //최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay : false, //자동 재생 유무
      loop : true, //반복 재생 유무(아래 플레이리스트 옵션 필수)
      playlist: 'p_9xigrPUbE' //반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // onReady: onPlayerReady,
      // 영상이 준비되었을 때 지정한 함수를 실행
      onReady: function(event){
        // event.target : 재생되고 있는 영상 요소
        event.target.mute(); //음소거
      }
      // 'onStateChange': onPlayerStateChange
    }
  });
}