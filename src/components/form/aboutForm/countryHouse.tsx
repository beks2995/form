import React, { FC } from 'react'
import Heading from 'components/heading/heading'
import RadioButton from 'components/radioButton/radioButton'
import { ControlType, TFormProps } from 'common/types/types'
import formData from 'common/dummy/formData'
import InputLabel from 'components/inputLabel/inputLabel'
import Select from 'components/select/select'
import InputNumber from 'components/inputNumber/inputNumber'
import { Wrapper } from 'common/styles/components/Wrapper'

const CountryHouse: FC<TFormProps> = ({ control }) => {
  const controls = control as ControlType
  return (
    <>
      <Heading>Об объекте</Heading>
      <Wrapper>
        <InputLabel>Количество комнат</InputLabel>
        <Select name={'Rooms'} control={controls} formData={formData.rooms} />
        <InputLabel>Отопление</InputLabel>
        <Select name={'Heating'} control={controls} formData={formData.heating} />
        <InputLabel>Тип строения</InputLabel>
        <RadioButton name={'BuildingType'} control={controls} formData={formData.buildingType} />
        <InputLabel>Площадь</InputLabel>
        <div className="d-flex">
          <InputNumber name={'AreaAll'} control={controls} label={'Общая'} square />
          <InputNumber name={'AreaLive'} control={controls} label={'Жилая'} square />
          <InputNumber name={'AreaKitchen'} control={controls} label={'Кухня'} square />
        </div>
        <InputLabel>Площадь участка (в сотках)</InputLabel>
        <InputNumber name={'AreaHouse'} control={controls} label={''} square={false} />
        <InputLabel>Этаж</InputLabel>
        <InputNumber name={'Floor'} control={controls} label={''} square={false} />
      </Wrapper>
    </>
  )
}

export default CountryHouse
