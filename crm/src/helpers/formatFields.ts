import { FieldForFormat } from 'constants/graphql';

export const formatTableField = (key: FieldForFormat, value: string) => {
  if (key === 'passport') {
    return value.split(' ').join('');
  }
  if (key === 'birthday') {
    return value.split('.').reverse().join('-');
  }

  return value.replace(/[-\])}[{(]/g, '');
};
