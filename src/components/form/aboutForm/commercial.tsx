import React, {VFC} from 'react';
import Heading from "../../heading/heading";
import InputLabel from "../../inputLabel/inputLabel";
import Select from "../../controllers/select/select";
import {ControlType, IFormProps} from "../../types/types";
import formData from "../../formData/formData";
import RadioButton from "../../controllers/radioButton/radioButton";
import InputNumber from "../../controllers/inputNumber/inputNumber";

// todo return type
const Commercial:VFC<IFormProps> = ({control}) => {
    return (
        <>
            <Heading text={'Об объекте'}/>
            <div className="wrapper">
                <InputLabel text={'Отопление'}/>
                <Select name={'Heating'} control={control as ControlType} formData={formData.heating}/>
                <InputLabel text={'Тип строения'}/>
                 <RadioButton name={'BuildingType'} control={control as ControlType} formData={formData.buildingType}/>
                <InputLabel text={'Площадь'}/>
                <div style={{display: 'flex'}}>
                    <InputNumber name={'Area_all'} control={control as ControlType} label={'Общая'} square/>
                    <InputNumber name={'Area_live'} control={control as ControlType} label={'Жилая'} square/>
                    <InputNumber name={'Area_kitchen'} control={control as ControlType} label={'Кухня'} square/>
                </div>
                <InputLabel text={'Площадь участка (в сотках)'}/>
                <InputNumber name={'Area_house'} control={control as ControlType} label={''} square={false}/>
               </div>
        </>
    );
};

export default Commercial;