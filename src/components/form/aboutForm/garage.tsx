import React from 'react';
import Heading from "../../heading/heading";
import InputLabel from "../../inputLabel/inputLabel";
import Select from "../../controllers/select/select";
import {ControlType, IFormProps} from "../../types/types";
import formData from "../../formData/formData";
import RadioButton from "../../controllers/radioButton/radioButton";
import InputNumber from "../../controllers/inputNumber/inputNumber";

const Garage = ({control}: IFormProps) => {
    return (
        <>
            <Heading text={'Об объекте'}/>
            <div className="d-flex">
                <InputLabel text={'Тип строения'}/>
                <RadioButton name={'BuildingType'} control={control as ControlType} formData={formData.buildingType} btn/>
                <InputLabel text={'Площадь'}/>
                <div style={{display: 'flex'}}>
                    <InputNumber name={'Area_all'} control={control as ControlType} min={-4} max={10} label={''} m2/>
                </div>

            </div>
        </>
    );
};

export default Garage;