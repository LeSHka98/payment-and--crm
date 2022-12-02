// libraries
import React, {
  useEffect, useState,
} from 'react';
import { Spinner, Table } from 'reactstrap';
import { ApolloError } from '@apollo/client';
// assets
import { ReactComponent as ArrowUpIcon } from 'assets/images/sort-up.svg';
import { ReactComponent as ArrowDownIcon } from 'assets/images/sort-down.svg';
// components
import PaginationCRM from 'components/ClientArea/PaginationCRM';
import TableRow from 'components/ClientArea/Table/Row';
// constants
import { CrmGatewayQuery, Borrower } from 'constants/graphql';
import { PageParams, SortFieldsType } from 'constants/common';

type TableProps = {
  data: CrmGatewayQuery,
  loading: boolean,
  error: ApolloError,
  handlePageChange: (pageParams: PageParams) => void
  handleSort: (sortParams: SortFieldsType) => void
  size: number,
  page: number,
  serverSort: SortFieldsType
};

const ClientAreaTable: React.FC<TableProps> = ({
  data, loading, error, handlePageChange, handleSort, size, page, serverSort,
}) => {
  const [borrowers, setBorrowers] = useState<Array<Borrower>>();
  const [totalRecords, setTotalRecords] = useState<number>();
  const [sortParams, setSortParams] = useState<SortFieldsType>(serverSort);

  useEffect(() => {
    if (data) {
      setBorrowers(data.mainPage.borrowersWidget.borrowers);
      setTotalRecords(data.mainPage.borrowersWidget.recordsAmount);
      setSortParams(serverSort);
    }
  }, [data, serverSort]);

  const tableSort = (e: React.FormEvent<HTMLElement>) => {
    const { sort } = e.currentTarget.dataset;

    const sortData: SortFieldsType = (sortParams && (sort === sortParams.orderBy))
      ? { direction: (sortParams.direction === 'DESC') ? 'ASC' : 'DESC', orderBy: sort }
      : { direction: 'ASC', orderBy: sort };

    setSortParams(sortData);
    handleSort(sortData);
  };

  const checkIsActive = (
    direction: 'ASC' | 'DESC',
    order: string,
  ) => (sortParams?.direction === direction) && (sortParams?.orderBy === order);

  if (loading) {
    return <Spinner className="spinner-placement" color="dark" />;
  }
  if (error) {
    return <h1 className="error-placement">Error</h1>;
  }

  const renderTable = () => {
    if (borrowers?.length) {
      return (
        <div className="custom-wrapper">
          <Table>
            <thead>
              <tr className="table-secondary">
                <th>
                  <div className="table-sort-caption" data-sort="BORROWER_ID" onClick={tableSort}>
                    <span>Client ID</span>
                    <div className="table-sort-icons">
                      <ArrowUpIcon
                        className={`icon ${checkIsActive('ASC', 'BORROWER_ID') ? 'active' : ''}`}
                      />
                      <ArrowDownIcon
                        className={`icon ${checkIsActive('DESC', 'BORROWER_ID') ? 'active' : ''}`}
                      />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="table-sort-caption" data-sort="FULL_NAME" onClick={tableSort}>
                    <span>Full Name</span>
                    <div className="table-sort-icons">
                      <ArrowUpIcon
                        className={`icon ${checkIsActive('ASC', 'FULL_NAME') ? 'active' : ''}`}
                      />
                      <ArrowDownIcon
                        className={`icon ${checkIsActive('DESC', 'FULL_NAME') ? 'active' : ''}`}
                      />
                    </div>
                  </div>
                </th>
                <th>Birthday</th>
                <th>Passport</th>
                <th>Phone</th>
                <th>
                  <div className="table-sort-caption" data-sort="IDENTIFICATION" onClick={tableSort}>
                    <span>ID status</span>
                    <div className="table-sort-icons">
                      <ArrowUpIcon
                        className={`icon ${checkIsActive('ASC', 'IDENTIFICATION') ? 'active' : ''}`}
                      />
                      <ArrowDownIcon
                        className={`icon ${checkIsActive('DESC', 'IDENTIFICATION') ? 'active' : ''}`}
                      />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {borrowers.map((borrower) => <TableRow key={borrower.id} borrower={borrower} />)}
            </tbody>
          </Table>
          <PaginationCRM
            currentPageLength={borrowers?.length}
            handlePageChange={handlePageChange}
            page={page}
            size={size}
            totalRecords={totalRecords}
          />
        </div>
      );
    }

    return <h1>No clients</h1>;
  };

  return renderTable();
};

export default ClientAreaTable;
