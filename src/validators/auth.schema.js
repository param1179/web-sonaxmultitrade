import { HELP } from '../conts'
import * as yup from 'yup'

export const signIn = yup.object().shape({
  email: yup
    .string()
    .matches(HELP.EMAIL_REGEXP, 'Email is not correct!')
    .required('Email is require field!'),
  password: yup
    .string()
    .matches(HELP.PASSWORD_REGEXP, 'Password is not correct!')
    .max(15, 'Max 15 symbol!')
    .required('Password is require field!'),
})

export const signUp = yup.object().shape({
  password: yup
    .string()
    .matches(HELP.PASSWORD_REGEXP, 'Password is not correct!')
    .max(15, 'Max 15 symbol!')
    .required('Password is require field!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match!')
    .required('Passwords must match!'),
})

export const createAdmin = yup.object().shape({
  email: yup
    .string()
    .matches(HELP.EMAIL_REGEXP, 'Email is not correct!')
    .required('Email is require field!'),
  password: yup
    .string()
    .matches(HELP.PASSWORD_REGEXP, 'Password is not correct!')
    .max(15, 'Max 15 symbol!')
    .required('Password is require field!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match!')
    .required('Passwords must match!'),
})

export const createCoupone = yup.object().shape({
  code: yup.string().max(30, 'Max value 20.').required('Coupon Name is require field!'),
  percent: yup
    .number()
    .typeError('You must specify a number')
    .min(1, 'Min value 1.')
    .max(100, 'Max value 100.')
    .required('This field is required!'),
  endDate: yup.date().min(new Date(), "end date can't be before current date"),
})

export const createSchool = yup.object().shape({
  email: yup
    .string()
    .matches(HELP.EMAIL_REGEXP, 'Email is not correct!')
    .required('Email is require field!'),
  schoolName: yup.string().required('Name is require field!'),
})
