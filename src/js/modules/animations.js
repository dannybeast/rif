import emergence from 'emergence.js';
export default function () {
    emergence.init({
        container: window,
        reset: false,
        handheld: true,
        throttle: 100,
        elemCushion: 0.45,
        offsetTop:0
    });

}