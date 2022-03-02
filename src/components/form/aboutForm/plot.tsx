import React, {VFC} from 'react';
import Heading from "../../heading/heading";
import InputLabel from "../../inputLabel/inputLabel";
import {ControlType, IFormProps} from "../../types/types";
import InputNumber from "../../controllers/inputNumber/inputNumber";

const Plot: VFC<IFormProps> = ({control}) => {
    return (
        <>
            <Heading text={'Об объекте'}/>
            <div className="wrapper">
                <InputLabel text={'Площадь участка (в сотках)'}/>
                <InputNumber name={'Area_house'} control={control as ControlType} label={''} square={false}/>
                 </div>
        </>
    );
};

export default Plot;