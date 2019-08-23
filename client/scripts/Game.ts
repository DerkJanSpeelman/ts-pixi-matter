import * as PIXI from 'pixi.js';
import Matter from './Matter';
import World from './World';

export default class Game {
    private container: HTMLElement = document.body;

    public engine: any;

    public app: PIXI.Application;

    public world: World;

    constructor() {
        this.selectContainer();

        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        this.app = new PIXI.Application({
            transparent: true,
            resizeTo: this.container,
        });

        this.container.appendChild(this.app.view);

        this.engine = Matter.Engine.create();

        this.world = new World(this.engine, this.app);

        Matter.Engine.run(this.engine);
    }

    private selectContainer = (): void => {
        const container: HTMLElement | null = document.querySelector('.game-container');

        if (container !== null) {

            this.container = container;
        }
    }
}