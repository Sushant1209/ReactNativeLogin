import { SignedOut, useAuth } from '@clerk/clerk-expo';
import React from 'react'
import { Button, View } from 'react-native';

export default function Home() {
const { isLoaded,signOut } = useAuth();
  return (
    <View>
        <Button title='SignOut' 
        
        onPress={()=>signOut()}></Button>
    </View>
  )
}
