import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {TFormValues, TFieldItem, ControlType} from "../types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import {schema} from '../utils/validation/shema'
import formData from "../formData/formData";
import Heading from "../heading/heading";
import InputLabel from "../inputLabel/inputLabel";
import DynamicForm from "./dynamicForm";
import Field from "./component/field/field";

const defaultValues = {
    AccType: 'owner',
    AdType: 'sell',
    BuildingType: 'brick',
    Rooms: '1',
    Series: 'elit',
    Heating: 'central'
};

const RentForm = () => {
    const {
        handleSubmit,
        reset,
        watch,
        control
    }
        = useForm<TFormValues>({
        defaultValues,
        resolver: yupResolver(schema)
    });

    const watchBuilding = watch(['Building']);
    const onSubmit: SubmitHandler<TFormValues> = data => {
        alert(JSON.stringify(data))
    };

    const radioButtonsList: TFieldItem[] = [
        {
            name: 'AccType',
            formData: formData.accType,
            optionType: 'button',
            label: <InputLabel text='Тип аккаунта' />
        },
        {
            name: 'AdType',
            formData: formData.adType,
            optionType: 'button',
            label: <InputLabel text='Тип рекламы' />
        },
        {
            name: 'Building',
            formData: formData.building,
            optionType: 'default',
            label: <InputLabel text='Объект' />
        },
    ];

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading text={'Тип объявления'}/>
                <div className='wrapper'>

                    {
                        radioButtonsList.map(({name, formData, optionType, label}) => (
                            <Field key={name} name={name} formData={formData} label={label} optionType={optionType} control={control as ControlType}/>
                            ))
                    }
                    
                </div>
                <DynamicForm watchBuilding={watchBuilding[0]} control={control}/>

                <button type="button" onClick={() => reset()}>Сбросить</button>
                <button type="submit">Отправить</button>
            </form>
        </>
    );
};

export default RentForm;