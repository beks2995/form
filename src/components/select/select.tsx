import React, { FC } from 'react'
import { Select as Sel } from 'antd'
import { Controller } from 'react-hook-form'
import { TSelectProps } from 'common/types/types'

const Select: FC<TSelectProps> = ({ name, control, formData }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Sel options={formData} value={value} onChange={onChange} />
      )}
    />
  )
}

export default Select
