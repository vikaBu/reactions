import React, { FunctionComponent, useState } from 'react';
import { Game } from "./Game/Game";
import styles from "./App.module.scss";

export type GameMode = "Playing" | "Finished";


export const App: FunctionComponent = () => {
    const [mode, setMode] = useState <GameMode>("Playing");

    if (mode === "Finished") {
        return <div>GAME OVER</div>
    }

    return (
        <main className={styles.main}>
            <Game mode={mode} setMode={setMode} />
        </main>
    );
};

