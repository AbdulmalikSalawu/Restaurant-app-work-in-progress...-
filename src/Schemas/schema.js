import * as Yup from 'yup'
        
const passwordRules = /^(?=.*\d)(?=.*[a-z]).{5,}$/;
const numberRules = /^[\d]{11}$/

export const basicSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email").required("Required"),
    username: Yup.string().min(2, "must be at least two characters").required("Required"),
    phoneNumber: Yup
        .string()
        .matches(numberRules, "must be exactly 11 digits")
        .max(11, "must not exceed 11 digits")
        .required("Required"),
    password: Yup
        .string()
        .min(6)
        .matches(passwordRules, "must include a letter and a number")
        .required("Required"),
})
