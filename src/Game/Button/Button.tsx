import React, {FunctionComponent} from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    id: number;
    x: number;
    y: number;
}

export const Button: FunctionComponent<ButtonProps> = ({id, x, y}) => {
    return (
        <circle className={styles.button} cx={x} cy={y} r={100}/>
    );
};