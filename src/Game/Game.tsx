import React, {FunctionComponent, useState} from "react";
import styles from "./Game.module.scss";
import {Board} from "./Board/Board";
import { GameMode } from "../App";

interface GameState {
    mode: string;
    setMode: (state: GameMode) => void;
}

export const Game: FunctionComponent <GameState> = ({mode, setMode}) => {
    const [currentScore, changeCurrentScore] = useState(0);

    return (
        <section className={styles.content}>
            <h1>Your Score : {currentScore}</h1>
            <Board currentScore={currentScore} changeCurrentScore={changeCurrentScore} setMode = {setMode}/>
        </section>

        
    );
};
