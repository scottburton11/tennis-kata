// Tennis

function Game(player1, player2) {
	if(player1 && player2) {
		this.player1 = player1;
		this.player2 = player2;
	}
}

Game.prototype.ready = function() {
	this.player1 && this.player2;
}

function Player() {
}
