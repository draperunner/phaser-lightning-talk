var mainState = {

    preload: function() {

        game.load.image('odd', 'assets/player.png');
    },

    create: function() {

        this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'odd');
        this.player.anchor.setTo(0.5, 0.5);

        game.stage.backgroundColor = "#3366ff";


    },

    update: function() {

        this.player.angle += 1;

    }

};

var game = new Phaser.Game(800, 600, Phaser.Auto, 'gameDiv');
game.state.add('main', mainState);
game.state.start('main');