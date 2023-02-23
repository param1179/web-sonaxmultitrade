import { usersApi } from '.'

export const getList = (position, userId) => {
  const { isloading, data: resp } = usersApi.useGetTeams(userId)
  var childs = resp?.status === 200 ? resp?.data?.childs : []

  const hasChildren = childs && childs.length !== 0
  let chi = []
  if (hasChildren) {
    chi = childs.filter((child) => child.placement === position)
  }
  return chi
}
