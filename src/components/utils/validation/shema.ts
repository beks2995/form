import * as yup from "yup";

export const schema = yup.object().shape({
    number: yup.number().min(-4).max(48).required('Это поле обязательно')
});