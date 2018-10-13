import Canvas from './components/Canvas/Canvas';
import './style.sass';

const cameraList = document.querySelector('.camera__list');
(function() {
    for (let i = 0; i < Canvas.length; i++) {
        cameraList.appendChild(Canvas[i]);
    }
})();