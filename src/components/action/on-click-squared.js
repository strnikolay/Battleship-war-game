
const onClickSquare = ({ rowIndex, columnIndex, clickedShip }) => {
    if (hasGameStarted) {
      if (currentPlayer === CURRENT_PLAYER.player) {
        playSound("click");
        handleMissileAttackOnBoard(rowIndex, columnIndex, clickedShip);
      }
      return;
    }
    if (!hasGameStarted && playerDeployedShips.length === SHIPS.length) {
      Swal.fire("Its time to fire the missiles captain");
    } else {
      if (selectedShipToPlace) {
        const isHorizontal = playersSelectedAxis === AXIS.horizontal;
        if (
          hasEnoughBlocksToDeploy(
            isHorizontal,
            selectedShipToPlace.shipLength,
            rowIndex,
            columnIndex
          )
        ) {
          const occupiedBlocks = getOccupiableBlocks(
            isHorizontal,
            rowIndex,
            columnIndex,
            selectedShipToPlace.shipLength
          );

          if (
            isPlaceTakenByOtherShip(playerDeployedShips, occupiedBlocks)
              .isPlaceTaken
          ) {
            Swal.fire("Block already taken!!");
            return;
          }
          const deployableShipObj = {
            shipName: selectedShipToPlace.name,
            shipLength: selectedShipToPlace.shipLength,
            occupiedBlocks,
            isHorizontal,
            currentPlayer,
            attackedBlocks: [],
            isShipSunk: false
          };
          setPlayerDeployedShips([...playerDeployedShips, deployableShipObj]);

          const newnonPlaysmentPlayerShips = nonPlaysmentPlayerShips.filter(
            (ship) => ship.name !== selectedShipToPlace.name
          );

          setnonPlaysmentPlayerShips(newnonPlaysmentPlayerShips);
          setSelectedShipToPlace(null);
          playSound("click");
        } else {
          Swal.fire("Can not place ship here!!");
        }
      } else {
        Swal.fire("Please select your ship first!!");
      }
    }
};
  
export default onClickSquare;  