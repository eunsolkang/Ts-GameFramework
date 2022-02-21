export default class Setting{
    private canvasWidth: number;
    private canvasHeight: number;

    constructor(private canvas: HTMLCanvasElement){
        this.canvas = canvas;
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
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
}