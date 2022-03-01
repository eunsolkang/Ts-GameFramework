import Setting from "../system/setting";
import GameReadyState from "./gameReadyState";

export class GameStateManager {
    private state: GameState;

    constructor(
        private ctx: CanvasRenderingContext2D,
        private setting: Setting,
    ){
        this.state = new GameReadyState(this.ctx, this.setting, this);
    }

    onChangeGameState(state: GameState){
        this.state = state;
    }

    init(): void {
        this.state.init();
    }
    draw(): void {
        this.state.draw();
    }
    update(): void {
        this.state.update();
    }
    
}