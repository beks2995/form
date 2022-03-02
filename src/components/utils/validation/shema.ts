import { object, string, number } from 'yup';

const requiredString = string().required('Это поле у нас обязательное');

// todo remove el unuse vars.
// todo return type
const areaAllValArr: number[] = new Array(99).fill(null).map((el, idx) => idx + 1);
// todo remove and use DRY
export const schema = object().shape({
    number: number().min(-4).max(48).required('Это поле обязательно'),
    Rooms: requiredString.min(1),
    Series: string().min(1).required('обязательно'),
    BuildingType: string().min(1).required('обязательно'),
    Area_all: number().min(1, 'Площадь не должна быть меньше 1').required('обязательно').oneOf(areaAllValArr, 'выберите число меньше 99').typeError('Укажите цифру'),
    Area_live: number().required('обязательно').typeError('Укажите цифру'),
    Area_kitchen: number().required('обязательно').typeError('Укажите цифру'),
    Floor: number().min(-4, 'Этаж не может быть меньше минус 4').max(48, 'Максимальное количество этажей 48').required('обязательно').typeError('Укажите цифру'),
    FloorOf: number().min(-4, 'Этаж не может быть меньше минус 4').max(48, 'Максимальное количество этажей 48').required('обязательно').typeError('Укажите цифру'),
    Ceil: number().min(1, 'Недопустимая высота потолков').max(15, 'Максимальная высота потолка 15м').required('обязательно').typeError('Укажите цифру')
});