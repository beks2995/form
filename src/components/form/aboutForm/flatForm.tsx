import React from 'react';
import Heading from "../../heading/heading";
import RadioButton from "../../controllers/radioButton/radioButton";
import {ControlType, IFormProps} from "../../types/types";
import formData from "../../formData/formData";
import InputLabel from "../../inputLabel/inputLabel";
import Select from "../../controllers/select/select";
import InputNumber from "../../controllers/inputNumber/inputNumber";

// TODO flow 
const FlatForm = ({  control}: IFormProps) => {
    return (
        <>
            <Heading text={'Об объекте'}/>
            <div className="d-flex">
                <InputLabel text={'Количество комнат'}/>
                <Select name={'Rooms'} control={control as ControlType} formData={formData.rooms}/>
                <InputLabel text={'Серия'}/>
                <Select name={'Series'} control={control as ControlType} formData={formData.series}/>
                <InputLabel text={'Отопление'}/>
                <Select name={'Heating'} control={control as ControlType} formData={formData.heating}/>
                <InputLabel text={'Тип строения'}/>
                <RadioButton name={'BuildingType'} control={control as ControlType} formData={formData.buildingType} btn/>
                <InputLabel text={'Площадь'}/>
                <div style={{display: 'flex'}}>
                    <InputNumber name={'Area_all'} control={control as ControlType} min={-4} max={10} label={'Общая'} m2/>
                    <InputNumber name={'Area_live'} control={control as ControlType} min={-4} max={10} label={'Жилая'} m2/>
                    <InputNumber name={'Area_kitchen'} control={control as ControlType} min={-4} max={10} label={'Кухня'} m2/>
                </div>
                <InputLabel text={'Этаж'}/>
                <div style={{display: 'flex', alignItems: "center"}}>
                    <InputNumber name={'Floor'} control={control as ControlType} min={-4} max={10} label={''} m2={false}/>
                    <span>из</span>
                    <InputNumber name={'FloorOf'} control={control as ControlType} min={-4} max={10} label={''} m2={false}/>
                </div>
                <InputLabel text={'Высота потолков'}/>
                <InputNumber name={'Ceil'} control={control as ControlType} min={-4} max={10} label={''} m2={false}/>

            </div>
        </>
    );
};

export default FlatForm;
