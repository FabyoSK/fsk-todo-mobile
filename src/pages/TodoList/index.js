import {useIsFocused} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
//import AsyncStorage from '@react-native-community/async-storage';
import {v4} from 'uuid';

import PageHeader from '../../components/PageHeader';

import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

import styles from './styles';

import {firebase} from '../../firebase/config';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const todoRef = firebase.firestore().collection('todos');

  useEffect(() => {
    todoRef.orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
      const newTodos = [];

      querySnapshot.forEach(todo => {
        const newTodo = todo.data();
        newTodo.fire_id = todo.id;

        newTodos.push(newTodo);
      });

      setTodos(newTodos);
    });
  }, []);

  function handleAddTodo() {
    if (newTodo && newTodo.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const todo = {
        id: v4(),
        content: newTodo,
        createdAt: timestamp,
      };

      todoRef.add(todo).then(data => {
        setTodos([...todos, todo]);
        setNewTodo('');
      });
    }
  }
  async function handleDeleteTodo(id) {
    const res = await todoRef.doc(id).delete();

    filterTodos = todos.filter(todo => todo.fire_id !== id);
    setTodos(filterTodos);
  }

  const TodoItem = ({todo}) => {
    return (
      <View style={styles.todoItem}>
        <Text style={styles.todoItemText}>{todo.content}</Text>
        <BorderlessButton
          style={styles.todoItemButton}
          onPress={() => handleDeleteTodo(todo.fire_id)}>
          <Icon name="trash" size={16} color="#f05454" />
        </BorderlessButton>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Your Todos" />
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
          placeholderTextColor="#c1bccc"
        />
        <RectButton style={styles.inputButton} onPress={handleAddTodo}>
          <Icon name="check-square" size={16} color="#FFFFFF" />
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default TodoList;
