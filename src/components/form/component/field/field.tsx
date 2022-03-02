import React from 'react';

import RadioButton from "../../../controllers/radioButton/radioButton";
// todo pls configure paths in the tsconfig.json https://stackoverflow.com/questions/38601592/typescript-import-path-alias
// import RadioButton from "@controllers/radioButton/radioButton";
import {ControlType, TFieldWithRadio} from "../../../types/types";

const Field = ({name, formData,control, label, optionType}: TFieldWithRadio) => {
  return (
    // <>
    //   {label}
    //   {optionType === 'button' ? <RadioButton name={name} control={control as ControlType} formData={formData} optionType={'button'}/> :
    //     <RadioButton name={name} control={control as ControlType} formData={formData}/>}
    // </>
    // pls CHECK it
    <>
      {label}
      <RadioButton name={name} control={control as ControlType} formData={formData} optionType={optionType}/>
    </>
  );
};

export default Field;