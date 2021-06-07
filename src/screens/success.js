import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const Success = ({token, onLogout}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{margin: 10}}>Token: {token}</Text>
      <TouchableOpacity
        style={[styles.btn, {marginTop: 10}]}
        onPress={() => onLogout()}>
        <Text style={{color: 'white', textAlign: 'center'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    backgroundColor: 'blue',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
