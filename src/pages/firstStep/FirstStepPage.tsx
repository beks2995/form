import React from 'react';
import { ControlType} from "@Common/types/types";
import {radioButtonsList, UseFormAddAd} from '@Common/consts/consts'
import Heading from "@Components/heading/heading";
import DynamicForm from "@Components/form/dynamicForm";
import Field from "@Components/form/component/field/field";

const FirstStepPage = (): JSX.Element => {
  const {handleSubmit,
    reset,
    control,
    watchBuilding,
    onSubmit} = UseFormAddAd();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading>Тип объявления</Heading>
      <div className='wrapper'>
        {
          // return type
          radioButtonsList.map(({name, formData, optionType, label}) => (
            <Field key={name} name={name} formData={formData} label={label} optionType={optionType}
                   control={control as ControlType}/>
          ))
        }
      </div>
      <DynamicForm watchBuilding={watchBuilding[0]} control={control}/>

      <button type="button" onClick={() => reset()}>Сбросить</button>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FirstStepPage;