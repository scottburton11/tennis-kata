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

Game.prototype.scorePoint = function(player, points) {
	if(points)
		this.increaseScore(player, points);
	else
		this.increaseScore(player, 1);
}

Game.prototype.increaseScore = function(player, points) {
	if(player == 0) {
		for(i=0; i<points; i++) {
			if(this.player1_score == 0)
				this.player1_score = 15;
			if(this.player1_score == 15)
				this.player1_score = 30;
			if(this.player1_score == 30)
				this.player1_score = 40;
		}
	}
	if(player == 1) {
		for(i=0; i<points; i++) {
			if(this.player2_score == 0)
				this.player2_score = 15;
			if(this.player2_score == 15)
				this.player2_score = 30;
			if(this.player2_score == 30)
				this.player2_score = 40;
		}
	}
}

function Player() {
}
