// libraries
import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    paddingTop: 10,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Helvetica',
    marginBottom: 5,
  },
  text: {
    margin: 4,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});
