import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const VIDEO_CURRENT_TIME = 'videoplayer-current-time';
console.log(localStorage);


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
    localStorage.setItem(VIDEO_CURRENT_TIME, data.seconds);
}
player.on('timeupdate', throttle(onPlay, 2000));

player.setCurrentTime(localStorage.getItem(VIDEO_CURRENT_TIME))


