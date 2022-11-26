// constants
import {
  FilterFieldsType, FilterFullFields, SortFieldsType, PageParams, DEFAULT_PAGE_SIZE, DEFAULT_PAGE_NUMBER,
} from 'constants/index';
// helpers
import { formVariablesArray } from 'helpers/formVariablesArray';

const shiftIndex = 1;

export default function useFilter(getData: (params: FilterFullFields) => void) {
  const applyFilter = (values: FilterFieldsType): void => {
    const variablesArray = formVariablesArray(values);

    getData({ variablesArray });
  };

  const resetFilter = (values: FilterFieldsType): void => {
    const variablesArray = formVariablesArray(values);

    getData({ variablesArray });
  };

  const handlePageChange = (pageParams: PageParams): void => {
    const pageQueryParams = {
      limit: pageParams?.size || DEFAULT_PAGE_SIZE,
      offset: ((pageParams?.size || DEFAULT_PAGE_SIZE) * ((pageParams?.page || DEFAULT_PAGE_NUMBER) - shiftIndex)),
    };

    getData({ pageQueryParams });
  };

  const handleSort = (sortParams: SortFieldsType): void => getData({ sortParams });

  return {
    applyFilter,
    resetFilter,
    handlePageChange,
    handleSort,
  };
}
