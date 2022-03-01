import Road from "../object/road";
import Space from "../object/space";
import Wall from "../object/wall";
import { Block } from "./block";
import { Direction, DirectionType } from "./direction";

export default class MapGenerator {
    private mapData:MapObject[][];

    constructor(
        private ctx: CanvasRenderingContext2D,
        private width: number,
        private height: number,
        private startX: number,
        private startY: number,
    ){
        this.mapData = new Array(width).fill(0).map(() => new Array(height));
        this.initMapData();
        this.createSideWall();
    }

    private initMapData(): void{
        for(let y=0; y<this.height; y++){
            for(let x=0; x<this.width; x++){
                this.mapData[y][x] = new Space(this.ctx, x, y);
            }
        }
    }
    private createSideWall(): void{
        for(let y=0; y<this.height; y++){
            for(let x=0; x<this.width; x++){
                if ( y === 0 || x === 0 || y === this.height - 1 || x === this.width -1  ){
                    this.mapData[y][x] = new Wall(this.ctx, x, y);
                }
            }
        }
    }


    private getMapData(x: number, y: number): string {
        if ( x < 0 || x > this.width || y < 0 || y > this.width){
            console.error(`참조범위 초과! x : ${x}, y: ${y}`);
            return "";
        }
        return this.mapData[y][x].constructor.name;
    }

    private setMapData(x: number, y: number, obj: MapObject): void {
        if ( x < 0 || x > this.width || y < 0 || y > this.width){
            console.error(`참조범위 초과! x : ${x}, y: ${y}`);
            return;
        }
        this.mapData[y][x] = obj;
    }

    private randomInt(start: number, end: number): number{
        return Math.floor(Math.random() * ((end - start) + 1)) + start
    }

    private make(){
        const sx = 1, sy = 1
        let x = sx, y = sy;
        let movingCount = 10;
        let movingSeed = 50;
        let direction: DirectionType = Direction[1];
        while(movingCount > 0 && movingSeed > 0){
            const randomDir =  Direction[this.randomInt(0, 3)];
            movingSeed -= 1;
            if ( randomDir.dy + direction.dy === 0 && randomDir.dx + direction.dx === 0) continue;

            let maxDistance = 0;  

            while(this.getMapData(x + randomDir.dx * maxDistance, y + randomDir.dy * maxDistance) !== Block.Wall){
                maxDistance ++;
            }
            movingSeed -= 1;
            if( maxDistance <= 2 ) continue;

            const distance = this.randomInt(2, maxDistance);

            if ( this.getMapData(x + randomDir.dx * distance, y + randomDir.dy * distance) === Block.Road ) continue;
        
            direction = randomDir;

            for(let rx = x, ry = y; !((rx === x + direction.dx * distance) && (ry === y + direction.dy * distance)); rx += direction.dx ,ry += direction.dy){
                console.log(this.mapData[ry][rx], ry, rx)
                this.mapData[ry][rx] = new Road(this.ctx, rx, ry);
            }
            x += direction.dx * (distance - 1);
            y += direction.dy * (distance - 1);
            

            this.mapData[y + direction.dy][x + direction.dx] = new Wall(this.ctx, x + direction.dx, y + direction.dy);
            
            movingCount -= 1;

        }
    }

    getRandomMap(): MapObject[][] {
        this.make();
        return this.mapData;
    }
}