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
    borderRadius: 8,
    justifyContent: 'center',
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
    justifyContent: 'space-between',
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
  inputGroup: {
    flexDirection: 'row',
  },
  input: {
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    width: '80%',
  },
  inputButton: {
    backgroundColor: '#f05454',
    height: 54,
    width: 50,
    borderRadius: 8,
    justifyContent: 'center',
    width: '20%',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  inputButtonText: {
    textAlign: 'center',
  },
});

export default styles;
