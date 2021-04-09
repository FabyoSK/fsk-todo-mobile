import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';

const TodoList = () => {
  const {goBack} = useNavigation();

  function handleGoBack() {
    goBack();
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Your todo List</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default TodoList;
