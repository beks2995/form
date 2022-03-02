import {Control} from "react-hook-form";
import {CheckboxOptionType} from "antd";

export type ControlType = Control<Partial<TFormValues>>;

export type TOptionType = 'default' | 'button'

type TFieldItem = {
  name: keyof TFormValues,
  formData: CheckboxOptionType[],
  optionType?: TOptionType,
  label?: JSX.Element
}
type TFieldWithRadio = {
  name: keyof TFormValues,
  control: ControlType,
  formData: CheckboxOptionType[],
  optionType?: TOptionType,
  label?: JSX.Element
}
interface IRadioBtnsProps {
  name: keyof TFormValues,
  control: ControlType,
  formData: CheckboxOptionType[],
  optionType?: TOptionType,
}

interface ISelectProps {
  name: keyof TFormValues,
  control: ControlType,
  formData: CheckboxOptionType[],
}

interface IInputNumberProps {
  name: keyof TFormValues,
  control: ControlType,
  label: string,
  square: boolean
}

interface IDynamicForm {
  watchBuilding: string,
  control: Control<TFormValues>
}

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
  TFieldItem,
  TFieldWithRadio,
  IRadioBtnsProps,
  ISelectProps,
  IInputNumberProps,
  IFormProps,
  IDynamicForm
}