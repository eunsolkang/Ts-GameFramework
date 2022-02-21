import GameInitState from "./gameState/gameInitState";
import GameReadyState from "./gameState/gameReadyState";
import GameStartState from "./gameState/gameStartState";
import InputSystem from "./system/inputSystem";
import Setting from "./system/setting";

export default class App{
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private gameState: GameState;
    private setting: Setting;

    constructor(){
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');
        this.gameState = new GameInitState();
        this.setting = new Setting(this.canvas);
    }

    init(): void{
        this.setting.init();
        this.gameState = new GameStartState(this.ctx, this.setting);
        this.gameLoop();
    }

    private gameLoop(){
        requestAnimationFrame(this.gameLoop.bind(this));
        this.gameState.draw();
        this.gameState.update();
    }
}

