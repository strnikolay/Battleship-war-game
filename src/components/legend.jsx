import SummaryGameStats from "./SummaryStats";

const index = ({
  hasGameStarted,
  playerAvailableShips,
  handleGameStart,
  currentPlayer,
  playerDeployedShips,
  computerDeployedShips
}) => {
  return (
    <div className="summary">
      <div className="summary__info">
        <h3>Ходит игрок: {currentPlayer}</h3>
      </div>
      <div className="summary__instruction">
        {!hasGameStarted ? (
          <p>
            <span>
              Разместите свои корабли на игровой доске и начните игру
            </span>
          </p>
        ) : (
          <SummaryGameStats
            playerDeployedShips={playerDeployedShips}
            computerDeployedShips={computerDeployedShips}
          />
        )}

        <ul className="game__stats">
          <li>
            <span className="miss"></span>{" "}
            <span className="ins">Неудачная атака</span>
          </li>
          <li>
            <span className="hit"></span>
            <span className="ins">Попадание</span>
          </li>
          <li>
            <span className="ship-sunk"></span>{" "}
            <span className="ins">Уничтоженый корабль</span>
          </li>
        </ul>
      </div>
      {playerAvailableShips.length === 0 ? (
        <button className="summary__btn" onClick={handleGameStart}>
          {hasGameStarted ? "Restart Game" : "Start Game"}
        </button>
      ) : null}
    </div>
  );
};

export default index;