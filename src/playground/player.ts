import InputSystem from "../system/inputSystem";
import { Block } from "./block";
import Canvas from "./canvas";
import Map from "./map";

export default class Player extends Canvas{
    constructor(
        private map: Map,
        private x: number = 5,
        private y: number = 5,
        private width: number = 1,
        private height: number = 1,
        private speed =  1,
        private color: string = 'red',
    ){
        super();
    }
    private collisionDetect(x: number, y: number){
        return this.map.getMapData(x, y) === Block.Wall
    }
    draw(): void {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(): void {
        if ( InputSystem.instance.isKeyDown('ArrowRight') ){
            if (this.collisionDetect(this.x + 1, this.y) ) return;
            this.x += this.speed;
            InputSystem.instance.onSubmitAction('ArrowRight')
        } if ( InputSystem.instance.isKeyDown('ArrowLeft')) {
            if (this.collisionDetect(this.x - 1, this.y) ) return;
            this.x -= this.speed;
            InputSystem.instance.onSubmitAction('ArrowLeft')
        } if ( InputSystem.instance.isKeyDown('ArrowUp')){
            if (this.collisionDetect(this.x, this.y - 1) ) return;
            this.y -= this.speed;
            InputSystem.instance.onSubmitAction('ArrowUp')
        } if ( InputSystem.instance.isKeyDown('ArrowDown')){
            if (this.collisionDetect(this.x, this.y + 1) ) return;
            this.y += this.speed;
            InputSystem.instance.onSubmitAction('ArrowDown')
        }
    }
}