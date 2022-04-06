// button test
document.querySelector('button').onclick = myFunction;

function myFunction() {
    const video = document.createElement('video');
    video.src = 'https://github.com/Speez24/totally-good-website/blob/main/videoplayback.mp4';
    video.autoplay = true;
    document.body.appendChild(video);
    console.log('Success!');
};
