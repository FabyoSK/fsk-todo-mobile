import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
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
    </SafeAreaView>
  );
};

export default TodoList;
