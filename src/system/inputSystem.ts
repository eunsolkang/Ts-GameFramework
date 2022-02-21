
export default class InputSystem {
    static instance = new InputSystem();
    private keyInput: Map<string, boolean> = new Map();

    constructor(){
        window.addEventListener('keydown', this.onKeydown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }
    private onKeyUp(event: KeyboardEvent): void{
        this.keyInput.set(event.key, false);
    }
    private onKeydown(event: KeyboardEvent): void{
        this.keyInput.set(event.key, true)
    }
    
    isKeyDown(key: string): boolean{        
        return this.keyInput.get(key) ?? false;
    }
}

const inputSystem = new InputSystem();