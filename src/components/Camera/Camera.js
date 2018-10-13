const Camera = [];

(function() {
    const cameraUrl = getCameraUrl();

    cameraUrl.forEach((element, index, array) => {
        let camera = document.createElement('video');
        camera.className = `camera camera-${index + 1} camera-active`;
        camera.autoplay = true;
        camera.controls = false;
        camera.muted = true;

        initVideo(camera, element);
        Camera.push(camera);
    });
})();

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

function getCameraPos(columns, rows, width, height) {
    let position = [];
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            position.push([j * width, i * height, width, height]);
        }
    }

    return position;
}

export { Camera, getCameraPos };