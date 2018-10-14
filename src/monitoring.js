import Canvas from './components/Canvas/Canvas';
import './style.sass';

const cameraList = document.querySelector('.camera__list');
const cameraBackBtn = document.querySelector('.camera__btn');
const cameraControlls = document.querySelector('.camera__controlls');
const brightnessControll = document.querySelector('.range-controll_brightness');
const contrastControll = document.querySelector('.range-controll_contrast');
const volumeControll = document.querySelector('.volume__controll');

(function() {
    for (let i = 0; i < Canvas.length; i++) {
        cameraList.appendChild(Canvas[i]);
    }

    cameraBackBtn.addEventListener('click', function() {
        const camera = document.querySelector('.camera_open');
        camera.classList.add('camera_muted');
        camera.classList.remove('camera_open');
        cameraControlls.classList.remove('camera__controlls_visible');
    });

    contrastControll.addEventListener('input', function() {
        const canvas = document.querySelector('.camera_open');
        const ctx = canvas.getContext('2d');
        ctx.filter = `brightness(${this.value / 100})`;
    });

    brightnessControll.addEventListener('input', function() {
        const canvas = document.querySelector('.camera_open');
        const ctx = canvas.getContext('2d');
        ctx.filter = `contrast(${this.value / 100})`;
    });

    volumeControll.addEventListener('click', function() {
        this.classList.toggle('volume__controll_inactive');
        const canvas = document.querySelector('.camera_open');
        canvas.classList.toggle('camera_muted');
    })

})();