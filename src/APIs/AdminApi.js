import axios from '../axios'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/common'
//helpers
import { TokenLS } from '../helpers'

const fetchProfile = async () => await axios.get('users/profile')
const fetchTeams = async (pId) => await axios.get(`users/teams/${pId}`)

const fetchAdmins = async () => await axios.get('admin/gets')

const fetchServices = async () => await axios.get('admin/services')
const fetchSchools = async () => await axios.get('admin/schools')

const fetchActivity = async (filterNum) => await axios.get(`admin/activity/${filterNum}`)

const fetchDeleteAdmin = async (id) => await axios.delete(`admin/delete/${id}`)
const fetchDeleteCoupon = async (id) => await axios.delete(`admin/coupon/${id}`)

const fetchCreateAdmin = async (body) => await axios.post('admin/create', body)
const fetchCreateAdminUser = async (body) => await axios.post('users/add', body)
const fetchCreateSchool = async (body) => await axios.post('admin/schools', body)
const fetchCreateCoupon = async (body) => await axios.post('admin/coupon', body)

export const fetchCoupons = async (page) => await axios.get(`admin/coupons?page=${page}`)

const fetchLogOut = async () => await axios.get('admin/logOut')

export const fetchManage = async (type, page, search) =>
  await axios.get(`admin/users/${type}?page=${page}&email=${search}`)

const fetchUsers = async (limit, page, search) =>
  await axios.get(`admin/users/get?page=${page}&limit=${limit}&search=${search}`)

const fetchToggleBan = async (id) => await axios.get(`admin/ban/${id}`)
const fetchPackages = async () => await axios.get(`users/packages`)

const fetchDeleteUser = async (id) => await axios.delete(`admin/deleteUser/${id}`)

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
