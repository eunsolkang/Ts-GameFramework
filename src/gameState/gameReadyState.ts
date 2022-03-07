import InputSystem from "../system/inputSystem";
import Setting from "../system/setting";
import GameStartState from "./gameStartState";
import { GameStateManager } from "./gameStateManager";

export default class GameReadyState extends Canvas implements GameState{
    constructor(
        private setting: Setting,
        private gameStateManager: GameStateManager,
    ){
        super();
        this.gameStateManager = gameStateManager;
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
                new GameStartState(this.setting)
            );
        }
    }
}