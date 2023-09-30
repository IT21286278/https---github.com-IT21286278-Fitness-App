import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
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
              <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
                {item.name}
              </Text>
              <Text style={{ marginTop: 4, color: 'gray', fontSize: 18 }}>
                X{item.sets}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
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
