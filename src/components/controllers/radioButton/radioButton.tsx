import React, {VFC} from 'react';
import {Radio} from "antd";
import {Controller} from "react-hook-form";
import {IRadioBtnsProps} from "../../types/types";

const RadioButton = ({name, control, formData, btn}: IRadioBtnsProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({field: {onChange, value}}) => {
                return (
                    <Radio.Group
                        options={formData}
                        optionType={btn ? "button" : "default"}
                        className='radio-group-custom'
                        value={value}
                        onChange={(e) => onChange(e.target.value)} />
                )
            }}/>
    );
};

export default RadioButton;
