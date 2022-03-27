import GameReadyState from "./gameReadyState";

export class GameStateManager {
    private state: GameState;

    constructor(
    ){
        this.state = new GameReadyState(this);
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