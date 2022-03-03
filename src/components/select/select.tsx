import React, {VFC} from 'react';
import {Select as Sel} from 'antd'
import {Controller} from "react-hook-form";
import {TSelectProps} from '@Common/types/types'

const Select: VFC<TSelectProps> = ({name, control, formData}) => {
    return (
         <Controller name={name} control={control} render={({field: {onChange, value}}) => (
             <Sel options={formData} value={value} onChange={onChange}/>
         )}/>
    );
};

export default Select;