import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [ steps, setSteps ] = useState(0)

    const IncreseSteps = () => {
        const stepCount = steps + 1
        setSteps(stepCount)
    }
        useEffect(()=>{
            console.log(steps)
        }, [steps])
    return (
        <div style={{border: '2px solid red', margin: '20px'}}>
            <h2>This is my smart watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={IncreseSteps}>Dowra...............</button>
            <Display name='garmin' steps={steps}></Display>
        </div>
    );
};

export default Watch;