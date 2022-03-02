import React from 'react';
import RadioButton from "../../../controllers/radioButton/radioButton";
import {ControlType, TFieldWithRadio} from "../../../types/types";

const Field = ({name, formData,control, label, optionType}: TFieldWithRadio) => {
  return (
    <>
      {label}
      {optionType === 'button' ? <RadioButton name={name} control={control as ControlType} formData={formData} optionType={'button'}/> :
        <RadioButton name={name} control={control as ControlType} formData={formData}/>}
    </>
  );
};

export default Field;