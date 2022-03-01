export default class Road implements MapObject {
    constructor(
        private ctx: CanvasRenderingContext2D,
        private x: number,
        private y: number,
    ){
        this.ctx = ctx;
    }
    init(): void {
        
    }
    draw(): void {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.x, this.y, 1, 1)
    }
    update(): void {
        
    }
    
}