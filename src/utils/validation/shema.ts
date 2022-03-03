import {object, string, number} from 'yup';

const requiredSelect = string().required('Это поле у нас обязательное');
const requiredArea = number().required('обязательно').typeError('Укажите цифру');
const requiredFloor = number().min(-4, 'Этаж не может быть меньше минус 4').max(48, 'Максимальное количество этажей 48').required('обязательно').typeError('Укажите цифру');

const areaAllValArr: number[] = new Array(99).fill(null).map((item, idx): number =>{return item = idx + 1});

export const schema = object().shape({
  Rooms: requiredSelect,
  Series: requiredSelect,
  BuildingType: requiredSelect,
  Area_all: number().min(1, 'Площадь не должна быть меньше 1').required('обязательно').oneOf(areaAllValArr, 'выберите число меньше 99').typeError('Укажите цифру'),
  Area_live: requiredArea,
  Area_kitchen: requiredArea,
  Floor: requiredFloor,
  FloorOf: requiredFloor,
  Ceil: number().min(1, 'Недопустимая высота потолков').max(15, 'Максимальная высота потолка 15м').required('обязательно').typeError('Укажите цифру')
});