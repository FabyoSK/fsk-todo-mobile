import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#30475e',
    padding: 16,
    borderBottomStartRadius: 32,
    borderBottomEndRadius: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    paddingVertical: 8,
    color: '#FFF',
    fontSize: 32,
    maxWidth: 160,
  },
});

export default styles;
