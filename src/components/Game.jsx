/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";

import StartPage from "./startPage";
import Board from "./board"
import TitleBar from "./TitleBar";




const Game = () => {

  // comon states
  const [startGame, setStartGame] = useState(false);

  if (!startGame) {
    return <StartPage onClick={() => setStartGame(true)} />;
  }
  return (
    <div className="battleship__stage">
      {/*<TitleBar />*/}
      <Summary
        hasGameStarted={hasGameStarted}
        playerAvailableShips={playerAvailableShips}
        playerDeployedShips={playerDeployedShips}
        computerDeployedShips={computerDeployedShips}
        handleGameStart={handleGameStart}
        currentPlayer={currentPlayer}
      />

              <Board />
                {/*hasGameStarted={hasGameStarted}
                selectedShipToPlace={selectedShipToPlace}
                onClickBoradSquare={onClickBoradSquare}
                deployedShips={playerDeployedShips}
                boardOwner={CURRENT_PLAYER.player}
              />*/}
    </div> 
  );
};

Game.displayName = "Battleship";

export default Game;
