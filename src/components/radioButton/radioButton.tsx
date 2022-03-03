import React, {VFC} from 'react';
import {Radio} from "antd";
import {Controller} from "react-hook-form";
import {TRadioBtnsProps} from "@Common/types/types";

const RadioButton: VFC<TRadioBtnsProps> = ({name, control, formData, optionType = 'default'}) => {
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
          onChange={onChange}/>
      )}/>
  );
};

export default RadioButton;
