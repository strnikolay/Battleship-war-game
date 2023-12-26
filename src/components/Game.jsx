/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState} from "react";

import Board from "./board/board";
import Legend from "./legend";
import { SHIPS} from "./DB";

const Game = () => {
  const [isGameStarted, setIsStartGame] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(true);

  const [nonPlaysmentPlayerShips, setNonPlaysmentPlayerShips] = useState(SHIPS);

  /*useEffect(() => {
    if (gameStarted && !currentPlayer) {
      setTimeout(() => {
        attackByComputer();
      }, [200]);
    }
  }, [gameStarted, currentPlayer]);*/


  return(
    <div className="screen">
      <Legend
        isGameStarted={isGameStarted}
        nonPlaysmentPlayerShips={nonPlaysmentPlayerShips}
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
