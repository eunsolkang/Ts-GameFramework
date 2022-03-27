import Canvas from "../playground/canvas";
import Map from "../playground/map";
import Player from "../playground/player";
import Setting from "../system/setting";

export default class GameStartState extends Canvas implements GameState{
    private player: Player;
    private map: Map;

    constructor(
    ) {
        super();
        this.ctx.scale(Setting.blockSize, Setting.blockSize);
        this.map = new Map();
        this.player = new Player(this.map, 5, 5, 1, 1, 1);
    }

    init(): void {
    }
    draw(): void {
        this.ctx.clearRect(
            0, 0, 
            Setting.canvasWidth,
            Setting.canvasHeight
        )
        this.map.draw();
        this.player.draw();
    }
    update(): void {
        this.player.update();
        this.map.update();
    }
}