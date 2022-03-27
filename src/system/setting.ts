import Canvas from "../playground/canvas";

export default class Setting extends Canvas{
    static instance = new Setting();
    private canvasWidth: number;
    private canvasHeight: number;
    private row: number;
    private col: number;
    private blockSize: number;

    constructor(){
        super();
        this.blockSize = 35;
        this.row = 50;
        this.col = 25;
        this.canvasWidth = this.row * this.blockSize;
        this.canvasHeight = this.col * this.blockSize;
    }

    init(){
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
    }

    private getCanvasWidth(){
        return this.canvasWidth
    }

    private getCanvasHeight(): number{
        return this.canvasHeight;
    }

    private getBlockSize(): number{
        return this.blockSize;
    }

    static get canvasWidth(): number{
        return this.instance.getCanvasWidth();
    }

    static get canvasHeight(): number{
        return this.instance.getCanvasHeight();
    }

    static get blockSize(): number {
        return this.instance.getCanvasHeight();
    }

    static initCanvasSize(): void {
        this.instance.init();
    }

  
}