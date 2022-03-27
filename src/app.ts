import { GameStateManager } from "./gameState/gameStateManager";
import Setting from "./system/setting";

export default class App{
    private gameStateManager: GameStateManager;

    constructor(){
        this.gameStateManager = new GameStateManager();
    }

    init(): void{
        Setting.initCanvasSize();
        this.gameLoop();
    }

    private gameLoop(){
        requestAnimationFrame(this.gameLoop.bind(this));
        this.gameStateManager.draw();
        this.gameStateManager.update();
    }
}

