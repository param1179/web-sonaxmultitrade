import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { adminApi } from 'src/APIs'
import { Tree, TreeNode } from 'react-organizational-chart'
import Pagination from 'src/components/Pagination'

function GetUsers() {
  const [limit, setLimit] = useState(2)
  const [currentPage, setCurrentPage] = useState(1)

  const [search, setSearch] = useState('')
  const { isLoading, data: resp } = adminApi.useGetUsers(limit, currentPage, search)
  const totalUsers = resp?.totalUsers
  const users = resp?.users

  return (
    <div>
      <strong>GetUsers</strong>
      {!isLoading && (
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={totalUsers}
          pageSize={users?.length}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  )
}

export default GetUsers
