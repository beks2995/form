import React, {VFC} from 'react';
import Heading from "@Components/heading/heading";
import {ControlType, TFormProps} from "@Common/types/types";
import InputLabel from "@Components/inputLabel/inputLabel";
import InputNumber from "@Components/inputNumber/inputNumber";

const Plot: VFC<TFormProps> = ({control}) => {
  const controls = control as ControlType;
  return (
    <>
      <Heading>Об объекте</Heading>
      <div className="wrapper">
        <InputLabel>Площадь участка (в сотках)</InputLabel>
        <InputNumber name={'Area_house'} control={controls} label={''} square={false}/>
      </div>
    </>
  );
};

export default Plot;