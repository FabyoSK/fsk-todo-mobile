import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  header: {
    backgroundColor: '#f05454',
    paddingVertical: 150,
    borderBottomStartRadius: 32,
    borderBottomEndRadius: 32,
    marginBottom: 32,
  },
  title: {
    color: '#dddddd',
    fontSize: 52,
    textAlign: 'center',
    fontWeight: '700',
  },

  startButton: {
    backgroundColor: '#3fad27',
    marginVertical: 12,
    marginHorizontal: 32,
    borderRadius: 12,
    padding: 22,
  },
  githubButton: {
    backgroundColor: '#30475e',
    marginVertical: 12,
    marginHorizontal: 32,
    borderRadius: 12,
    padding: 22,
  },
  buttonText: {
    color: '#dddddd',
    fontSize: 32,
    textAlign: 'center',
  },
});

export default styles;
