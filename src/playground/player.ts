import InputSystem from "../system/inputSystem";

export default class Player {
    constructor(
        private ctx: CanvasRenderingContext2D,
        private x: number = 0,
        private y: number = 0,
        private width: number = 100,
        private height: number = 100,
        private speed =  10,
        private color: string = 'red',
    ){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.ctx = ctx;
    }
    draw(): void {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(): void {
        if ( InputSystem.instance.isKeyDown('ArrowRight') ){
            this.x += this.speed;
        } if ( InputSystem.instance.isKeyDown('ArrowLeft')) {
            this.x -= this.speed;
        } if ( InputSystem.instance.isKeyDown('ArrowUp')){
            this.y -= this.speed;
        } if ( InputSystem.instance.isKeyDown('ArrowDown')){
            this.y += this.speed;
        }
    }
}