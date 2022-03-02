// TODO remove unuse variables
import React, {VFC} from 'react';
import {Radio} from "antd";
import {Controller} from "react-hook-form";
import {IRadioBtnsProps} from "../../types/types";

// TODO return type
const RadioButton = ({name, control, formData, optionType = 'default'}: IRadioBtnsProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({field: {onChange, value}}) => (
            <Radio.Group
                options={formData}
                optionType={optionType}
                className='radio-group-custom'
                value={value}
                onChange={(e) => onChange(e.target.value)} />
        )}/>
    );
};

export default RadioButton;
