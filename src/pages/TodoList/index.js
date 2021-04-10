import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
// import {firebase} from '../../firebase/config';

import {BorderlessButton} from 'react-native-gesture-handler';

import styles from './styles';
import {v4} from 'uuid';
import PageHeader from '../../components/PageHeader';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // const todoRef = firebase.firestore().collection('todos');

  const {goBack} = useNavigation();

  // useEffect(() => {
  //   todoRef.onSnapshot(querySnapshot => {
  //     const newTodos = [];

  //     querySnapshot.forEach(todo => {
  //       const newTodo = todo.data();
  //       newTodo.id = todo.id;

  //       newTodos.push(newTodo);
  //       console.log(newTodo);
  //     });

  //     setTodos(newTodos);
  //   });
  // }, []);

  function handleGoBack() {
    goBack();
  }

  function handleAddTodo() {
    if (newTodo && newTodo.length > 0) {
      const todo = {
        id: v4(),
        content: newTodo,
      };

      todoRef
        .add(todo)
        .then(data => {
          setTodos([...todos, todo]);
          setNewTodo('');
        })
        .catch(err => {
          alert(err);
        });
    }
  }
  async function handleDeleteTodo(id) {
    const res = await todoRef.doc(id).delete();
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

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Your Todos" />

      <ScrollView style={styles.todoList}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        <TodoItem
          key={1}
          todo={{
            content: 'lorem sadha asduba sdqauiwb asdiubq wdaudwa dawud ',
          }}
        />
      </ScrollView>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          placeholder="Add new todo"
          placeholderTextColor="#c1bccc"
        />
        <TouchableOpacity style={styles.inputButton} onPress={handleAddTodo}>
          <Text style={styles.inputButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TodoList;
