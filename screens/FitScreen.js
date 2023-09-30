import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';

const FitScreen = () => {
  const route = useRoute();
  const [index, setIndex] = useState(0);
  const excercises = route.params.excercises;
  const currentExcercise = excercises[index];

  return (
    <SafeAreaView>
      <Image
        style={{ width: '100%', height: 370 }}
        source={{ uri: currentExcercise.image }}
      />
      <Text
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 30,
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        {currentExcercise.name}
      </Text>

      <Text
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 30,
          fontSize: 38,
          fontWeight: 'bold',
        }}
      >
        X{currentExcercise.sets}
      </Text>
      <Pressable
        style={{
          backgroundColor: 'blue',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 30,
          borderRadius: 20,
          padding: 10,
          width: 150,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white',
          }}
        >
          DONE
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});
