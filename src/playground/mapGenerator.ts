import Road from "../object/road";
import Space from "../object/space";
import Wall from "../object/wall";
import { Block } from "./block";
import { Direction, DirectionType } from "./direction";

export default class MapGenerator extends Canvas{
    private mapData:MapObject[][];

    constructor(
        private absoluteX: number,
        private absoluteY: number,
        private startX: number,
        private startY: number,
        private width: number,
        private height: number,
    ){
        super();
        this.mapData = new Array(width).fill(0).map(() => new Array(height));

    }

    private initMapData(absoluteX: number, absoluteY: number): void{
        for(let y= absoluteY; y< absoluteY + this.height; y++){
            for(let x=absoluteX; x< absoluteX + this.width; x++){
                this.mapData[y][x] = new Space(x, y);
            }
        }
    }
    private createSideWall(absoluteX: number, absoluteY: number): void{
        for(let y=absoluteY; y<absoluteY + this.height; y++){
            for(let x=absoluteX; x<absoluteX + this.width; x++){
                if ( y === absoluteY || x === absoluteX || y === absoluteY + this.height - 1 || x === absoluteX + this.width -1  ){
                    this.mapData[y][x] = new Wall(x, y);
                }
            }
        }
    }


    private getMapData(x: number, y: number): string {
        if ( x < this.absoluteX || x > this.width + this.absoluteX || y < this.absoluteY || y > this.width + this.absoluteY){
            console.error(`참조범위 초과! x : ${x}, y: ${y}`);
            return "";
        }
        return this.mapData[y][x].constructor.name;
    }

    private setMapData(x: number, y: number, obj: MapObject): void {
        if ( x < this.absoluteX || x > this.width + this.absoluteX || y < this.absoluteY || y > this.height + this.absoluteY){
            console.error(`참조범위 초과! x : ${x}, y: ${y}`);
            return;
        }
        this.mapData[y][x] = obj;
    }

    private randomInt(start: number, end: number): number{
        return Math.floor(Math.random() * ((end - start) + 1)) + start
    }

    private make(){
        let x = this.startX + this.absoluteX, y = this.startY + this.absoluteY;
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
                this.mapData[ry][rx] = new Road(rx, ry);
            }
            x += direction.dx * (distance - 1);
            y += direction.dy * (distance - 1);
            

            this.mapData[y + direction.dy][x + direction.dx] = new Wall( x + direction.dx, y + direction.dy);
            
            movingCount -= 1;

        }
    }

    getRandomMap(absoluteX: number, absoluteY: number): MapObject[][] {
        this.initMapData(absoluteX, absoluteY);
        this.createSideWall(absoluteX, absoluteY);
        this.make();
        return this.mapData;
    }
}