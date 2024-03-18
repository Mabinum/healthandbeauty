let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() { //라이브러리가 이 함수의 이름을 찾아 실행
  player = new YT.Player('player', { //id가 player인 요소
    // height: '360',
    // width: '640',   기본값
    width: '533',
    height: '300',
    videoId: 'p_9xigrPUbE', //최초 재생할 유튜브 영상 ID
    playerVars: {
      // autoplay : ture, //자동 재생 유무
      loop : true, //반복 재생 유무(아래 플레이리스트 옵션 필수)
      playlist: 'p_9xigrPUbE' //반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // onReady: onPlayerReady,
      // 영상이 준비되었을 때 지정한 함수를 실행
      onReady: function(event){
        // event.target : 재생되고 있는 영상 요소
        // event.target.mute(); //음소거
      }
      // 'onStateChange': onPlayerStateChange
    }
  });
}