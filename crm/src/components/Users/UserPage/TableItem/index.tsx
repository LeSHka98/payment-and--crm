// libraries
import React from 'react';

type TableItemType = {
  text: string,
  value: string | number,
};

const TableItem: React.FC<TableItemType> = ({ text, value }) => (
  <tr>
    <td className="first-column cell">{text}</td>
    <td className="cell">{value || '-'}</td>
  </tr>
);

export default TableItem;
