import GameInitState from "./gameState/gameInitState";
import GameReadyState from "./gameState/gameReadyState";

export default class App{
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private gameState: GameState;

    constructor(){
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');
        this.gameState = new GameInitState();
    }

    init(): void{
        this.gameState = new GameReadyState(this.ctx);
        this.gameLoop();
    }

    private gameLoop(){
        requestAnimationFrame(this.gameLoop.bind(this));
        this.gameState.draw();
        this.gameState.update();
    }
}

