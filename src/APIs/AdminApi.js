import axios from '../axios'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/common'
//helpers
import { TokenLS } from '../helpers'

const fetchProfile = async () => await axios.get('users/profile')
const fetchTeams = async (pId) => await axios.get(`users/teams/${pId}`)
const fetchUpdateUser = async (id) => await axios.get(`admin/user/${id}`)
const fetchUpdateSponserUser = async ({ sid, uid }) =>
  await axios.get(`admin/sponser/${sid}/${uid}`)
const fetchEditUser = async ({ id, body }) => await axios.put(`admin/user/${id}`, body)
const fetchUpdatePayment = async (id) => await axios.get(`admin/payment/${id}`)
const fetchInstallments = async (id) => await axios.get(`admin/installments/${id}`)

const fetchAdmins = async () => await axios.get('admin/gets')

const fetchServices = async () => await axios.get('admin/services')
const fetchSchools = async () => await axios.get('admin/schools')

const fetchActivity = async (filterNum) => await axios.get(`admin/activity/${filterNum}`)

const fetchDeleteAdmin = async (id) => await axios.delete(`admin/delete/${id}`)
const fetchDeleteCoupon = async (id) => await axios.delete(`admin/coupon/${id}`)

const fetchCreateAdmin = async (body) => await axios.post('admin/create', body)
const fetchCreateAdminUser = async (body) => await axios.post('admin/users/add', body)
const fetchCreateAdminRewards = async (body) => await axios.post('admin/rewards', body)
const fetchCreateSchool = async (body) => await axios.post('admin/schools', body)
const fetchCreateCoupon = async (body) => await axios.post('admin/coupon', body)

export const fetchCoupons = async (page) => await axios.get(`admin/coupons?page=${page}`)

const fetchLogOut = async () => await axios.get('admin/logOut')

export const fetchManage = async (type, page, search) =>
  await axios.get(`admin/users/${type}?page=${page}&email=${search}`)

export const fetchUsers = async (limit, page, search) =>
  await axios.get(`admin/users?page=${page}&limit=${limit}&search=${search}`)

export const fetchAllUsers = async () => await axios.get(`admin/users/list`)
export const fetchRewards = async () => await axios.get(`admin/rewards`)

const fetchToggleBan = async (id) => await axios.get(`admin/ban/${id}`)
const fetchUser = async (id) => await axios.get(`admin/info/${id}`)
const fetchPackages = async () => await axios.get(`admin/packages`)

const fetchDeleteUser = async (id) => await axios.delete(`admin/deleteUser/${id}`)

export const useProfile = () => {
  return useQuery('users/profile', fetchProfile, {
    refetchOnWindowFocus: false,
  })
}

export const useIntallments = (id) => {
  return useQuery(`admin/installments/${id}`, () => fetchInstallments(id), {
    refetchOnWindowFocus: false,
  })
}

export const useServices = () => {
  return useQuery('get/services', fetchServices, {
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

export const useCreateAdminUser = (setErrors) => {
  return useMutation(fetchCreateAdminUser, {
    onError: (error) => {
      if (error?.status === 400) {
        setErrors({ email: error.message })
      }
    },
  })
}

export const useCreateAdminRewards = (setErrors) => {
  return useMutation(fetchCreateAdminRewards, {
    onError: (error) => {
      if (error?.status === 400) {
        setErrors({ email: error.message })
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

export const useUserTabs = (position, id) => {
  return useQuery(`admin/userTabs/${id}/${position}`, () => id && fetchUserTabs(position, id), {
    refetchOnWindowFocus: false,
  })
}

const fetchUserTabs = async (position, pId) =>
  await axios.get(`admin/userTabs/${pId}?position=${position}`)

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

export const useGetUser = (id) => {
  return useQuery(`admin/info/${id}`, () => fetchUser(id), {
    refetchOnWindowFocus: false,
  })
}

export const useGetAllUsers = () => {
  return useQuery(`admin/users/list`, () => fetchAllUsers(), {
    refetchOnWindowFocus: false,
  })
}

export const useGetRewards = () => {
  return useQuery(`admin/rewards`, () => fetchRewards(), {
    refetchOnWindowFocus: false,
  })
}

export const useGetPackages = (limit, page, search) => {
  return useQuery(`admin/packages`, () => fetchPackages(), {
    refetchOnWindowFocus: false,
  })
}

export const useGetTeams = (id) => {
  return useQuery(`users/teams/${id}`, () => id && fetchTeams(id), {
    refetchOnWindowFocus: false,
  })
}

export const useToggleBan = () => {
  return useMutation(fetchToggleBan)
}

export const useDeleteUser = () => {
  return useMutation(fetchDeleteUser)
}

export const useUpdateUser = () => {
  return useMutation(fetchUpdateUser)
}

export const useUpdateSponserUser = () => {
  return useMutation(fetchUpdateSponserUser)
}

export const useEditUser = () => {
  return useMutation(fetchEditUser)
}

export const useUpdatePayment = () => {
  return useMutation(fetchUpdatePayment)
}
