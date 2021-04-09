import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './styles';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const {goBack} = useNavigation();

  function handleGoBack() {
    goBack();
  }

  function handleAddTodo() {
    if (!newTodo) {
      return;
    }
    const todo = {
      id: Math.random(),
      content: newTodo,
    };
    setTodos([...todos, todo]);
    setNewTodo('');
  }
  function handleDeleteTodo(id) {
    const filtredTodo = todos.filter(todo => todo.id !== id);

    setTodos(filtredTodo);
  }
  const TodoItem = ({todo}) => {
    return (
      <View style={styles.todoItem}>
        <Text style={styles.todoItemText}>{todo.content}</Text>
        <TouchableOpacity
          style={styles.todoItemButton}
          onPress={() => handleDeleteTodo(todo.id)}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const showNoTodos = () => {
    return <Text style={styles.title}>GG</Text>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleArea}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Your todo List</Text>
      </View>

      <ScrollView style={styles.todoList}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ScrollView>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          placeholder="Add new todo"
        />
        <TouchableOpacity style={styles.inputButton} onPress={handleAddTodo}>
          <Text style={styles.inputButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TodoList;
