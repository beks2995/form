import React, { FC } from 'react'
import Heading from 'components/heading/heading'
import { ControlType, TFormProps } from 'common/types/types'
import InputLabel from 'components/inputLabel/inputLabel'
import InputNumber from 'components/inputNumber/inputNumber'
import { Wrapper } from 'common/styles/components/Wrapper'

const Plot: FC<TFormProps> = ({ control }) => {
  const controls = control as ControlType
  return (
    <>
      <Heading>Об объекте</Heading>
      <Wrapper>
        <InputLabel>Площадь участка (в сотках)</InputLabel>
        <InputNumber name={'AreaHouse'} control={controls} label={''} square={false} />
      </Wrapper>
    </>
  )
}

export default Plot
