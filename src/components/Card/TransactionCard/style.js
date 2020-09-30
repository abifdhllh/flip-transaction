import {StyleSheet} from 'react-native';
import {Metrics, Colors} from 'utils/Theme';

export default StyleSheet.create({
  touchable: {
    width: '100%'
  },
  container: {
    width: '100%',
    borderRadius: Metrics.xs,
    backgroundColor: Colors.white,
    flexDirection: 'row',
  },
  lineView: {
    borderTopLeftRadius: Metrics.xs,
    borderBottomLeftRadius: Metrics.xs,
    width: Metrics.xs,
  },
  body: {
    paddingLeft: Metrics.medium,
    paddingVertical: Metrics.medium,
    paddingRight: Metrics.xs,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullFlex: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: Metrics.large,
  },
  desc: {
    fontSize: Metrics.large,
  },
  iconArrow: {
    fontSize: Metrics.small,
    paddingHorizontal: Metrics.xxs,
  },
  iconDot: {
    fontSize: 8,
    paddingHorizontal: Metrics.xxs,
  },
  statusView: {
    paddingVertical: Metrics.xxs,
    paddingHorizontal: Metrics.xs,
    borderWidth: 1,
    borderRadius: Metrics.xxs,
  },
  statusText: {
    fontSize: Metrics.medium,
    fontWeight: 'bold',
  },
  divider: {
    marginBottom: Metrics.small,
  }
});
