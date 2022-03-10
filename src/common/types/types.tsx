import React from 'react'
import { Control } from 'react-hook-form'
import { CheckboxOptionType } from 'antd'
import StringSchema from 'yup/lib/string'
import NumberSchema from 'yup/lib/number'

export type ControlType = Control<Partial<TFormValues>>
export type TOptionType = 'default' | 'button'
type TYupObj = StringSchema | NumberSchema
type LabelJSXType = {
  label?: React.ReactNode
}
type FormDataType = {
  name: keyof TFormValues
  formData: CheckboxOptionType[]
  optionType?: TOptionType
  control: ControlType
}
type TFieldItem = {} & Pick<FormDataType, 'formData' | 'optionType' | 'name'> & LabelJSXType

type TFieldWithRadio = {} & Pick<FormDataType, 'formData' | 'optionType' | 'name' | 'control'> &
  LabelJSXType

type TRadioBtnsProps = {} & Pick<FormDataType, 'formData' | 'optionType' | 'name' | 'control'>

type TSelectProps = {} & Pick<FormDataType, 'control' | 'name'> & Omit<FormDataType, 'optionType'>

type TInputNumberProps = {
  label: string
  square: boolean
} & Pick<FormDataType, 'control' | 'name'>

type TFormProps = {
  control: Control<TFormValues>
}
type TDynamicForm = {
  watchBuilding: string
} & TFormProps

type TFormValues = {
  AccType: string
  AdType: string
  Building: string
  BuildingType: string
  Rooms: string
  Series: string
  Heating: string
  AreaAll: number
  AreaLive: number
  AreaKitchen: number
  Floor: number
  FloorOf: number
  Ceil: number
  AreaHouse: number
}

export type {
  TFormValues,
  TFieldItem,
  TFieldWithRadio,
  TRadioBtnsProps,
  TSelectProps,
  TInputNumberProps,
  TFormProps,
  TDynamicForm,
  TYupObj,
}
