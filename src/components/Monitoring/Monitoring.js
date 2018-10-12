export function monitoring() {
    const cameraList = document.querySelector('.camera__list');
    const cameraUrl = getCameraUrl();

    cameraUrl.forEach((element, index, array) => {
        let container = document.createElement('div');
        container.className = 'camera-inner';
        container.addEventListener('click', openCamera);

        let video = document.createElement('video');
        video.className = `camera camera-${index + 1} camera-active`;
        video.autoplay = true;
        video.controls = false;
        video.muted = true;

        initVideo(video, element);
        container.appendChild(video);
        cameraList.appendChild(container);
    });
}

function initVideo(video, url) {
    if (Hls.isSupported()) {
        let hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    }
}

function getCameraUrl() {
    return [
        'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fsosed%2Fmaster.m3u8',
        'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fcat%2Fmaster.m3u8',
        'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fdog%2Fmaster.m3u8',
        'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fhall%2Fmaster.m3u8'
    ];
}

function openCamera(e) {
    this.classList.toggle('camera-inner_opened');
}