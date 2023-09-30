import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FinessItems } from '../Context';

const FitScreen = () => {
  const route = useRoute();
  const [index, setIndex] = useState(0);
  const excercises = route.params.excercises;
  const currentExcercise = excercises[index];
  const navigation = useNavigation();
  const {
    completedWorkouts,
    setCompletedWorkouts,
    Workout,
    setWorkout,
    caloriesBurnt,
    setCaloriesBurnt,
    minutesWorkedOut,
    setMinutesWorkedOut,
  } = useContext(FinessItems);
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

      {index + 1 >= excercises.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}
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
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate('Rest');
            setCompletedWorkouts([...completedWorkouts, currentExcercise.name]);
            setWorkout(Workout + 1);
            setMinutesWorkedOut(minutesWorkedOut + 2.5);
            setCaloriesBurnt(caloriesBurnt + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
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
      )}

      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 50,
        }}
      >
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate('Rest');

            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            width: 100,
          }}
        >
          <Text
            style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}
          >
            PREV
          </Text>
        </Pressable>

        {index + 1 >= excercises.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{
              backgroundColor: 'green',
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              SKIP
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate('Rest');

              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{
              backgroundColor: 'green',
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              SKIP
            </Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});
