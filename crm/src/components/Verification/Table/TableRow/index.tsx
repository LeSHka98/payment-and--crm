// libraries
import React from 'react';
// api
import { sendRequest } from 'api/requests';
// constants
import { Document } from 'constants/Verification/verification';
import { DATE_FORMATS } from 'constants/dates';
// helpers
import { downloadFile } from 'helpers/documents';
import { formatDate } from 'helpers/dates';

type TableRowType = {
  document: Document,
};

const TableRow: React.FC<TableRowType> = ({ document }) => {
  const downloadDocument = async () => {
    try {
      const { downloadUrl, fileText } = await sendRequest(`/sb-crm-gateway/document/download/${document.documentFileId}`);

      downloadFile(downloadUrl, fileText);
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <tr>
      <td>{document.agreementType}</td>
      <td>{formatDate(document.agreementDate, DATE_FORMATS.fullDate)}</td>
      <td
        className="table-download-cell"
        onClick={downloadDocument}
      >
        Скачать
      </td>
    </tr>
  );
};

export default TableRow;
