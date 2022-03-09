import React, { FC } from 'react'
import Heading from 'components/heading/heading'
import RadioButton from 'components/radioButton/radioButton'
import { ControlType, TFormProps } from 'common/types/types'
import formData from 'common/dummy/formData'
import InputLabel from 'components/inputLabel/inputLabel'
import Select from 'components/select/select'
import InputNumber from 'components/inputNumber/inputNumber'
import { Wrapper } from 'common/styles/components/Wrapper'

const FlatForm: FC<TFormProps> = ({ control }) => {
  const controls = control as ControlType
  return (
    <>
      <Heading>Об объекте</Heading>
      <Wrapper>
        <InputLabel>Количество комнат</InputLabel>
        <Select name={'Rooms'} control={controls} formData={formData.rooms} />
        <InputLabel>Серия</InputLabel>
        <Select name={'Series'} control={controls} formData={formData.series} />
        <InputLabel>Отопление</InputLabel>
        <Select name={'Heating'} control={controls} formData={formData.heating} />
        <InputLabel>Тип строения</InputLabel>
        <RadioButton
          name={'BuildingType'}
          control={controls}
          formData={formData.buildingType}
          optionType={'button'}
        />
        <InputLabel>Площадь</InputLabel>
        <div className="d-flex">
          <InputNumber name={'AreaAll'} control={controls} label={'Общая'} square />
          <InputNumber name={'AreaLive'} control={controls} label={'Жилая'} square />
          <InputNumber name={'AreaKitchen'} control={controls} label={'Кухня'} square />
        </div>
        <InputLabel>Этаж</InputLabel>
        <div className="d-flex align-items-center">
          <InputNumber name={'Floor'} control={controls} label={''} square={false} />
          <span>из</span>
          <InputNumber name={'FloorOf'} control={controls} label={''} square={false} />
        </div>
        <InputLabel>Высота потолков</InputLabel>
        <InputNumber name={'Ceil'} control={controls} label={''} square={false} />
      </Wrapper>
    </>
  )
}

export default FlatForm
