import { Texture } from 'pixi.js';
import PhysicsSprite from "./PhysicsSprite";

export default class Player extends PhysicsSprite {
    constructor(
        id: number | string,
        engine: any,
        category: 1,
        x: number,
        y: number,
        width: number,
        height: number,
        texture: Texture,
    ) {
        super(id, engine, category, x, y, width, height, texture);
    }
}