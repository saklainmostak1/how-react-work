import React from 'react';

const Dail = (props) => {
    return (
        <div style={{border: '3px solid aqua', margin: '20px'}} >
            <h3>This is dail</h3>
            <p>Steps so far: {props.steps} </p>

        </div>
    );
};

export default Dail;