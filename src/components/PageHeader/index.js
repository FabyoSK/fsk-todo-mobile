import React from 'react';
import {View, Text, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {BorderlessButton} from 'react-native-gesture-handler';

import backIcon from '../../assets/back.png';
import styles from './styles';

const PageHeader = ({title}) => {
  const {goBack} = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <View>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} />
        </BorderlessButton>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default PageHeader;
