import React, { FunctionComponent, useState } from 'react';

interface LeaderProps {

    listOfTimes: number[];

}

export const LeaderBoard: FunctionComponent<LeaderProps> = ({ listOfTimes }) => {

    const listofItems: JSX.Element[] = [];
    listOfTimes.forEach(time => {
        listofItems.push(<li>{time}</li>)
    })

return <ol>{listofItems}</ol>

}
