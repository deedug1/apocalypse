import * as PIXI from "./pixi.js";


class Location extends PIXI.Graphics {


    constructor(options) {
        super();
        this.interactive = true;
        this.beginFill(0xD1B000);
        this.drawCircle(0, 0, 25);
        this.endFill();
        this.on('pointerdown', (e) => {
            alert('location clicked');
        });
        this.x = options.x || 50;
        this.y = options.y || 100;

    }

}

export default Location