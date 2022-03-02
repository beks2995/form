import React from 'react';
import Heading from "../../heading/heading";
import InputLabel from "../../inputLabel/inputLabel";
import Select from "../../controllers/select/select";
import {ControlType, IFormProps} from "../../types/types";
import formData from "../../formData/formData";
import RadioButton from "../../controllers/radioButton/radioButton";
import InputNumber from "../../controllers/inputNumber/inputNumber";

const Room = ({control}: IFormProps) => {
    return (
        <>
            <Heading text={'Об объекте'}/>
            <div className="d-flex">
                <InputLabel text={'Серия'}/>
                <Select name={'Series'} control={control as ControlType} formData={formData.series}/>
                <InputLabel text={'Отопление'}/>
                <Select name={'Heating'} control={control as ControlType} formData={formData.heating}/>
                <InputLabel text={'Тип строения'}/>
                <RadioButton name={'BuildingType'} control={control as ControlType} formData={formData.buildingType} btn/>
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

export default Room;