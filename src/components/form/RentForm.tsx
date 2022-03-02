import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ControlType, TFormValues} from "../types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import {schema} from '../utils/validation/shema'
import FlatForm from "./aboutForm/flatForm";
import HouseForm from "./aboutForm/houseForm";
import RadioButton from "../controllers/radioButton/radioButton";
import formData from "../formData/formData";
import Heading from "../heading/heading";
import InputLabel from "../inputLabel/inputLabel";
import Comercial from "./aboutForm/comercial";
import CountryHouse from "./aboutForm/countryHouse";
import Plot from "./aboutForm/plot";
import Room from "./aboutForm/room";
import Garage from "./aboutForm/garage";

// TODO any type // TODO return type
// const DynamicForm = (watchBuilding: string, control: any) => {

//     switch (watchBuilding) {
//         case 'flat':
//             return <FlatForm control={control}/>

//         default:
//             return;
//     }

//     return {watchBuilding[0] === 'flat'
//     ? <FlatForm control={control}/>
//     : watchBuilding[0] === 'house'
//         ? <HouseForm control={control}/>
//         : watchBuilding[0] === 'commercial'
//             ? <Comercial control={control}/>
//             : watchBuilding[0] === 'plot'
//                 ? <Plot control={control}/>
//                 : watchBuilding[0] === 'room'
//                     ? <Room control={control}/>
//                     : watchBuilding[0] === 'countryHouse'
//                         ? <CountryHouse control={control}/>
//                         : watchBuilding[0] === 'garage'
//                             ? <Garage control={control}/>
//                             : <> </>}
// }



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
        control,
        // todo remove unuse variable
        formState: {errors}
    }
        = useForm<TFormValues>({
        defaultValues,
        resolver: yupResolver(schema)
    });

    const watchBuilding = watch(['Building']);

    const onSubmit: SubmitHandler<TFormValues> = data => {
        alert(JSON.stringify(data))
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading text={'Тип объявления'}/>
                <div className='d-flex'>
                    <InputLabel text='Тип аккаунта' />
                    {
                        [
                            {
                                name: 'AccType',
                                formData: formData.accType,
                                btn: true
                            },
                            {
                                name: 'AdType',
                                formData: formData.accType,
                                btn: true
                            },
                            {
                                name: 'Building',
                                formData: formData.accType,
                                btn: false
                            },
                        ].map(({name, formData, btn}) => <RadioButton name={name as any} control={control as ControlType} formData={formData} btn={btn}/>)
                    }
                    
                </div>
                {/* TODO refactor */}
                {watchBuilding[0] === 'flat'
                    ? <FlatForm control={control}/>
                    : watchBuilding[0] === 'house'
                        ? <HouseForm control={control}/>
                        : watchBuilding[0] === 'commercial'
                            ? <Comercial control={control}/>
                            : watchBuilding[0] === 'plot'
                                ? <Plot control={control}/>
                                : watchBuilding[0] === 'room'
                                    ? <Room control={control}/>
                                    : watchBuilding[0] === 'countryHouse'
                                        ? <CountryHouse control={control}/>
                                        : watchBuilding[0] === 'garage'
                                            ? <Garage control={control}/>
                                            : <> </>}

                <button type="button" onClick={() => reset()}>Сбросить</button>
                <button type="submit">Отправить</button>
            </form>
        </>
    );
};

export default RentForm;