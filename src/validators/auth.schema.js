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

export const changePassword = yup.object().shape({
  oldPassword: yup.string().max(15, 'Max 15 symbol!').required('Password is require field!'),
  password: yup
    .string()
    .max(15, 'Max 15 symbol!')
    .notOneOf([yup.ref('oldPassword'), null], 'Password should not same as old password!')
    .required('Password is require field!'),
  cPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match!')
    .required('Passwords must match!'),
})

export const createUser = yup.object().shape({
  firstName: yup.string().required('First name is require field!'),
  lastName: yup.string().required('Last name is require field!'),
  gender: yup.string().required('Last name is require field!'),
  dob: yup.date().required('Date of birth required'),
  nomineeFirstName: yup.string().required('First name is require field!'),
  nomineeLastName: yup.string().required('First name is require field!'),
  nomineeDob: yup.date().required('Date of birth required'),
  nomineeRelation: yup.string().required('Relation is require field!'),
  mobile: yup
    .string()
    .matches(HELP.phoneRegExp, 'Phone number is not valid')
    .required('Mobile is require field!')
    .min(10, 'Phone number too short')
    .max(10, 'Phone number too long'),
  email: yup
    .string()
    .matches(HELP.EMAIL_REGEXP, 'Email is not correct!')
    .required('Email is require field!'),
  password: yup.string().max(15, 'Max 15 symbol!').required('Password is require field!'),
  cpassword: yup
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

export const createRewards = yup.object().shape({
  rewardLevel: yup.string().required('Reward Level is require field!'),
  onPairs: yup.number().required('Pairs is require field!'),
  reward: yup.string().required('Reward name is require field!'),
})

export const updateUser = yup.object().shape({
  firstName: yup.string().required('First name is require field!'),
  lastName: yup.string().required('Last name is require field!'),
  mobile: yup
    .string()
    .matches(HELP.phoneRegExp, 'Phone number is not valid')
    .required('Mobile is require field!')
    .min(10, 'Phone number too short')
    .max(10, 'Phone number too long'),
})

export const userSignIn = yup.object().shape({
  uId: yup.string().required('UID is require field!'),
  password: yup.string().max(15, 'Max 15 symbol!').required('Password is require field!'),
})
