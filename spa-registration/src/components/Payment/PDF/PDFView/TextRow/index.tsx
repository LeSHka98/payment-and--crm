// libraries
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
// styles
import { styles } from 'components/Payment/PDF/PDFView/styles';

type TextRowType = {
  label: string,
  value: string | number,
};

const TableRow: React.FC<TextRowType> = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.text}>{label}</Text>
    <Text style={styles.text}>{value || '-'}</Text>
  </View>
);

export default TableRow;
