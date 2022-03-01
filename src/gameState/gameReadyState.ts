import InputSystem from "../system/inputSystem";
import Setting from "../system/setting";
import GameStartState from "./gameStartState";
import { GameStateManager } from "./gameStateManager";

export default class GameReadyState implements GameState{
    constructor(
        private ctx: CanvasRenderingContext2D,
        private setting: Setting,
        private gameStateManager: GameStateManager,
    ){
        this.gameStateManager = gameStateManager;
        this.ctx = ctx;
        this.setting = setting;
    }

    init() {
        
    }
    draw() {
        this.ctx.fillRect(0, 0, 100, 100);
    }
    update() {
        if( InputSystem.instance.isKeyDown('Enter') ){
            this.gameStateManager.onChangeGameState(
                new GameStartState(this.ctx, this.setting)
            );
        }
    }
}