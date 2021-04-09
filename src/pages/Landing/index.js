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

const Landing = () => {
  const {navigate} = useNavigation();

  function handleNavigateToViewTodo() {
    navigate('TodoList');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.header}>
        <Text style={styles.title}>Todo | FSK</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleNavigateToViewTodo}>
          <Text style={styles.buttonText}>View Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.githubButton}>
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Landing;
