import {Control} from "react-hook-form";
import {CheckboxOptionType} from "antd";

export type ControlType = Control<Partial<TFormValues>>;

export type TOptionType = 'default' | 'button'

type NameType = {
  name: keyof TFormValues;
  formData: CheckboxOptionType[];
  label?: JSX.Element;
}

type TFieldItem = {
  optionType?: TOptionType, // TODO duplication
} & NameType;

// TODO examples
// type TFieldItemRequired = Required<TFieldItem>;

type TFieldItem2 = {
  optionType?: TOptionType, // TODO duplication
} & Omit<NameType, 'label'>;

// type TFieldItem = {
//   name: keyof TFormValues, // TODO duplication
//   formData: CheckboxOptionType[], // TODO duplication
//   optionType?: TOptionType, // TODO duplication
//   label?: JSX.Element
// }
type TFieldWithRadio = {
  name: keyof TFormValues,  // TODO duplication
  control: ControlType,
  formData: CheckboxOptionType[], // TODO duplication
  optionType?: TOptionType,
  label?: JSX.Element
}
interface IRadioBtnsProps {
  name: keyof TFormValues,  // TODO duplication
  control: ControlType,
  formData: CheckboxOptionType[], // TODO duplication
  optionType?: TOptionType, // TODO duplication
}

interface ISelectProps {
  name: keyof TFormValues,  // TODO duplication
  control: ControlType, // TODO duplication
  formData: CheckboxOptionType[], // TODO duplication
}

interface IInputNumberProps {
  name: keyof TFormValues,  // TODO duplication
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
// example
// type TFormValues2 = Record<string, string | number>;

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