// Optional: log which video is being played
const videos = document.querySelectorAll('video');

videos.forEach(video => {
    video.addEventListener('play', () => {
        console.log(`Now playing: ${video.currentSrc}`);
    });
});
