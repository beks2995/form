import React from 'react';
import {Select as Sel} from 'antd'
import {Controller} from "react-hook-form";
import {ISelectProps} from '../../types/types'

const Select = ({name, control, formData}: ISelectProps) => {
    return (
         <Controller name={name} control={control} render={({field: {onChange, value}}) => (
             <Sel options={formData} value={value} onChange={onChange}/>
         )}/>
    );
};

export default Select;