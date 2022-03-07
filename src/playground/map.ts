import GameMap from "./mapGenerator";

export default class MapController extends Canvas {
    private mapData:MapObject[][] = new Array(25).fill(0).map(() => new Array(50));

    constructor(
    ){
        super();
        this.init();
    }
     getMapData(x: number, y: number): string {
        return this.mapData[y][x].constructor.name;
    }

    init(): void{
        this.generateMap();
    }

    draw(): void{
        this.mapData.forEach(rows => rows.forEach( obj => obj.draw()));
    }

    update(): void{

    }

    private generateMap() {
        const gameMap: GameMap = new GameMap(0, 0, 0, 0, 25, 25);

        console.log(this.mapData);   
    }
}