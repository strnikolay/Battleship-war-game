
/** Поступает номер кликнутой ячейки */
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

export default isOcupiedCheck;