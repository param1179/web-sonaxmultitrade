import axios from '../axios'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
//helpers
import { TokenLS } from '../helpers'

const fetchSignIn = async (body) => await axios.put('admin/login', body)
const fetchUserSignIn = async (body) => await axios.put('users/login', body)

export const useSignIn = (setErrors) => {
  const navigate = useNavigate()

  return useMutation(fetchSignIn, {
    onSuccess: (resp) => {
      if (resp?.status === 200) {
        TokenLS.setToken(resp.data.accessToken)
        TokenLS.setProfileData(resp.data)
        navigate('/dashboardAdmin')
      }
    },
    onError: (error) => {
      if (error?.status === 400) {
        setErrors({ email: error.message })
      }
    },
  })
}
export const useUserSignIn = (setErrors) => {
  const navigate = useNavigate()

  return useMutation(fetchUserSignIn, {
    onSuccess: (resp) => {
      if (resp?.status === 200) {
        TokenLS.setToken(resp.data.accessToken)
        TokenLS.setProfileData(resp.data)
        navigate('/dashboard')
      }
    },
    onError: (error) => {
      if (error?.status === 400) {
        setErrors({ uId: error.message })
      }
    },
  })
}
