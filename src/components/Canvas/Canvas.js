import { Camera, getCameraPos } from '../Camera/Camera';

const Canvas = document.createElement('canvas');
const ctx = Canvas.getContext('2d');
Canvas.className = 'canvas';
Canvas.width = 640;
Canvas.height = 480;
ctx.filter = `
    brightness(1)
    contrast(1)
`;

let columns = 2;
let rows = 2;
let width = Canvas.width / columns;
let height = Canvas.height / rows;

let cameraPos = getCameraPos(columns, rows, width, height);

const animate = () => {

    for (let i = 0; i < Camera.length; i++) {
        ctx.drawImage(Camera[i], cameraPos[i][0], cameraPos[i][1], cameraPos[i][2], cameraPos[i][3]);
    }

    window.requestAnimationFrame(animate);
}

animate();

export default Canvas;