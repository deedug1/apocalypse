
import * as PIXI from "./pixi.js";
export class Graph {

    constructor() {

        this.nodes = [];
        this.nodeTemplate = new PIXI.Graphics();
        this.nodeTemplate.beginFill(0xCC8699);
        this.nodeTemplate.drawCircle(0, 0, 25);
        this.nodeTemplate.endFill();
        this.renderContainer = new PIXI.Container();


    }

    addNode(point) {
        const node = new Node();
        node.point = point;
        this.nodes.push(node);
    }

    addEdge(src, dest) {
        if(src >= this.nodes.length || dest >= this.nodes.length) {
            throw new Error("Invalid node identifiers");
        }

        const srcNode = this.nodes[src];
        const destNode = this.nodes[dest];

        srcNode.addAdjacentNode(destNode);
        destNode.addAdjacentNode(srcNode);
    }

    draw() {
        const destroyables = this.renderContainer.removeChildren();
        destroyables.forEach((child) => child.destroy());

        this.nodes.forEach((node) => {
            node.adjacent.forEach((adjNode) => {
                const edgeDrawing = new PIXI.Graphics();
                edgeDrawing.lineStyle(2, 0xFFFFFF, 1);
                edgeDrawing.moveTo(node.point.x, node.point.y);
                edgeDrawing.lineTo(adjNode.point.x, adjNode.point.y);
                this.drawEdge(edgeDrawing);
            });
            const nodeDrawing = new PIXI.Graphics(this.nodeTemplate.geometry);
            nodeDrawing.x = node.point.x;
            nodeDrawing.y = node.point.y;
            this.drawNode(nodeDrawing);

            
            
        });
    }

    drawEdge(edgeDrawing) {
        this.renderContainer.addChildAt(edgeDrawing, 0);
    }

    drawNode(nodeDrawing) {
        this.renderContainer.addChild(nodeDrawing);
    }
}

class Node {

    constructor() {
        this.point = {x: 0, y: 0};
        this.adjacent = [];
    }

    addAdjacentNode(node) {
        this.adjacent.push(node);
    }
}