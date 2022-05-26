import Player from '@vimeo/player';

const iframe = document.querySelector("#vimeo-player")
const player = new Player(iframe);

const onPlay = (data) => {
    data = {
        duration: 61.857,
        percent: 0.049,
        seconds: 3.034,
        customKey: "videoplayer-current-time",
    }
    
};
let value = player.on('timeupdate', onPlay);
 





player.setCurrentTime(value).then(function(seconds) {
    // seconds = the current playback position
}).catch(function(error) {
    // an error occurred
});


