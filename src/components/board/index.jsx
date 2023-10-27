import React from "react";

import BoardSquare from "./BoardSquare";
import { BOARD_ARR, CURRENT_PLAYER, MISS_HIT } from "../../utils/DB";
import Axis from "./Axis";

const Board = ({
  onClickBoradSquare,
  deployedShips,
  boardOwner,
  hasGameStarted
}) => {

  
  const isOcupiedCheck = (rowIndex, columnIndex) => {
    let flag = false;
    let shipName = "";
    let isAttacked = false;
    let isShipSunk = false;
    const currentRowColumnIndex = `${rowIndex}${columnIndex}`;
    deployedShips &&
      deployedShips.forEach((ship) => {
        if (!ship?.shipName) {
          return;
        }
        if (
          ship?.shipName === MISS_HIT &&
          currentRowColumnIndex === ship.attackedBlocks.join()
        ) {
          shipName = MISS_HIT;
        } else if (
          ship?.shipName !== MISS_HIT &&
          ship.occupiedBlocks.includes(currentRowColumnIndex)
        ) {
          flag = true;
          shipName = ship?.shipName;
          isShipSunk = ship.isShipSunk ? true : false;
          isAttacked = ship.attackedBlocks.includes(currentRowColumnIndex)
            ? true
            : false;
        }
      });
    return {
      isOcupied: flag,
      shipName,
      isShipSunk,
      isAttacked
    };
  };

  return (
    <div className="battleship__content">
      <div className="battleship__content--board">
        <div className="battleship__content--board--wrapper">
          <h1>Player Board</h1>
          <div className="battleship__content--board--container"> 
            <Axis direction="row" />
            <Axis direction="column" />
            <div
              className={`battleship__board ${
              hasGameStarted && boardOwner === CURRENT_PLAYER.player
              ? "disbale-block"
              : ""
              }`}
            >

              {BOARD_ARR.map((row, columnIndex) => {
                return row.map((_, rowIndex) => {
                  return (
                    <>

                    <BoardSquare
                      divId={`cell_${rowIndex}_${columnIndex}`}
                      onClick={() =>
                        onClickBoradSquare({
                          rowIndex,
                          columnIndex,
                          clickedShip:
                          isOcupiedCheck(rowIndex, columnIndex).shipName || ""
                        })
                      }
                      boardOwner={boardOwner}
                      isOcupiedCheck={isOcupiedCheck(rowIndex, columnIndex)}
                      key={`cell_${rowIndex}_${columnIndex}`}
                    />
                    </>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
