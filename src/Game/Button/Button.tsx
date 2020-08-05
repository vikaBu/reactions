import React, { FunctionComponent } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    id: number;
    x: number;
    y: number;
    activeButtonId: number;
    setActiveButtonId: (id: number) => void;
    currentScore: number;
    changeCurrentScore: (score: number) => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ id, x, y, activeButtonId, setActiveButtonId,currentScore, changeCurrentScore }) => {
// is button active (its id is the same as active one)
    const isActive = id === activeButtonId;
//if it is active change its style
    const GetClassName = (): string => {
        if (isActive) {
            return `${styles.button} ${styles.active}`
            
        }
        return styles.button;
        // and if it is not keep it same
    }
    
    const buttonClicked = (): void => {
        if (isActive){
            // geting a random button to light up
            const randomButton = Math.floor(Math.random() * 8);
            setActiveButtonId(randomButton);
            changeCurrentScore(currentScore + 1);
        }
    }
        // setting up an event that if it is clicked the program knows
    return (
        <circle onClick={buttonClicked} className={GetClassName()} cx={x} cy={y} r={100} />
    );
        
};