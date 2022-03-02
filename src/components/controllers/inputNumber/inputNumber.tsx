import React from 'react';
import {InputNumber as IN} from "antd";
import {Controller} from "react-hook-form";
import {IInputNumberProps} from "../../types/types";

const InputNumber = ({name, control, min, max, label, m2}: IInputNumberProps) => {
    return (
        <Controller name={name} control={control} render={({field: {onChange, value}}) => (
            // todo recreate styles without using inline-styles
            <div style={{maxWidth: '100px', display: 'flex', flexWrap: 'wrap'}}>
                <IN type={'number'} min={min} max={max} onChange={onChange} value={value} style={{maxWidth: '70px'}}/>
                {/* // todo recreate styles without using inline-styles */}
                {m2 && <span style={{marginLeft: '4px'}}>м<sup>2</sup></span>}
                {label && <span>{label}</span>}
            </div>
        )}/>
    );
};

export default InputNumber;