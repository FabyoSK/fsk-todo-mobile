import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './styles';

const TodoList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
};

export default TodoList;
