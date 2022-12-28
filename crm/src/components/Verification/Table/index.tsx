// libraries
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Spinner, Table } from 'reactstrap';
// components
import TableRow from 'components/Verification/Table/TableRow';
// constants
import { GET_VERIFICATION_DATA } from 'api/GraphQL/quaries';
import { VERIFICATION_TABLE_HEAD, Document, CrmGatewayQuery } from 'constants/Verification/verification';

const VerificationTable = () => {
  const borrowerId = 19890;
  const { data, loading, error } = useQuery<CrmGatewayQuery>(GET_VERIFICATION_DATA, { variables: { borrowerId } });
  const [documents, setDocuments] = useState<Array<Document>>();

  useEffect(() => {
    if (data) {
      setDocuments(data.mainPage.documentWidget.documents);
    }
  }, [data]);

  if (loading) {
    return <Spinner className="verification-loader" color="dark" />;
  }

  if (error) {
    return <h1 className="error">Error</h1>;
  }

  const renderTable = () => {
    if (documents?.length) {
      return (
        <Table bordered className="custom-wrapper">
          <thead>
            <tr className="table-light">
              {VERIFICATION_TABLE_HEAD.map((elem) => <th key={elem}>{elem}</th>)}
            </tr>
          </thead>
          <tbody>
            {documents.map((document) => <TableRow key={document.agreementType} document={document} />)}
          </tbody>
        </Table>
      );
    }

    return <h2>User has no documents</h2>;
  };

  return renderTable();
};

export default VerificationTable;
