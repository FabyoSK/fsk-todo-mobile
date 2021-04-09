import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  title: {
    color: '#dddddd',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700',
  },
  backButton: {
    backgroundColor: '#f05454',
    height: 50,
    width: 50,
  },
  backButtonText: {
    color: '#dddddd',
    textAlign: 'center',
  },

  todoList: {},
  todoItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#30475e',
    padding: 12,
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 12,
  },
  todoItemText: {
    color: '#dddddd',
    fontSize: 20,
    lineHeight: 30,
  },
  todoItemButton: {
    backgroundColor: '#f05454',
    fontSize: 32,
    width: 32,
    height: 32,
  },
  inputGroup: {},
  input: {
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
});

export default styles;
