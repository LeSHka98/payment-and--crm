// libraries
import React from 'react';
// helpers
import { formatPassport } from 'helpers/formatPassport';
import { formatDate } from 'helpers/dates';

type TableRowType = {
  title: string,
  value: string | number | boolean,
  type?: 'passport' | 'date' | 'passportIsValid' | 'sex';
};

type SexType = {
  WOMAN: string,
  MAN: string,
};
type IsValidPassportType = {
  true: { text: string, class: string },
  false: { text: string, class: string },
};

const sex = {
  WOMAN: 'женский',
  MAN: 'мужской',
};

const isValidPassport = {
  true: { text: 'Да', class: '' },
  false: { text: 'Нет', class: 'invalid' },
};

const TableRow: React.FC<TableRowType> = ({ title, value, type }) => {
  const formatedValue = () => {
    if (!value) {
      return '-';
    }
    switch (type) {
      case 'passport': return formatPassport(value as string);

      case 'date': return formatDate(value as string, 'DD-MM-YYYY');

      case 'sex': return sex[value as keyof SexType];

      case 'passportIsValid': return (typeof (value) === 'boolean')
        ? isValidPassport[value as unknown as keyof IsValidPassportType].text
        : '-';

      default: return value;
    }
  };

  const isValidClass = ((typeof (value) === 'boolean') && type === 'passportIsValid')
    ? `cell ${isValidPassport[value as unknown as keyof IsValidPassportType].class}`
    : 'cell';

  return (
    <tr>
      <td className="first-column cell">{title}</td>
      <td className={isValidClass}>{formatedValue()}</td>
    </tr>
  );
};

export default TableRow;
