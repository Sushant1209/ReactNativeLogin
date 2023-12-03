import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import app from '../../assets/images/app.png';
import Colors from '../../assets/Shared/Colors';
import SignInWithOAuth from '../Components/SignInWithOAuth';


export default function login() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={app} style={styles.appImage} />
      <View style={{ padding: 25, alignItems: 'center', marginTop: -90 }} />
      <Text style={styles.heading}>Job Navigator</Text>
      <SignInWithOAuth/>
    </View>
  );
}

const styles = StyleSheet.create({
  appImage:{
    width:350,
    height:550,
    objectFit:'contain'
  },
  heading:{
    fontSize:40,
    fontWeight:'bold'
  }

})