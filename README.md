# ts-pixi-matter
### Typescript [Pixi.js](https://github.com/pixijs/pixi.js) + [Matter.js](https://github.com/liabru/matter-js)

 > Forked from https://github.com/DerkJanSpeelman/nodeboiler which contains a Node server written in Typescript and sets up packages like webpack.

In this repo, Pixi.js and Matter.js are combined. Pixi is mainly used for rendering, Matter takes care of the physics. In `client/scripts` are all the scripts that include Pixi.js and Matter.js.

<br>

Quick explanation per file:

**Matter.ts**: eventhough "Matter" is reffering to the Matter.js package, the author decided to have several attributes inside the `Matter` variable. Like `Matter.Engine`. But when reffering to `Matter.Engine`, it will basically initialize again. So I created this `Matter.ts` file to make sure the Matter attributes are initialized only once.

**Game.ts**: this class will select a container (an element with the class `game-container` or if that's not possible, `document.body` will be selected as container). The `Matter.Engine` is created here. And after the World is initialized, it will also run the `Matter.Engine`.

**World.ts**: this class will contain the elements of the game world. Like: blocks, the player, enemies, et cetera. This is also the class that will initalize the Player object in this example.

**Player.ts**: this object extends the `PhysicsSprite` class. It does nothing else yet. This might be the place to add HP/lives, stamina, et cetera.

**PhysicsSprite.ts**: this is the place where Pixi is connected to Matter (take a look at the `update` function, that's basically it). The `options` variable inside the `createPhysics` function might be put into a parameter as well.
