import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CHeader,
  CRow,
  CToaster,
} from '@coreui/react'
import { useFormik } from 'formik'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usersApi } from 'src/APIs'
import { getProfileData } from 'src/helpers/tokenLS'
import { authSchema } from 'src/validators'
import AppToaster from 'src/components/AppToaster'

const vars = {
  '--cui-header-bg': '#E4e4e4',
}

const DirectRegister = () => {
  const navigation = useNavigate()
  const toaster = useRef()
  const [toast, addToast] = useState(0)
  const user = getProfileData()
  const { isLoading, data: packages } = usersApi.useGetPackages()

  const { values, handleChange, submitForm, errors, isValid, dirty, resetForm } = useFormik({
    initialValues: {
      parentId: '',
      sponserId: user && user._id,
      packageId: packages?.data[0]._id,
      placement: 'Left',
      firstName: '',
      lastName: '',
      dob: '',
      mobile: '',
      email: '',
      gender: 'Male',
      activeUser: 'Active',
      password: '',
      cpassword: '',
      spouseOrFather: '',
      nomineeFirstName: '',
      nomineeLastName: '',
      nomineeDob: '',
      nomineeRelation: '',
      locality: '',
      city: '',
      district: '',
      state: '',
      pin: '',
      country: '',
    },
    validationSchema: authSchema.createUser,
    onSubmit: (values) => onCreate(values),
  })

  const mutateCreate = usersApi.useRegisterUser()

  const onCreate = async (body) => {
    const resp = await mutateCreate.mutateAsync(body)
    if (resp?.status === 200) {
      resetForm()
      addToast(AppToaster({ color: '', content: 'User added!' }))
      navigation('/users')
    }
  }

  return <CRow>hello</CRow>
}

export default DirectRegister
