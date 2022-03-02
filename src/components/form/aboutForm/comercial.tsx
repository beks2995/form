import React from 'react';
import Heading from "../../heading/heading";
import InputLabel from "../../inputLabel/inputLabel";
import Select from "../../controllers/select/select";
import {ControlType, IFormProps} from "../../types/types";
import formData from "../../formData/formData";
import RadioButton from "../../controllers/radioButton/radioButton";
import InputNumber from "../../controllers/inputNumber/inputNumber";

// todo return type
const Comercial = ({control}:IFormProps) => {
    return (
        <>
            <Heading text={'Об объекте'}/>
            <div className="d-flex">
                <InputLabel text={'Отопление'}/>
                <Select name={'Heating'} control={control as ControlType} formData={formData.heating}/>
                <InputLabel text={'Тип строения'}/>
                {/* <RadioButton name={'BuildingType'} control={control as ControlType} formData={formData.buildingType} btn/> */}
                <InputLabel text={'Площадь'}/>
                <div style={{display: 'flex'}}>
                    <InputNumber name={'Area_all'} control={control as ControlType} min={-4} max={10} label={'Общая'} m2/>
                    <InputNumber name={'Area_live'} control={control as ControlType} min={-4} max={10} label={'Жилая'} m2/>
                    <InputNumber name={'Area_kitchen'} control={control as ControlType} min={-4} max={10} label={'Кухня'} m2/>
                </div>
                <InputLabel text={'Площадь участка (в сотках)'}/>
                <InputNumber name={'Area_house'} control={control as ControlType} min={-4} max={10} label={''} m2={false}/>
               </div>
        </>
    );
};

export default Comercial;