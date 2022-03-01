import Road from "../object/road";
import Space from "../object/space";
import Wall from "../object/wall";
import Setting from "../system/setting";
import { Block } from "./block";
import { Direction, DirectionType } from "./direction";
import MapGenerator from "./mapGenerator";

export default class Map {
    private mapGenerator: MapGenerator;
    private mapData:MapObject[][] = new Array(100).fill(0).map(() => new Array(100));
    private tempMapData:MapObject[][] = new Array(25).fill(0).map(() => new Array(25));

    constructor(
        private ctx: CanvasRenderingContext2D,
    ){
        this.mapGenerator = new MapGenerator(ctx, 25, 25, 1, 1);
        this.init();
        
    }
     getMapData(x: number, y: number): string {
        return this.mapData[y][x].constructor.name;
    }


    init(): void{
        console.log(this.mapData);
        this.generateMap();
    }

    draw(): void{
        this.mapData.forEach(rows => rows.forEach( obj => obj.draw()));
    }

    update(): void{

    }

    private generateMap() {
        this.tempMapData = this.mapGenerator.getRandomMap();
    }
    

   
}