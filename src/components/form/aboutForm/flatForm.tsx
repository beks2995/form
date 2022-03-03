import React, {VFC} from 'react';
import Heading from "@Components/heading/heading";
import RadioButton from "@Components/radioButton/radioButton";
import {ControlType, TFormProps} from "@Common/types/types";
import formData from "@Common/dummy/formData";
import InputLabel from "@Components/inputLabel/inputLabel";
import Select from "@Components/select/select";
import InputNumber from "@Components/inputNumber/inputNumber";

const FlatForm: VFC<TFormProps> = ({control}) => {
  const controls = control as ControlType;
  return (
    <>
      <Heading>Об объекте</Heading>
      <div className="wrapper">
        <InputLabel>Количество комнат</InputLabel>
        <Select name={'Rooms'} control={controls} formData={formData.rooms}/>
        <InputLabel>Серия</InputLabel>
        <Select name={'Series'} control={controls} formData={formData.series}/>
        <InputLabel>Отопление</InputLabel>
        <Select name={'Heating'} control={controls} formData={formData.heating}/>
        <InputLabel>Тип строения</InputLabel>
        <RadioButton name={'BuildingType'} control={controls} formData={formData.buildingType}
                     optionType={'button'}/>
        <InputLabel>Площадь</InputLabel>
        <div className='d-flex'>
          <InputNumber name={'Area_all'} control={controls} label={'Общая'} square/>
          <InputNumber name={'Area_live'} control={controls} label={'Жилая'} square/>
          <InputNumber name={'Area_kitchen'} control={controls} label={'Кухня'} square/>
        </div>
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

export default FlatForm;
