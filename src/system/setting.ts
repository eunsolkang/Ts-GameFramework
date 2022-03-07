export default class Setting{
    static instance = new Setting();
    private canvasWidth: number;
    private canvasHeight: number;
    private row: number;
    private col: number;
    private blockSize: number;
    private canvas: HTMLCanvasElement;

    constructor(){
        this.blockSize = 35;
        this.row = 50;
        this.col = 25;
        this.canvasWidth = this.row * this.blockSize;
        this.canvasHeight = this.col * this.blockSize;
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    }

    init(){
        
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
    }

    getCanvasWidth(): number{
        return this.canvasWidth
    }

    getCanvasHeight(): number{
        return this.canvasHeight;
    }

    getBlockSize(): number{
        return this.blockSize;
    }
}