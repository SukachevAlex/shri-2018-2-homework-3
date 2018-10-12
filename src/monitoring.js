import Canvas from './components/Canvas/Canvas';
import './style.sass';

const cameraList = document.querySelector('.camera__list');
(function() {
    cameraList.appendChild(Canvas);
})();