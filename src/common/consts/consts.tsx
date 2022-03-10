import React from 'react'
import { TFieldItem } from '../types/types'
import formData from '../dummy/formData'
import InputLabel from 'components/inputLabel/inputLabel'

export const radioButtonsList: TFieldItem[] = [
  {
    name: 'AccType',
    formData: formData.accType,
    optionType: 'button',
    label: <InputLabel>Тип аккаунта</InputLabel>,
  },
  {
    name: 'AdType',
    formData: formData.adType,
    optionType: 'button',
    label: <InputLabel>Тип рекламы</InputLabel>,
  },
  {
    name: 'Building',
    formData: formData.building,
    optionType: 'default',
    label: <InputLabel>Объект</InputLabel>,
  },
]

export const defaultValues = {
  AccType: 'owner',
  AdType: 'sell',
  BuildingType: 'brick',
  Rooms: '1',
  Series: 'elit',
  Heating: 'central',
}

// todo return type && move to utils|hooks, hooks with lowercase
