export const getToken = () => {
  return JSON.parse(localStorage.getItem('tokenMedsemblySchool'))
}

export const setToken = (token) => {
  localStorage.setItem('tokenMedsemblySchool', JSON.stringify(token))
}

export const removeToken = () => {
  localStorage.removeItem('tokenMedsemblySchool')
}
