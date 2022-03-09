import React, { FC } from 'react'
import Heading from 'components/heading/heading'
import RadioButton from 'components/radioButton/radioButton'
import { ControlType, TFormProps } from 'common/types/types'
import formData from 'common/dummy/formData'
import InputLabel from 'components/inputLabel/inputLabel'
import InputNumber from 'components/inputNumber/inputNumber'
import { Wrapper } from 'common/styles/components/Wrapper'

const Garage: FC<TFormProps> = ({ control }) => {
  const controls = control as ControlType
  return (
    <>
      <Heading>Об объекте</Heading>
      <Wrapper>
        <InputLabel>Тип строения</InputLabel>
        <RadioButton name={'BuildingType'} control={controls} formData={formData.buildingType} />
        <InputLabel>Площадь</InputLabel>
        <div className="d-flex">
          <InputNumber name={'AreaAll'} control={controls} label={''} square />
        </div>
      </Wrapper>
    </>
  )
}

export default Garage
