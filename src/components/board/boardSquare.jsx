import React from "react";

const BoardSquare = (divId) => {

  return (
    <div
      id={divId}
      className="board__square"
    ></div>
  );
};

BoardSquare.displayName = "BoardSquare";

export default BoardSquare;
