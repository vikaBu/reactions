import React, {FunctionComponent, useState} from "react";
import styles from "./Board.module.scss";
import {Button} from "../Button/Button";


interface BoardProps {
    currentScore: number;
    changeCurrentScore: (newGameScore: number) => void;

}
// setting up current button and what is the button actually clicked
export const Board: FunctionComponent<BoardProps> = ({currentScore, changeCurrentScore}) => {
    const [activeButtonId, setActiveButtonId] = useState(0);

// each of the buttons here have states equal to what it is meant to do 
    return (
        <svg className={styles.board} viewBox="0, 0, 1000, 2000">
            
            <Button id={0} x={150} y={300} activeButtonId={activeButtonId} setActiveButtonId ={setActiveButtonId} currentScore={currentScore} changeCurrentScore={changeCurrentScore} />
            <Button id={1} x={150} y={1000}activeButtonId={activeButtonId} setActiveButtonId ={setActiveButtonId} currentScore={currentScore} changeCurrentScore={changeCurrentScore}/>
            <Button id={2} x={150} y={1700}activeButtonId={activeButtonId} setActiveButtonId ={setActiveButtonId} currentScore={currentScore} changeCurrentScore={changeCurrentScore}/>

            <Button id={3} x={850} y={300}activeButtonId={activeButtonId} setActiveButtonId ={setActiveButtonId} currentScore={currentScore} changeCurrentScore={changeCurrentScore}/>
            <Button id={4} x={850} y={1000}activeButtonId={activeButtonId} setActiveButtonId ={setActiveButtonId}currentScore={currentScore} changeCurrentScore={changeCurrentScore}/>
            <Button id={5} x={850} y={1700}activeButtonId={activeButtonId} setActiveButtonId ={setActiveButtonId}currentScore={currentScore} changeCurrentScore={changeCurrentScore}/>

            <Button id={6} x={500} y={650}activeButtonId={activeButtonId} setActiveButtonId ={setActiveButtonId} currentScore={currentScore} changeCurrentScore={changeCurrentScore}/>
            <Button id={7} x={500} y={1350}activeButtonId={activeButtonId} setActiveButtonId ={setActiveButtonId}currentScore={currentScore} changeCurrentScore={changeCurrentScore}/>
        </svg>
    );
};
