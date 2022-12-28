export const getToken = () => {
  return JSON.parse(localStorage.getItem('token_sonaxmultitrade'))
}

export const getProfileData = () => {
  return JSON.parse(localStorage.getItem('profile_sonaxmultitrade'))
}

export const setToken = (token) => {
  localStorage.setItem('token_sonaxmultitrade', JSON.stringify(token))
}

export const setProfileData = (profile) => {
  localStorage.setItem('profile_sonaxmultitrade', JSON.stringify(profile))
}

export const removeToken = () => {
  localStorage.removeItem('token_sonaxmultitrade')
  localStorage.removeItem('profile_sonaxmultitrade')
}
