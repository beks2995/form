import {TFieldItem, TFormValues} from "../types/types";
import formData from "../dummy/formData";
import InputLabel from "../../components/inputLabel/inputLabel";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "../../utils/validation/shema";

export const radioButtonsList: TFieldItem[] = [
  {
    name: 'AccType',
    formData: formData.accType,
    optionType: 'button',
    label: <InputLabel>Тип аккаунта</InputLabel>
  },
  {
    name: 'AdType',
    formData: formData.adType,
    optionType: 'button',
    label: <InputLabel>Тип рекламы</InputLabel>
  },
  {
    name: 'Building',
    formData: formData.building,
    optionType: 'default',
    label: <InputLabel>Объект</InputLabel>
  },
];

export const defaultValues = {
  AccType: 'owner',
  AdType: 'sell',
  BuildingType: 'brick',
  Rooms: '1',
  Series: 'elit',
  Heating: 'central'
};

// todo return type && move to utils|hooks, hooks with lowercase
export const UseFormAddAd = () => {
  const {
    handleSubmit,
    reset,
    watch,
    control
  } = useForm<TFormValues>({
    defaultValues,
    resolver: yupResolver(schema)
  });
  const watchBuilding = watch(['Building']);

  const onSubmit: SubmitHandler<TFormValues> = (data): void => {
    alert(JSON.stringify(data))
  };
  return {handleSubmit, reset, watch, control, watchBuilding, onSubmit}
};
