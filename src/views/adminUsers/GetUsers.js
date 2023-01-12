import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { adminApi } from 'src/APIs'
import { Tree, TreeNode } from 'react-organizational-chart'

function GetUsers() {
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const { isLoading, data } = adminApi.useGetUsers(limit, page, search)
  console.log(data)

  return (
    <div>
      <strong>GetUsers</strong>
    </div>
  )
}

export default GetUsers
