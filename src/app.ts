import { GameStateManager } from "./gameState/gameStateManager";
import Setting from "./system/setting";

export default class App{
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private gameStateManager: GameStateManager;
    private setting: Setting;

    constructor(){
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');
        this.setting = new Setting();
        this.gameStateManager = new GameStateManager(this.ctx, this.setting);
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

