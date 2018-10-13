import { Camera } from '../Camera/Camera';

const Canvas = [];
const controlls = document.querySelector('.camera__controlls');

(function() {
    for (let i = 0; i < Camera.length; i++) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.className = `camera camera-${i+1}`;
        canvas.width = 640;
        canvas.height = 480;
        ctx.filter = `
            brightness(1)
            contrast(1)
        `;

        canvas.addEventListener('click', (e) => {
            canvas.classList.toggle('camera_open');
            controlls.classList.toggle('camera__controlls_visible');
        });

        const animate = () => {
            ctx.drawImage(Camera[i], 0, 0, canvas.width, canvas.height);
            window.requestAnimationFrame(animate);
        }
        animate();

        Canvas.push(canvas);
    }

})();

export default Canvas;