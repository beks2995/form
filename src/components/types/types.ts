import {Control} from "react-hook-form";
import {CheckboxOptionType} from "antd";

export type ControlType = Control<Partial<TFormValues>>;

interface IRadioBtnsProps {
    name: keyof TFormValues,
    control: ControlType,
    formData: CheckboxOptionType[],
    btn: boolean,
}
interface ISelectProps {
    name: keyof TFormValues,
    control: ControlType,
    formData: CheckboxOptionType[],
}
interface IInputNumberProps {
    name: keyof TFormValues,
    control: ControlType,
    min: number,
    max: number,
    label: string,
    m2: boolean
}
// TODO
// interface IFormDataProps {
//     name: FormNames,
//     control: Control<TFormValues>,
//     formData: CheckboxOptionType[],
//     btn: boolean,
//     data: any,
//     setData: Dispatch<SetStateAction<any>>
// }

interface IFormProps {
    control: Control<TFormValues>
}

type TFormValues = {
    AccType: string,
    AdType: string,
    Building: string,
    BuildingType: string,
    Rooms: string,
    Series: string,
    Heating: string,
    Area_all: number,
    Area_live: number,
    Area_kitchen: number,
    Floor: number,
    FloorOf: number,
    Ceil: number,
    Area_house: number,
};

export type {
    TFormValues,
    IRadioBtnsProps,
    ISelectProps,
    IInputNumberProps,
    IFormProps
}