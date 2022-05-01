import * as PIXI from "./pixi.js";


class Location extends PIXI.Graphics {


    constructor(options) {
        super(options.geometry);
        this.interactive = true;
        this.on('pointerdown', (e) => {
            alert('auto change');
            e.stopPropagation();
        });
        this.x = options.x || 50;
        this.y = options.y || 100;

    }


}



export default Location