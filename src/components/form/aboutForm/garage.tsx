import React, {VFC} from 'react';
import Heading from "../../heading/heading";
import InputLabel from "../../inputLabel/inputLabel";
import {ControlType, IFormProps} from "../../types/types";
import formData from "../../formData/formData";
import RadioButton from "../../controllers/radioButton/radioButton";
import InputNumber from "../../controllers/inputNumber/inputNumber";
// TODO flow
const Garage: VFC<IFormProps> = ({control}) => {
    return (
        <>
            <Heading text={'Об объекте'}/>
            <div className="wrapper">
                <InputLabel text={'Тип строения'}/>
                <RadioButton name={'BuildingType'} control={control as ControlType} formData={formData.buildingType}/>
                <InputLabel text={'Площадь'}/>
                <div style={{display: 'flex'}}>
                    <InputNumber name={'Area_all'} control={control as ControlType} label={''} square/>
                </div>

            </div>
        </>
    );
};

export default Garage;