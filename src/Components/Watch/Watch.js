import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Watch = () => {
    const [ step, setSteps ] = useState(0)

    const IncreseSteps = () => {
        const stepCount = step + 1
        setSteps(stepCount)
    }
        useEffect(()=>{
            console.log('hellow')
        }, [])
    return (
        <div>
            <h2>This is my smart watch</h2>
            <h3>My Current Steps: {step}</h3>
            <button onClick={IncreseSteps}>Dowra...............</button>
        </div>
    );
};

export default Watch;