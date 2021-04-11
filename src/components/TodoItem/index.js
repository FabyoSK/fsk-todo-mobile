import React from 'react';
import {View, Text} from 'react-native';

import {BorderlessButton} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

const TodoItem = ({todo}) => {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoItemText}>{todo.content}</Text>
      <BorderlessButton
        style={styles.todoItemButton}
        onPress={() => this.handleDeleteTodo(todo.id)}>
        <Icon name="check-square" size={16} color="#f05454" />
      </BorderlessButton>
    </View>
  );
};

export default TodoItem;
