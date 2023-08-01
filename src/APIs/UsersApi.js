import axios from '../axios'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/common'
//helpers
import { TokenLS } from '../helpers'

const fetchProfile = async () => await axios.get('users/profile')
const fetchUpdate = async () => await axios.get('users/get')
const fetchTeams = async (pId) => await axios.get(`users/teams/${pId}`)
const fetchDirectTeams = async () => await axios.get(`users/direct`)
const fetchTeamList = async (position, pId) =>
  await axios.get(`users/teamList/${pId}?position=${position}`)

const fetchAdmins = async () => await axios.get('admin/gets')

const fetchServices = async () => await axios.get('admin/services')
const fetchSchools = async () => await axios.get('admin/schools')

const fetchActivity = async (filterNum) => await axios.get(`admin/activity/${filterNum}`)

const fetchDeleteAdmin = async (id) => await axios.delete(`admin/delete/${id}`)
const fetchDeleteCoupon = async (id) => await axios.delete(`admin/coupon/${id}`)

const fetchCreateAdmin = async (body) => await axios.post('admin/create', body)
const fetchCreateUser = async (body) => await axios.post('users/add', body)
const fetchRegisterUser = async (body) => await axios.post('users/register', body)
const fetchPaymentRequest = async (body) => await axios.post('users/request', body)

const fetchCreateSchool = async (body) => await axios.post('admin/schools', body)
const fetchCreateCoupon = async (body) => await axios.post('admin/coupon', body)
const fetchChangePassword = async (body) => await axios.post('users/changePassword', body)
const fetchEditUser = async (body) => await axios.put('users/update', body)

export const fetchCoupons = async (page) => await axios.get(`admin/coupons?page=${page}`)

const fetchLogOut = async () => await axios.get('admin/logOut')

export const fetchManage = async (type, page, search) =>
  await axios.get(`admin/users/${type}?page=${page}&email=${search}`)

const fetchUsers = async (limit, page, search) =>
  await axios.get(`admin/users?page=${page}&limit=${limit}&search=${search}`)

const fetchToggleBan = async (id) => await axios.get(`admin/ban/${id}`)
const fetchPackages = async () => await axios.get(`users/packages`)
const fetchInstallments = async () => await axios.get(`users/installments`)

const fetchDeleteUser = async (id) => await axios.delete(`admin/deleteUser/${id}`)
export const fetchRewards = async () => await axios.get(`users/rewards`)

export const useProfile = () => {
  return useQuery('users/profile', fetchProfile, {
    refetchOnWindowFocus: false,
  })
}

export const useServices = () => {
  return useQuery('get/services', fetchServices, {
    refetchOnWindowFocus: false,
  })
}

export const useGetRewards = () => {
  return useQuery(`users/rewards`, () => fetchRewards(), {
    refetchOnWindowFocus: false,
  })
}

export const useGetProfile = () => {
  return useQuery(`get`, () => fetchUpdate(), {
    refetchOnWindowFocus: false,
  })
}

export const useSchools = () => {
  return useQuery('get/schools', fetchSchools, {
    refetchOnWindowFocus: false,
  })
}

export const useActivity = (filterNum) => {
  return useQuery(`get/activity/${filterNum}`, () => fetchActivity(filterNum), {
    refetchOnWindowFocus: false,
  })
}

export const useAdmins = () => {
  return useQuery('get/admins', fetchAdmins, { refetchOnWindowFocus: false })
}

export const useCoupons = (page) => {
  return useQuery(`get/coupons/${page}`, () => fetchCoupons(page), {
    refetchOnWindowFocus: false,
  })
}

export const useDeleteAdmin = () => {
  return useMutation(fetchDeleteAdmin)
}

export const useDeleteCoupon = () => {
  return useMutation(fetchDeleteCoupon)
}

export const useCreateAdmin = (setErrors) => {
  return useMutation(fetchCreateAdmin, {
    onError: (error) => {
      if (error?.status === 400) {
        setErrors({ email: error.message })
      }
    },
  })
}

export const useCreateUser = (setErrors) => {
  return useMutation(fetchCreateUser, {
    onError: (error) => {
      if (error?.status === 400) {
        setErrors({ email: error.message })
      }
    },
  })
}

export const useRegisterUser = (setErrors) => {
  return useMutation(fetchRegisterUser, {
    onError: (error) => {
      if (error?.status === 400) {
        setErrors({ email: error.message })
      }
    },
  })
}

export const usePaymentRequest = (setErrors) => {
  return useMutation(fetchPaymentRequest, {
    onError: (error) => {
      if (error?.status === 400) {
        setErrors({ paymentRequest: error.message })
      }
    },
  })
}

export const useChangePassword = (setErrors) => {
  return useMutation(fetchChangePassword, {
    onError: (error) => {
      if (error?.status === 400) {
        setErrors({ oldPassword: error.message })
      }
    },
  })
}

export const useEditUser = (setErrors) => {
  return useMutation(fetchEditUser, {
    onError: (error) => {
      if (error?.status === 400) {
        // setErrors({ oldPassword: error.message })
      }
    },
  })
}

export const useCreateCoupon = () => {
  return useMutation(fetchCreateCoupon, {
    onError: (error) => {
      if (error?.status === 400) {
        // setErrors({ email: error.message });
      }
    },
  })
}

export const useCreateSchool = () => {
  return useMutation(fetchCreateSchool, {
    onError: (error) => {
      if (error?.status === 400) {
        // setErrors({ email: error.message });
      }
    },
  })
}

export const useLogOut = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return useMutation(fetchLogOut, {
    onSuccess: (resp) => {
      if (resp?.status === 200) {
        TokenLS.removeToken()
        dispatch(logout())
        navigate('/')
      }
    },
  })
}

export const useManage = (type, page, search) => {
  return useQuery(`get/${type}/${page}/${search}`, () => fetchManage(type, page, search), {
    refetchOnWindowFocus: false,
  })
}

export const useGetUsers = (limit, page, search) => {
  return useQuery(`admin/users/${page}/${limit}/${search}`, () => fetchUsers(limit, page, search), {
    refetchOnWindowFocus: false,
  })
}

export const useGetPackages = (limit, page, search) => {
  return useQuery(`users/packages`, () => fetchPackages(), {
    refetchOnWindowFocus: false,
  })
}

export const useIntallments = () => {
  return useQuery(`users/installments`, () => fetchInstallments(), {
    refetchOnWindowFocus: false,
  })
}

export const useGetTeams = (id) => {
  return useQuery(`users/teams/${id}`, () => id && fetchTeams(id), {
    refetchOnWindowFocus: false,
  })
}

export const useGetDirectTeams = () => {
  return useQuery(`users/direct`, () => fetchDirectTeams(), {
    refetchOnWindowFocus: false,
  })
}

export const useGetTeamList = (position, id) => {
  return useQuery(`users/teamList/${id}/${position}`, () => id && fetchTeamList(position, id), {
    refetchOnWindowFocus: false,
  })
}

export const useToggleBan = () => {
  return useMutation(fetchToggleBan)
}

export const useDeleteUser = () => {
  return useMutation(fetchDeleteUser)
}
