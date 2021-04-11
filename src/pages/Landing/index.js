import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Linking} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';

const Landing = () => {
  const {navigate} = useNavigation();

  function handleNavigateToViewTodo() {
    navigate('TodoList');
  }
  function handleOpenGithub() {
    Linking.openURL('https://github.com/FabyoSK/fsk-todo-mobile');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Todo FSK</Text>
      </View>

      <View style={styles.buttonContainer}>
        <RectButton
          style={styles.startButton}
          onPress={handleNavigateToViewTodo}>
          <Text style={styles.buttonText}>View Todos</Text>
        </RectButton>
        <RectButton style={styles.githubButton} onPress={handleOpenGithub}>
          <Text style={styles.buttonText}>GitHub</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default Landing;
