import React from 'react';
import DeviceDetail from '../DeviceDetails/DeviceDetail';

const Device = (props) => {
    return (
        <div>
            <h1>Find: {props.name} </h1>
            <DeviceDetail price={props.price}></DeviceDetail>
        </div>
    );
};

export default Device;