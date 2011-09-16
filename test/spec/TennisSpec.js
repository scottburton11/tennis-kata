// Tennis specs

describe("A game of Tennis", function(){
  var game;
  var player1;
  var player2;

  describe("with two players", function(){

    beforeEach(function(){
      player1 = new Player();
      player2 = new Player();
      game = new Game(player1, player2);
    });

    it("should be ready to play", function(){
      expect(game.ready).toBeTruthy();
    });

    it("player1's score should start at 0", function(){
      expect(game.player1_score).toEqual(0);
    });

    it("player2's score should start at 0", function(){
      expect(game.player2_score).toEqual(0);
    });
  });

  describe("with less than two players", function(){
    beforeEach(function(){
      game = new Game();
    });

    it("should not be ready to play", function(){
      expect(game.ready).toBeFalsy();
    });
  });

});
