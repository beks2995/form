import React, { FC } from 'react'
import RadioButton from 'components/radioButton/radioButton'
import { TFieldWithRadio } from 'common/types/types'

const Field: FC<TFieldWithRadio> = ({ name, formData, control, label, optionType }) => {
  return (
    <>
      {label}
      <RadioButton name={name} control={control} formData={formData} optionType={optionType} />
    </>
  )
}

export default Field
