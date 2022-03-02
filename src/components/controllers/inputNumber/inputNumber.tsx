import React, {VFC} from 'react';
import {InputNumber as IN} from "antd";
import {Controller} from "react-hook-form";
import {IInputNumberProps} from "../../types/types";

const InputNumber: VFC<IInputNumberProps> = ({name, control, label, square}) => {
  return (
    <Controller name={name} control={control} render={({field: {onChange, value}, fieldState}) => (
      <div className='input-item'>
        <IN type={'number'} onChange={onChange} value={value} style={{maxWidth: '70px'}}/>
        {/* // todo recreate styles without using inline-styles */}
        {square && <span className='square'>м<sup>2</sup></span>}
        {label && <span>{label}</span>}
        {/* todo remove console */}
        {console.log(fieldState)}
        {fieldState.error?.message && <span className='notice'>{fieldState.error?.message}</span>}
      </div>
    )}/>
  );
};

export default InputNumber;