import * as PIXI from "./pixi.js";
import { Graph } from "./graph.js";
const app = new PIXI.Application({width: 1780, height: 900, backgroundColor: 0xCCCCCC});

const graph = new Graph();


graph.addNode({x: 100, y: 100});
graph.addNode({x: 100, y: 300});
graph.addNode({x: 200, y: 200});
graph.addNode({x: 300, y: 100});


graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(1, 2);


app.stage.addChild(graph.renderContainer);

graph.draw();



const container = document.getElementById("gameContainer");

container.appendChild(app.view);
const nodeToAnimate = graph.nodes[3];
let elapsed = 0.0;

app.ticker.add((delta) => {
    elapsed += delta;
    nodeToAnimate.point.x = 300.0 + Math.cos(elapsed/50.0) * 100.0;
    graph.draw();
});