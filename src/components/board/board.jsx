import React from "react";

import BoardSquare from "./boardSquare";
import { BOARD_ARR} from "../DB";
import Axis from "./Axis";

const Board = (
  boardOwner,
  gameStarted
  ) => {
                
  return (
    <div className="content">
        <div className="board-wrapper">
            <Axis direction="row" />
            <Axis direction="column" />
            <div
              className={`battleship__board ${
              gameStarted && boardOwner
              ? "disbale-block" : ""}`}
            >
            {BOARD_ARR.map((row, columnIndex) => {
              return row.map((_, rowIndex) => {
                return (
                  <BoardSquare
                    divId={`cell_${rowIndex}_${columnIndex}`}
                    key={`cell_${rowIndex}_${columnIndex}`}
                  />
                );
              })
            })}
            </div>
        </div>
    </div>
  );
};

export default Board;
