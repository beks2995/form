import { SubmitHandler, useForm } from 'react-hook-form'
import { TFormValues } from 'common/types/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from 'utils/validation/shema'
import { defaultValues } from 'common/consts/consts'

export const useFormAddAd = () => {
  const { handleSubmit, reset, watch, control } = useForm<TFormValues>({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const watchBuilding = watch(['Building'])

  const onSubmit: SubmitHandler<TFormValues> = (data): void => {
    alert(JSON.stringify(data))
  }
  return { handleSubmit, reset, watch, control, watchBuilding, onSubmit }
}
