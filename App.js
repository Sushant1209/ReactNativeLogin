import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login.js';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import SignInWithOAuth from './App/Components/SignInWithOAuth.js';
import Home from './App/Screens/Home.js';

export default function App() {
  return (
    <ClerkProvider publishableKey={"pk_test_cG9zaXRpdmUtbWFrby00OS5jbGVyay5hY2NvdW50cy5kZXYk"}>
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <Home/>
        </SignedIn>
        <SignedOut>
        <Login/>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center' 
  },
});
