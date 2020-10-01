import {StyleSheet} from 'react-native';
import {Colors, Metrics} from 'utils/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBg,
  },
  body: {
    paddingTop: Metrics.small,
    paddingHorizontal: Metrics.small,
    flex: 1,
  },
  detailView: {
    marginVertical: Metrics.xl,
    backgroundColor: Colors.white,
  },
  rowView: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.xl,
    alignItems: 'center',
    height: 70,
  },
  divider: {
    width: '100%',
    borderColor: 'lightgray',
    borderWidth: 0.5,
  },
  title: {
    fontSize: Metrics.large,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: Metrics.large,
  },
  bankName: {
    fontSize: Metrics.xl,
    fontWeight: 'bold',
  },
  iconCopy: {
    width: Metrics.xl,
    height: Metrics.xl,
    marginLeft: Metrics.xs,
  },
  iconArrow: {
    fontSize: Metrics.small,
    paddingHorizontal: Metrics.xxs,
  },
  transactionView: {
    padding: Metrics.xl,
  },
  row: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  fullFlex: {
    flex: 1,
  },
  columnView: {
    marginTop: Metrics.large,
    flexDirection: 'column',
  },

  // Modal Sort
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    paddingTop: Metrics.xl,
    paddingHorizontal: Metrics.xl,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
  },
});
