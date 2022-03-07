import { GameStateManager } from "./gameState/gameStateManager";
import Setting from "./system/setting";

export default class App{
    private gameStateManager: GameStateManager;
    private setting: Setting;

    constructor(){
        this.setting = new Setting();
        this.gameStateManager = new GameStateManager(this.setting);
    }

    init(): void{
        this.setting.init();
        this.gameLoop();
    }

    private gameLoop(){
        requestAnimationFrame(this.gameLoop.bind(this));
        this.gameStateManager.draw();
        this.gameStateManager.update();
    }
}

