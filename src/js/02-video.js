import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';
let currentSeconds = null;
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(reloadPlay, 1000));

function reloadPlay(e) {
    // console.log(e);
    currentSeconds = e.seconds;
    localStorage.setItem('videoplayer-current-time', currentSeconds);
    // console.log(currentSeconds);
}
player.setCurrentTime(localStorage.getItem
    ('videoplayer-current-time') || 0);