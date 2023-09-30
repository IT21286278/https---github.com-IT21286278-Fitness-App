import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  View,
  ScrollView,
} from 'react-native';
import React, { useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FinessItems } from '../Context';

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completedWorkouts, setCompletedWorkouts } = useContext(FinessItems);
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: 'white' }}
      >
        <Image
          source={{ uri: route.params.image }}
          style={{ width: '100%', height: 170 }}
        />

        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', top: 10, left: 10 }}
          name="arrow-back-outline"
          size={28}
          color="white"
        />

        {route.params.excersises.map((item, index) => (
          <Pressable
            key={index}
            style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.image }}
            />

            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 17, width: 170 }}>
                {item.name}
              </Text>
              <Text style={{ marginTop: 4, color: 'gray', fontSize: 18 }}>
                X{item.sets}
              </Text>
            </View>

            {completedWorkouts.includes(item.name) ? (
              <Ionicons
                style={{ marginLeft: 'auto', marginRight: 10, marginLeft: 40 }}
                name="checkmark-circle-outline"
                size={28}
                color="green"
              />
            ) : null}
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        onPress={() => {
          navigation.navigate('Fit', { excercises: route.params.excersises });
          setCompletedWorkouts([]);
        }}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginVertical: 20,
          width: 120,
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 15,
            fontWeight: '600',
          }}
        >
          START
        </Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});
