

const Legend = ({
  gameStarted,
  currentPlayer,
}) => {
  return (
    <div className="legend">
      <div className="legend__info">
        <h3>Ходит: {currentPlayer ? "Игрок": "Компьютер"}</h3>
      </div>
      <div className="legend__instruction">
        {!gameStarted ? (
          <p>
            <span>
              Разместите свои корабли на игровой доске и начните игру
            </span>
          </p>
        ) : (
          <legendGameStats/>
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
    </div>
  );
};

export default Legend;