export default class GameReadyState implements GameState{
    constructor(private ctx: CanvasRenderingContext2D){
        this.ctx = ctx;
    }
    
    init() {
        
    }
    draw() {
        this.ctx.fillRect(0, 0, 100, 100);
    }
    update() {
        
    }
}