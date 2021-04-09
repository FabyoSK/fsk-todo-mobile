import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Todo | FSK</Text>
      </View>
      <Text style={styles.slogan}>Your Todo app</Text>
      <View>
        <TouchableOpacity>
          <Text style={styles.title}>sss</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  header: {
    backgroundColor: '#f05454',
    padding: 100,
    borderBottomStartRadius: 32,
    borderBottomEndRadius: 32,
  },
  title: {
    color: '#dddddd',
    fontSize: 32,
    textAlign: 'center',
  },
  slogan: {
    color: '#dddddd',
    fontSize: 20,
    textAlign: 'center',
  },
  startButton: {},
  startButtonText: {},
});
export default App;
