import React, { VFC } from 'react';
import {Radio} from "antd";
import {Controller} from "react-hook-form";
import {IRadioBtnsProps} from "../../types/types";

const RadioButton: VFC<IRadioBtnsProps> = ({name, control, formData, optionType = 'default'}) => {
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
          // TODO pls check it is it working
          onChange={onChange}/>
      )}/>
  );
};

export default RadioButton;
