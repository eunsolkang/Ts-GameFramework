import Map from "../playground/map";
import Player from "../playground/player";
import Setting from "../system/setting";

export default class GameStartState extends Canvas implements GameState{
    private player: Player;
    private map: Map;

    constructor(
        private setting: Setting,
        
    ) {
        super();
        const blockSize = Setting.instance.getBlockSize();
        this.ctx.scale(blockSize, blockSize);
        this.map = new Map();
        this.player = new Player(this.map, 5, 5, 1, 1, 1);
    }

    init(): void {
    }
    draw(): void {
        this.ctx.clearRect(
            0, 0, 
            this.setting.getCanvasWidth(), 
            this.setting.getCanvasHeight()
        )
        this.map.draw();
        this.player.draw();
    }
    update(): void {
        this.player.update();
        this.map.update();
    }

}