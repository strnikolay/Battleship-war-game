import React from "react";
import Game from "@/Components/Game";
import StartPage from "@/components/startPage";

export default function Home() {
  const [startGame, setStartGame] = React.useState(false);
  return (
    <>
      { !startGame &&
        <StartPage onClick={()=>setStartGame(true)} />
      }
      <Game />
    </>
  );
}
