import React from "react";

import BoardSquare from "./boardSquare";
import { BOARD_ARR, CURRENT_PLAYER, MISS_HIT } from "../../utils/DB";
import Axis from "./Axis";

const Board = (
  //onClickBoradSquare,
  //deployedShips,
  boardOwner,
  gameStarted
  ) => {
                
  return (
    <div className="content">
      {/*<div className="battleship__content--board">*/}
        <div className="board-wrapper">
          {/*<h1>{boardOwner}</h1>*/}  
          {/*<div className="battleship__content--board--container">*/}
            <Axis direction="row" />
            <Axis direction="column" />
            <div
              className={`battleship__board ${
              gameStarted && boardOwner
              ? "disbale-block" : ""}`}
            >
            {BOARD_ARR.map((row, columnIndex) => {
              /**Массив состоящий из 10 строк с 10 ячейками*/
              return row.map((_, rowIndex) => {
                return (
                  <BoardSquare
                    divId={`cell_${rowIndex}_${columnIndex}`}
                    /*onClick={() =>
                      onClickBoradSquare({
                        rowIndex,
                        columnIndex,
                        clickedShip:
                        isOcupiedCheck(rowIndex, columnIndex).shipName || ""
                      })
                    }
                    boardOwner={boardOwner}
                    isOcupiedCheck={isOcupiedCheck(rowIndex, columnIndex)}*/
                    key={`cell_${rowIndex}_${columnIndex}`}
                  />
                );
              })
            })}
            </div>
          {/*</div>*/}
        </div>
      {/*</div>*/}
    </div>
  );
};

export default Board;
