import React, {VFC} from 'react';
import Heading from "@Components/heading/heading";
import RadioButton from "@Components/radioButton/radioButton";
import {ControlType, TFormProps} from "@Common/types/types";
import formData from "@Common/dummy/formData";
import InputLabel from "@Components/inputLabel/inputLabel";
import InputNumber from "@Components/inputNumber/inputNumber";

const Garage: VFC<TFormProps> = ({control}) => {
  const controls = control as ControlType;
  return (
    <>
      <Heading>Об объекте</Heading>
      <div className="wrapper">
        <InputLabel>Тип строения</InputLabel>
        <RadioButton name={'BuildingType'} control={controls} formData={formData.buildingType}/>
        <InputLabel>Площадь</InputLabel>
        <div className='d-flex'>
          <InputNumber name={'Area_all'} control={controls} label={''} square/>
        </div>
      </div>
    </>
  );
};

export default Garage;