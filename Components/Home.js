import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>This is home</Text>
      <Button
        onPress={(e) => alert("Hello")}
        title="Press Me"
        color="#841584"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </View>
  );
}
