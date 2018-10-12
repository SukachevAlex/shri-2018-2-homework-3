import Camera from '../Camera/Camera';

const Canvas = document.createElement('canvas');
const ctx = Canvas.getContext('2d');
Canvas.className = 'canvas';
Canvas.width = 640;
Canvas.height = 480;
ctx.filter = `
    brightness(1)
    contrast(1)
`;

const animate = () => {

    let columns = 2;
    let rows = 2;
    let width = Canvas.width / columns;
    let height = Canvas.height / rows;

    for (let i = 0, c = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++, c++) {
            ctx.drawImage(Camera[c], j * width, i * height, width, height);
        }
    }
    window.requestAnimationFrame(animate);
}

animate();

export default Canvas;