import App from './app';
import InputSystem from './system/inputSystem';

window.onload = () => {
    new InputSystem();
    const app = new App();
    app.init();
}