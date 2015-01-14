var mainState = {

    preload: function() {
        game.load.image('player', 'assets/player.png');
        game.load.image('dahls', 'assets/dahls.png');
    },

    create: function() {

        game.stage.backgroundColor = "#3366ff";

        this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
        this.player.anchor.setTo(0.5, 0.5);

        game.physics.arcade.enable(this.player);

        this.beer = game.add.sprite(40, 40, 'dahls');
        game.physics.arcade.enable(this.beer);

        this.cursor = game.input.keyboard.createCursorKeys();

        this.scoreLabel = game.add.text(20, 20, 'Beers: 1');
        this.score = 0;

    },

    update: function() {
        game.physics.arcade.overlap(this.player, this.beer, this.drinkBeer, null, this);
        this.movePlayer();
        this.player.angle += this.score;
    },

    drinkBeer: function() {
        var newX = game.rnd.integerInRange(0, game.world.width - 50);
        var newY = game.rnd.integerInRange(0, game.world.height - 146);
        this.beer.reset(newX, newY);

        this.score += 1;
        this.scoreLabel.text = 'Beers: ' + this.score;

    },

    movePlayer: function() {
        if (this.cursor.left.isDown) {
            this.player.body.velocity.x = -200;
        }
        else if (this.cursor.right.isDown) {
            this.player.body.velocity.x = 200;
        }
        else {
            this.player.body.velocity.x = 0;
        }
        if (this.cursor.up.isDown) {
            this.player.body.velocity.y = -200;
        }
        else if (this.cursor.down.isDown) {
            this.player.body.velocity.y = 200;
        }
        else {
            this.player.body.velocity.y = 0;
        }
    }
};

var game = new Phaser.Game(800, 600, Phaser.Auto, 'gameDiv');
game.state.add('main', mainState);
game.state.start('main');