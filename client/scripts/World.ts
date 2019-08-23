import { Application, Texture } from 'pixi.js';
import Matter from './Matter';
import Player from './Player';

export default class World {
    private _engine: any;

    public app: Application;

    public player: Player;

    constructor(
        engine: any,
        app: Application
    ) {
        this._engine = engine;

        this.app = app;

        let playerTexture: Texture = Texture.from(require('../assets/textures/blocks/dirt.png'));
        this.player = new Player('player', this._engine, 0x001, 10, 10, 40, 40, playerTexture);

        Matter.World.addBody(this._engine.world, this.player.body);

        this.app.stage.addChild(this.player.sprite);

        this.app.ticker.add(this.update);
    }

    private update = (): void => {
        this.player.update();
    }
}