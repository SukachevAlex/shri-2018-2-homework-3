import { Camera } from '../Camera/Camera';

const Canvas = [];
const controlls = document.querySelector('.camera__controlls');
const volumeControll = document.querySelector('.volume__controll');

(function() {
    for (let i = 0; i < Camera.length; i++) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.className = `camera camera-${i+1} camera_muted`;
        canvas.width = 640;
        canvas.height = 480;
        ctx.filter = `
            brightness(1)
            contrast(1)
        `;

        canvas.addEventListener('click', (e) => {
            canvas.classList.toggle('camera_open');
            controlls.classList.toggle('camera__controlls_visible');
            canvas.classList.add('camera_muted');
            volumeControll.classList.add('volume__controll_inactive');
        });

        const animate = () => {
            ctx.drawImage(Camera[i], 0, 0, canvas.width, canvas.height);
            window.requestAnimationFrame(animate);

            canvas.classList.contains('camera_muted') ? Camera[i].muted = true : Camera[i].muted = false;
        }
        animate();

        Canvas.push(canvas);
    }

})();

export default Canvas;