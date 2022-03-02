import React, {VFC} from 'react';
import Heading from "../../heading/heading";
import RadioButton from "../../controllers/radioButton/radioButton";
import {ControlType, IFormProps} from "../../types/types";
import formData from "../../formData/formData";
import InputLabel from "../../inputLabel/inputLabel";
import Select from "../../controllers/select/select";
import InputNumber from "../../controllers/inputNumber/inputNumber";

const FlatForm: VFC<IFormProps> = ({  control}) => {
    return (
        <>
            <Heading text={'Об объекте'}/>
            <div className="wrapper">
                <InputLabel text={'Количество комнат'}/>
                <Select name={'Rooms'} control={control as ControlType} formData={formData.rooms}/>
                <InputLabel text={'Серия'}/>
                <Select name={'Series'} control={control as ControlType} formData={formData.series}/>
                <InputLabel text={'Отопление'}/>
                <Select name={'Heating'} control={control as ControlType} formData={formData.heating}/>
                <InputLabel text={'Тип строения'}/>
                <RadioButton name={'BuildingType'} control={control as ControlType} formData={formData.buildingType} optionType={'button'}/>
                <InputLabel text={'Площадь'}/>
                <div style={{display: 'flex'}}>
                    <InputNumber name={'Area_all'} control={control as ControlType} label={'Общая'} square/>
                    <InputNumber name={'Area_live'} control={control as ControlType} label={'Жилая'} square/>
                    <InputNumber name={'Area_kitchen'} control={control as ControlType} label={'Кухня'} square/>
                </div>
                <InputLabel text={'Этаж'}/>
                <div style={{display: 'flex', alignItems: "center"}}>
                    <InputNumber name={'Floor'} control={control as ControlType} label={''} square={false}/>
                    <span>из</span>
                    <InputNumber name={'FloorOf'} control={control as ControlType} label={''} square={false}/>
                </div>
                <InputLabel text={'Высота потолков'}/>
                <InputNumber name={'Ceil'} control={control as ControlType} label={''} square={false}/>

            </div>
        </>
    );
};

export default FlatForm;
