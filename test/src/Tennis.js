// Tennis

function Game(player1, player2) {
	if(player1 && player2) {
		this.player1 = player1;
		this.player2 = player2;
		this.ready = true;
	}
	else {
		this.ready = false;
	}
}

function Player() {
}
