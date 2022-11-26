// libraries
import React, { useCallback, useState } from 'react';
import { useQuery } from '@apollo/client';
// api
import { GET_USERS } from 'api/GraphQL/quaries';
// components
import Filters from 'components/ClientArea/Filters';
import ClientAreaTable from 'components/ClientArea/Table';
// constants
import { Data, UsersQuery } from 'constants/graphql';
import { FilterFullFields, DEFAULT_QUERY_PARAMETERS } from 'constants/index';
// hooks
import useFilter from 'hooks/useFilter';

const shiftIndex = 1;

const ClientArea = () => {
  const [queryVariables, setQueryVariables] = useState<UsersQuery>(DEFAULT_QUERY_PARAMETERS);
  const { data, loading, error } = useQuery<Data>(GET_USERS, { variables: queryVariables });

  const getUsersCallback = useCallback(({
    pageQueryParams,
    sortParams,
    variablesArray,
  }: FilterFullFields) => {
    const queryParams = {
      limit: pageQueryParams?.limit ?? queryVariables.limit,
      offset: pageQueryParams?.offset ?? queryVariables.offset,
      entries: variablesArray || queryVariables.entries,
      sort: variablesArray ? null : (sortParams || queryVariables.sort),
    };

    setQueryVariables(queryParams);
  }, [queryVariables]);

  const {
    applyFilter, resetFilter, handlePageChange, handleSort,
  } = useFilter(getUsersCallback);

  return (
    <div className="client-area">
      <h1>Clients</h1>
      <Filters applyFilter={applyFilter} resetFilter={resetFilter} />
      <ClientAreaTable
        data={data}
        error={error}
        handlePageChange={handlePageChange}
        handleSort={handleSort}
        loading={loading}
        page={queryVariables.offset / queryVariables.limit + shiftIndex}
        serverSort={queryVariables.sort}
        size={queryVariables.limit}
      />
    </div>
  );
};

export default ClientArea;
