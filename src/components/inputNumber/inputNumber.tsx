import React, {VFC} from 'react';
import {InputNumber as IN} from "antd";
import {Controller} from "react-hook-form";
import {TInputNumberProps} from "@Common/types/types";

const InputNumber: VFC<TInputNumberProps> = ({name, control, label, square}) => {
  return (
    <Controller name={name} control={control} render={({field: {onChange, value}, fieldState}) => (
      <div className='input-item'>
        <IN type={'number'} onChange={onChange} value={value} className='input-number'/>
        {square && <span className='square'>м<sup>2</sup></span>}
        {label && <span>{label}</span>}
        {fieldState.error?.message && <span className='notice'>{fieldState.error?.message}</span>}
      </div>
    )}/>
  );
};

export default InputNumber;