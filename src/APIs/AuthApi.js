import axios from '../axios'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
//helpers
import { TokenLS } from '../helpers'

const fetchSignIn = async (body) => await axios.post('admin/signIn', body)

export const useSignIn = (setErrors) => {
  const navigate = useNavigate()

  return useMutation(fetchSignIn, {
    onSuccess: (resp) => {
      if (resp?.status === 200) {
        TokenLS.setToken(resp.data.accessToken)
        navigate('/dashboard')
      }
    },
    onError: (error) => {
      if (error?.status === 400) {
        setErrors({ email: error.message })
      }
    },
  })
}
