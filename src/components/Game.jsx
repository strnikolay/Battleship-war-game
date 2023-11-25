/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState} from "react";

import Board from "./board/board";
import Legend from "./legend";





const Game = () => {
  const [gameStarted, setStartGame] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(true);


  return(
    <div className="screen">
      <Legend
        gameStarted={gameStarted}
        currentPlayer={currentPlayer}
      />
      <Board 
        GameStarted={gameStarted}
        boardOwner={true}
      />  
    </div>  
  );
};

Game.displayName = "Морской бой";

export default Game;
