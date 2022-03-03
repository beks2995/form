import React, {VFC} from 'react';
import Heading from "@Components/heading/heading";
import RadioButton from "@Components/radioButton/radioButton";
import {ControlType, TFormProps} from "@Common/types/types";
import formData from "@Common/dummy/formData";
import InputLabel from "@Components/inputLabel/inputLabel";
import Select from "@Components/select/select";
import InputNumber from "@Components/inputNumber/inputNumber";

const HouseForm: VFC<TFormProps> = ({control}) => {
  const controls = control as ControlType;
  return (
    <>
      <Heading>Об объекте</Heading>
      <div className="wrapper">
        <InputLabel>Количество комнат</InputLabel>
        <Select name={'Rooms'} control={controls} formData={formData.rooms}/>
        <InputLabel>Отопление</InputLabel>
        <Select name={'Heating'} control={controls} formData={formData.heating}/>
        <InputLabel>Тип строения</InputLabel>
        <RadioButton name={'BuildingType'} control={controls} formData={formData.buildingType}/>
        <InputLabel>Площадь</InputLabel>
        <div className='d-flex'>
          <InputNumber name={'Area_all'} control={controls} label={'Общая'} square/>
          <InputNumber name={'Area_live'} control={controls} label={'Жилая'} square/>
          <InputNumber name={'Area_kitchen'} control={controls} label={'Кухня'} square/>
        </div>
        <InputLabel>Площадь участка (в сотках)</InputLabel>
        <InputNumber name={'Area_house'} control={controls} label={''} square={false}/>
        <InputLabel>Этаж</InputLabel>
        <InputNumber name={'Floor'} control={controls} label={''} square={false}/>
      </div>
    </>
  );
};

export default HouseForm;