import React, { FC } from 'react'
import { Radio } from 'antd'
import { Controller } from 'react-hook-form'
import { TRadioBtnsProps } from 'common/types/types'

const RadioButton: FC<TRadioBtnsProps> = ({ name, control, formData, optionType = 'default' }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Radio.Group
          options={formData}
          optionType={optionType}
          className="radio-group-custom"
          value={value}
          onChange={onChange}
        />
      )}
    />
  )
}

export default RadioButton
