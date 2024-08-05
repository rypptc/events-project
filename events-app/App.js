import { StatusBar } from 'expo-status-bar';
import {useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput } from 'react-native';

export default function App() {
	const [text, setText] = useState("")
  return (
    <SafeAreaView>
      <Text style={{fontSize:32}}>hello world</Text>
      <Text style={{fontSize:24}}>Platform: {Platform.OS === 'ios' ? 'iOS' : 'Android'}</Text>
      <ScrollView>
        <View style={{backgroundColor: 'pink', height: 1600, padding: 20}}>
          <TextInput 
	          defaultValue={text}
	          onChangeText={txt=>setText(txt)}
          />
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
