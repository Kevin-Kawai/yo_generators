import 'phaser';

class InitialScene extends Phaser.Scene {
  constructor() {
    super({
      key: "GameScene"
    });
  }
  init(params: any): void {
  }

  preload(): void {
  }

  create(): void {
  }

  update(): void {
  }
}

const config: Phaser.Types.Core.GameConfig = {
  title: "Starfall",
  width: 800,
  height: 600,
  parent: "game",
  scene: [InitialScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
};

export class MyGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config)
  }

}

window.onload = () => {
  var game = new MyGame(config);
}
