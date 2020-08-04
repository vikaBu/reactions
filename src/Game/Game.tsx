import React, {FunctionComponent} from "react";
import styles from "./Game.module.scss";
import {Board} from "./Board/Board";

export const Game: FunctionComponent = () => {
    return (
        <section className={styles.content}>
            <Board/>
        </section>
    );
};
