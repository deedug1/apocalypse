import * as PIXI from "./pixi.js";
import Location from "./location.js";
const app = new PIXI.Application({width: 600, height: 600, backgroundColor: 0xFFFFFF});
const location = new Location({x: 100, y: 100});
app.stage.addChild(location);

const container = document.getElementById("gameContainer");

container.appendChild(app.view);
