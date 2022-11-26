// libraries
import React, { useState } from 'react';
import Pagination from 'rc-pagination';
// constants
import { PageParams, PAGE_SIZES, DEFAULT_PAGE_SIZE } from 'constants/index';

type PaginationCRMProps = {
  handlePageChange: (pageParams: PageParams) => void
  currentPageLength: number,
  totalRecords: number,
  size: number,
  page: number
};

const PaginationCRM: React.FC<PaginationCRMProps> = ({
  handlePageChange, currentPageLength, totalRecords, size, page,
}) => {
  const [params, setParams] = useState<{ page: number, size: number }>({ page, size });

  const handlePagination = (newPaginationParameters : { page: number, size: number }) => {
    setParams(newPaginationParameters);
    handlePageChange(newPaginationParameters);
  };

  const changePageSize = (e: React.FormEvent<HTMLElement>) => {
    const selectValue = Number((e.target as HTMLSelectElement).value);
    const newPageParams = { page: Math.ceil((params.page * params.size) / selectValue), size: selectValue };

    handlePagination(newPageParams);
  };

  const changePage = (newPage: number) => {
    if ((currentPageLength < params.size) && (newPage > params.page)) {
      return;
    }

    handlePagination({ ...params, page: newPage });
  };

  const renderPagination = () => {
    if (totalRecords >= params.size) {
      return (
        <Pagination
          className="rc-pagination"
          current={params.page}
          onChange={changePage}
          pageSize={params.size}
          total={totalRecords}
        />
      );
    }

    return null;
  };

  const renderSelect = () => {
    if (totalRecords > DEFAULT_PAGE_SIZE) {
      return (
        <select
          className="pagination-select"
          onChange={changePageSize}
          value={params.size}
        >
          { PAGE_SIZES.map((pageSize) => <option key={pageSize} value={pageSize}>{pageSize}</option>)}
        </select>
      );
    }

    return null;
  };

  return (
    <div className="pagination-crm">
      {renderPagination()}
      {renderSelect()}
    </div>
  );
};

export default PaginationCRM;
