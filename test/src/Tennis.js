// Tennis

function Game(player1, player2) {
	if(player1 && player2) {
		this.player1 = player1;
		this.player2 = player2;
		this.player1_score = 0;
		this.player2_score = 0;
	}
	else {
		this.player1 = false;
		this.player2 = false;
	}
}

Game.prototype.ready = function() {
	if(this.player1 && this.player2)
		true;
	else
		false;
}

Game.prototype.scorePoint = function(player) {
	if(player == 0) {
		this.player1_score = 15;
	}
	else if(player == 1) {
		this.player2_score = 15;
	}
}

function Player() {
}
