import React from 'react';
import Heading from "../../heading/heading";
import InputLabel from "../../inputLabel/inputLabel";
// todo FLOW
import Select from "../../controllers/select/select";
import {ControlType, IFormProps} from "../../types/types";
import formData from "../../formData/formData";
import RadioButton from "../../controllers/radioButton/radioButton";
import InputNumber from "../../controllers/inputNumber/inputNumber";

const Plot = ({control}: IFormProps) => {
    return (
        <>
            <Heading text={'Об объекте'}/>
            <div className="d-flex">
                <InputLabel text={'Площадь участка (в сотках)'}/>
                <InputNumber name={'Area_house'} control={control as ControlType} min={-4} max={10} label={''} m2={false}/>
                 </div>
        </>
    );
};

export default Plot;