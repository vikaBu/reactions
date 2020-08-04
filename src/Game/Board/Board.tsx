import React, {FunctionComponent} from "react";
import styles from "./Board.module.scss";
import {Button} from "../Button/Button";

export const Board: FunctionComponent = () => {
    return (
        <svg className={styles.board} viewBox="0, 0, 1000, 2000">
            <Button id={0} x={150} y={300}/>
            <Button id={1} x={150} y={1000}/>
            <Button id={2} x={150} y={1700}/>

            <Button id={3} x={850} y={300}/>
            <Button id={4} x={850} y={1000}/>
            <Button id={5} x={850} y={1700}/>

            <Button id={6} x={500} y={650}/>
            <Button id={7} x={500} y={1350}/>
        </svg>
    );
};
