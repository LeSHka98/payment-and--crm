// constants
import { APPROPRIATE_FIELDS, Entry, FieldForFormat } from 'constants/graphql';
import { FilterFieldsType } from 'constants/index';
// helpers
import { formatTableField } from 'helpers/formatFields';

export const formVariablesArray = (values: FilterFieldsType) => {
  const varsArray:Entry[] = [];

  Object.entries(values).forEach(([key, val]) => {
    if (val) {
      varsArray.push({
        type: APPROPRIATE_FIELDS[key as keyof FilterFieldsType],
        value: (key === 'passport' || key === 'birthday' || key === 'phone')
          ? formatTableField(key as FieldForFormat, val)
          : val,
      });
    }
  });

  return varsArray;
};
