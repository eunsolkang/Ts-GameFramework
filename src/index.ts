import App from './app';
import InputSystem from './system/inputSystem';
import Setting from './system/setting';

window.onload = () => {
    new InputSystem();
    new Setting();
    const app = new App();
    app.init();
}