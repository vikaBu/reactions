import React, { FunctionComponent, useState } from 'react';
import { Game } from "./Game/Game";
import styles from "./App.module.scss";
import moment from "moment";
import { GameOver } from './GameOver';

export type GameMode = "Playing" | "Finished";


export const App: FunctionComponent = () => {
    const [mode, setMode] = useState <GameMode>("Playing");
    const [startTime, setStartTime] = useState (moment.now());
    const [endTime, setEndTime] =useState (moment.now());
    const [listofTimes, setTimes] = useState<number[]>([15]);

    const startGame = () => {
        setMode("Playing");
        setStartTime(moment.now())
    }
    const endGame = () => {
        setMode("Finished");
        setEndTime(moment.now())
        
    }
    const gameTimeInMilliseconds = endTime - startTime

    const AddNewTime = (Time: number) => {
        setTimes(listofTimes.concat(Time));
    }

    if (mode === "Finished") {
        return <GameOver startGame={startGame} gameTimeInMilliseconds={gameTimeInMilliseconds} listOfTimes={listofTimes} AddTime={AddNewTime}/>
    }
    return (
        
        <main className={styles.main}>
            <Game endGame={endGame} />
        </main>
    )
    
};

