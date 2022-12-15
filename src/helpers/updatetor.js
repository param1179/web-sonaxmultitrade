export const correctFullName = (firstName, lastName) => {
  return `${firstName} ${lastName ?? ''}`
}

export const shortFullName = (firstName, lastName) => {
  return `${firstName.substr(0, 1)}${lastName?.substr(0, 1) ?? ''}`
}
