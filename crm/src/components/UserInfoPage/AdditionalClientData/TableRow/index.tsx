// libraries
import React from 'react';

type TableRowType = {
  title: string,
  value: boolean,
};

type AdditionalDataValueType = { true: string, false: string };

const TableRow: React.FC<TableRowType> = ({ title, value }) => {
  const additionalDataValue = { true: 'Является', false: 'Не является' };

  const getValue = (data: boolean) => (typeof (data) === 'boolean'
    ? additionalDataValue[data as unknown as keyof AdditionalDataValueType]
    : '-');

  return (
    <tr>
      <td className="first-column cell">{title}</td>
      <td className="cell">{getValue(value)}</td>
    </tr>
  );
};

export default TableRow;
