import { object, string, number } from 'yup'
import { TYupObj } from 'common/types/types'

const requiredFunc = (object: TYupObj) => object.required('Это поле у нас обязательное')
const typeErrFunc = (func: TYupObj) => func.typeError('Укажите цифру')
const valueFunc = (func: TYupObj, minVal: number, minText: string, maxVal:number, maxText: string) => func.min(minVal, minText).max(maxVal, maxText)

export const schema = object().shape({
  Rooms: requiredFunc(string()),
  Series: requiredFunc(string()),
  BuildingType: requiredFunc(string()),
  AreaAll: valueFunc(typeErrFunc(requiredFunc(number())), 1, 'Площадь не должна быть меньше 1', 1500, 'Мы занимаемся недвижимостью'),
  AreaLive: typeErrFunc(requiredFunc(number())),
  AreaKitchen: typeErrFunc(requiredFunc(number())),
  Floor: valueFunc(typeErrFunc(requiredFunc(number())), -4, 'Этаж не может быть меньше минус 4', 48, 'Максимальное количество этажей 48'),
  FloorOf: valueFunc(typeErrFunc(requiredFunc(number())), -4, 'Этаж не может быть меньше минус 4', 48, 'Максимальное количество этажей 48'),
  Ceil: valueFunc(typeErrFunc(requiredFunc(number())), 1, 'Недопустимая высота потолков', 15, 'Максимальная высота потолка 15м')
})
