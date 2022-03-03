import React, {VFC} from 'react';
import Heading from "@Components/heading/heading";
import RadioButton from "@Components/radioButton/radioButton";
import {ControlType, TFormProps} from "@Common/types/types";
import formData from "@Common/dummy/formData";
import InputLabel from "@Components/inputLabel/inputLabel";
import Select from "@Components/select/select";
import InputNumber from "@Components/inputNumber/inputNumber";

const Room: VFC<TFormProps> = ({control}) => {
  const controls = control as ControlType;
  return (
    <>
      <Heading>Об объекте</Heading>
      <div className="wrapper">
        <InputLabel>Серия</InputLabel>
        <Select name={'Series'} control={controls} formData={formData.series}/>
        <InputLabel>Отопление</InputLabel>
        <Select name={'Heating'} control={controls} formData={formData.heating}/>
        <InputLabel>Тип строения</InputLabel>
        <RadioButton name={'BuildingType'} control={controls} formData={formData.buildingType}/>
        <InputLabel>Этаж</InputLabel>
        <div className='d-flex align-items-center'>
          <InputNumber name={'Floor'} control={controls} label={''} square={false}/>
          <span>из</span>
          <InputNumber name={'FloorOf'} control={controls} label={''} square={false}/>
        </div>
        <InputLabel>Высота потолков</InputLabel>
        <InputNumber name={'Ceil'} control={controls} label={''} square={false}/>
      </div>
    </>
  );
};

export default Room;