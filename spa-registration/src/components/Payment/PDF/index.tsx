// libraries
import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';
// components
import PDFView from 'components/Payment/PDF/PDFView';
// constants
import { CreditDetailsType } from 'components/Credit/Calculator/config';
import { PDF_DOWNLOAD_LINK } from 'constants/pdf';
import { ROUTER_PATHS } from 'constants/router';
// helpers
import { getFromLocalStorage } from 'helpers/localStorage';
// hooks
import { useAuth } from 'hooks/useAuthProvider';

const shiftIndex = 1;

const PDFComponent = () => {
  const { userEmail } = useAuth();
  const allCredits: Array<CreditDetailsType> = getFromLocalStorage(userEmail);
  const currentCredit: CreditDetailsType = allCredits[allCredits.length - shiftIndex];

  return (
    <>
      <PDFDownloadLink
        className="button payment-button"
        document={<PDFView creditData={currentCredit} />}
        fileName="invoice.pdf"
      >
        {({ loading }) => (loading ? PDF_DOWNLOAD_LINK.loading : PDF_DOWNLOAD_LINK.ready)}
      </PDFDownloadLink>
      <PDFViewer className="pdf-viewer">
        <PDFView creditData={currentCredit} />
      </PDFViewer>
      <Link className="button payment-button" to={ROUTER_PATHS.creditList}>To Credits</Link>
    </>
  );
};

export default PDFComponent;
