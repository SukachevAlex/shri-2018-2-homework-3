import { Camera } from '../Camera/Camera';

const graph = document.querySelector('.volume-oscilloscope');
const fftConstant = 2048;
const smoothConstant = 0.5;
let audioCtx = null;
let analyser = null;
let gainNode = null;
let bufferLength = null;
let dataArray = null;
let canvas = null;
let ctx = null;
let sources = new Map();

export function initAudioVizualizer() {
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 50;
    graph.appendChild(canvas);
}

export function initAudioAnalyser() {

    if (!isAudioContextAvailable) {
        return;
    }

    if (!audioCtx) {
        audioCtx = new AudioContext();
        analyser = audioCtx.createAnalyser();
        analyser.smoothingTimeConstant = smoothConstant;
        analyser.fftSize = fftConstant;
        gainNode = audioCtx.createGain();
    } else {
        audioCtx.resume();
    }

    analyser.fftSize = fftConstant;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    analyser.getByteTimeDomainData(dataArray);
}

function draw() {

    requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, .05)';
    ctx.fillRect(0, 0, 200, 50);

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgb(0, 0, 0)';

    ctx.beginPath();

    let sliceWidth = canvas.width * 1.0 / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {

        let v = dataArray[i] / 128.0;
        let y = v * canvas.height / 2;
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        x += sliceWidth;
    }

    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
}


function isAudioContextAvailable() {
    return Boolean(window.AudioContext || window.webkitAudioContext);
}

export function connectStream(stream, num) {
    if (!sources.get(num)) {
        sources.set(num, audioCtx.createMediaElementSource(stream));
    }
    let source = sources.get(num);
    source.connect(analyser);
    analyser.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    draw();

}