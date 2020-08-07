import React, {FunctionComponent, useState} from "react";
import styles from "./GameOver.module.scss";
import { LeaderBoard } from "./LeaderBoard";

interface GameOverProps {
    startGame: () => void;
    gameTimeInMilliseconds: number;
    listOfTimes: number[];
    AddTime: (time: number) => void;
    
} 

export const GameOver: FunctionComponent<GameOverProps> = ({startGame, gameTimeInMilliseconds,listOfTimes, AddTime}) => {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Contratulations, you did it</h1>
            <p className={styles.message}>You completed the game in {gameTimeInMilliseconds /1000} seconds.</p>
            <LeaderBoard listOfTimes={listOfTimes}/>
            <button onClick={()=> AddTime(gameTimeInMilliseconds)}>Save your Score </button>
            <button className={styles.button} onClick={startGame}>Try again</button>
        </section>
    );
}