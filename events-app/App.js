import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.headerText}>hello world</Text>
      <Text style={styles.platformText}>
        Platform: {Platform.OS === 'ios' ? 'iOS' : 'Android'}
      </Text>
      <ScrollView>
        <View style={styles.scrollViewContent}>
          <TextInput
            defaultValue={text}
            onChangeText={txt => setText(txt)}
            style={styles.textInput}
          />
          <Button title="press me" onPress={() => console.log("Hello World!!")} />
          <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log("Hello World 2")}>
            <Text style={styles.touchableText}>Click me too</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerText: {
    fontSize: 32,
  },
  platformText: {
    fontSize: 24,
  },
  scrollViewContent: {
    backgroundColor: 'pink',
    height: 1600,
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10, // Added margin for spacing
  },
  touchableOpacity: {
    padding: 10,
    backgroundColor: 'purple',
    width: 150,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Added margin for spacing
  },
  touchableText: {
    color: 'white', // Set text color for better contrast
  },
});
