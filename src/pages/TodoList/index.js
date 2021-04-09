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
    setTodos([...todos, newTodo]);
    setNewTodo('');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Your todo List {newTodo}</Text>
      </View>

      <ScrollView style={styles.todoList}>
        <View style={styles.todoItem}>
          <Text style={styles.todoItemText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quae
            aliquam corrupti placeat.
          </Text>
          <TouchableOpacity style={styles.todoItemButton}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todoItem}>
          <Text style={styles.todoItemText}>
            Todo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            quae aliquam corrupti placeat.
          </Text>
          <TouchableOpacity style={styles.todoItemButton}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todoItem}>
          <Text style={styles.todoItemText}>
            Todo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            quae aliquam corrupti placeat.
          </Text>
          <TouchableOpacity style={styles.todoItemButton}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          placeholder="Add new todo"
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <Text>ADD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TodoList;
