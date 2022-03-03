import {Control} from "react-hook-form";
import {CheckboxOptionType} from "antd";

export type ControlType = Control<Partial<TFormValues>>;
export type TOptionType = 'default' | 'button'

type NameType = {
  name: keyof TFormValues;
}
type LabelJSXType = {
  label?: JSX.Element;
}
type FormDataType = {
  formData: CheckboxOptionType[],
  optionType?: TOptionType,
}
type TControl = {
  control: ControlType,
}
type TFieldItem = {
} & NameType & FormDataType & LabelJSXType;

type TFieldWithRadio = {
} & TControl & NameType & FormDataType & LabelJSXType;

type TRadioBtnsProps = {
} & TControl & NameType & FormDataType;

type TSelectProps = {
} & TControl & NameType & Omit<FormDataType, 'optionType'>;

type TInputNumberProps = {
  label: string,
  square: boolean
}  & TControl & NameType;

type TFormProps = {
  control: Control<TFormValues>
}
type TDynamicForm = {
  watchBuilding: string,
} & TFormProps

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
  TRadioBtnsProps,
  TSelectProps,
  TInputNumberProps,
  TFormProps,
  TDynamicForm
}