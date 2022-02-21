import Player from "../playground/player";
import Setting from "../system/setting";

export default class GameStartState implements GameState{
    private player: Player;

    constructor(
        private ctx: CanvasRenderingContext2D,
        private setting: Setting,
    ) {
        this.player = new Player(ctx, 0, 0, 100, 100, 20);
    }

    init(): void {
        //throw new Error("Method not implemented.");
    }
    draw(): void {
        this.ctx.clearRect(
            0, 0, 
            this.setting.getCanvasWidth(), 
            this.setting.getCanvasHeight()
        )
        this.player.draw();
    }
    update(): void {
        this.player.update();
    }

}