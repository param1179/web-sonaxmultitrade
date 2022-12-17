export const getToken = () => {
  return JSON.parse(localStorage.getItem('token_sonaxmultitrade'))
}

export const setToken = (token) => {
  localStorage.setItem('token_sonaxmultitrade', JSON.stringify(token))
}

export const removeToken = () => {
  localStorage.removeItem('token_sonaxmultitrade')
}
