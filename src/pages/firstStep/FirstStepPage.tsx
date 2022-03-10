import React, { FC } from 'react'
import { ControlType } from 'common/types/types'
import { radioButtonsList } from 'common/consts/consts'
import { useFormAddAd } from 'utils/hooks/useFormAddAd'
import Heading from 'components/heading/heading'
import DynamicForm from 'components/form/dynamicForm'
import Field from 'components/form/component/field/field'
import { Wrapper } from 'common/styles/components/Wrapper'

const FirstStepPage: FC = function () {
  const { handleSubmit, reset, control, watchBuilding, onSubmit } = useFormAddAd()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading>Тип объявления</Heading>
      <Wrapper>
        {
          // return type
          radioButtonsList.map(({ name, formData, optionType, label }) => (
            <Field
              key={name}
              name={name}
              formData={formData}
              label={label}
              optionType={optionType}
              control={control as ControlType}
            />
          ))
        }
      </Wrapper>
      <DynamicForm watchBuilding={watchBuilding[0]} control={control} />

      <button type="button" onClick={() => reset()}>
        Сбросить
      </button>
      <button type="submit">Отправить</button>
    </form>
  )
}

export default FirstStepPage
