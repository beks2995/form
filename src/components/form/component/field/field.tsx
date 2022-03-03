import React from 'react';

import RadioButton from "@Components/radioButton/radioButton";
import {ControlType, TFieldWithRadio} from "@Common/types/types";

const Field = ({name, formData,control, label, optionType}: TFieldWithRadio) => {
  return (
    // <>
    //   {label}
    //   {optionType === 'button' ? <RadioButton name={name} control={control as ControlType} dummy={dummy} optionType={'button'}/> :
    //     <RadioButton name={name} control={control as ControlType} dummy={dummy}/>}
    // </>
    // pls CHECK it
    <>
      {label}
      <RadioButton name={name} control={control as ControlType} formData={formData} optionType={optionType}/>
    </>
  );
};

export default Field;