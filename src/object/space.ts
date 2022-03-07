export default class Space extends Canvas implements MapObject {
    constructor(
        private x: number,
        private y: number,
    ){
        super();
    }
    init(): void {
        
    }
    draw(): void {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(this.x, this.y, 1, 1)
    }
    update(): void {
        
    }
    
}