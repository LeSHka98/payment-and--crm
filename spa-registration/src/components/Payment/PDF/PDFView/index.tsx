// libraries
import React from 'react';
import {
  Page, Text, View, Document,
} from '@react-pdf/renderer';
// components
import TableRow from 'components/Payment/PDF/PDFView/TextRow';
// styles
import { styles } from 'components/Payment/PDF/PDFView/styles';
// types
import { CreditDetailsType } from 'components/Credit/Calculator/config';

type PDFViewType = {
  creditData: CreditDetailsType,
};

const PDFView: React.FC<PDFViewType> = ({ creditData }) => {
  const { cardFormData } = creditData;

  return (
    <Document>
      <Page size="A5" style={styles.page}>
        <View>
          <Text style={styles.title}>Payment Data</Text>
          <TableRow label="Name:" value={cardFormData.name} />
          <TableRow label="Email:" value={cardFormData.email} />
          <TableRow label="Phone:" value={cardFormData.phone} />
          <TableRow label="Credit amount:" value={creditData.amount} />
          <TableRow label="Brand:" value={cardFormData.brand} />
          <TableRow label="County:" value={cardFormData.country} />
          <TableRow label="Expiry date:" value={`${cardFormData.exp_month}/${cardFormData.exp_year}`} />
          <TableRow label="Funding:" value={cardFormData.funding} />
          <TableRow label="Last 4 symbols:" value={cardFormData.lastSymbols} />
          <TableRow label="Payment time:" value={cardFormData.paymentTime} />
          <TableRow label="Card name:" value={cardFormData.cardName} />
        </View>
      </Page>
    </Document>
  );
};

export default PDFView;
