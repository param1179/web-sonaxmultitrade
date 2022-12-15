import { CPagination, CPaginationItem } from '@coreui/react'
import React from 'react'
import PropTypes from 'prop-types'

function Pagination({ data, setPage }) {
  return (
    <CPagination align="end" aria-label="Page navigation example">
      <CPaginationItem onClick={() => setPage(data.page - 1)} disabled={!data.hasPrevPage}>
        Previous
      </CPaginationItem>
      <CPaginationItem onClick={() => setPage(1)} active={data.page === 1 ? true : false}>
        1
      </CPaginationItem>
      {data.totalPages > 1 && (
        <>
          {data.totalPages > 1 && (
            <CPaginationItem onClick={() => setPage(2)} active={data.page === 2 ? true : false}>
              2
            </CPaginationItem>
          )}
          {data.totalPages > 2 && (
            <CPaginationItem onClick={() => setPage(3)} active={data.page === 3 ? true : false}>
              3
            </CPaginationItem>
          )}
          {data.page === 4 && (
            <CPaginationItem onClick={() => setPage(4)} active={data.page === 4 ? true : false}>
              4
            </CPaginationItem>
          )}
          {data.totalPages > 4 && <CPaginationItem>...</CPaginationItem>}
          {data.page > 4 && data.totalPages - 1 !== data.page && data.totalPages !== data.page && (
            <CPaginationItem onClick={() => setPage()} active={data.page > 4 ? true : false}>
              {data.page}
            </CPaginationItem>
          )}
          {data.totalPages > 5 && data.page !== data.totalPages - 2 && (
            <CPaginationItem>...</CPaginationItem>
          )}

          {data.totalPages > 5 && (
            <CPaginationItem
              onClick={() => setPage(data.totalPages - 1)}
              active={data.totalPages - 1 === data.page ? true : false}
            >
              {data.totalPages - 1}
            </CPaginationItem>
          )}
          {data.totalPages > 5 && (
            <CPaginationItem
              onClick={() => setPage(data.totalPages)}
              active={data.totalPages === data.page ? true : false}
            >
              {data.totalPages}
            </CPaginationItem>
          )}
        </>
      )}
      <CPaginationItem onClick={() => setPage(data.page + 1)} disabled={!data.hasNextPage}>
        Next
      </CPaginationItem>
    </CPagination>
  )
}

export default Pagination

Pagination.propTypes = {
  data: PropTypes.object,
  setPage: PropTypes.func,
}
