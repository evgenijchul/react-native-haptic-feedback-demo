import React from "react";
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { trigger, HapticFeedbackTypes } from "react-native-haptic-feedback";

const hapticTypesArr = Object.values(HapticFeedbackTypes).sort((a, b) =>
  a.localeCompare(b)
);
const options = {
  enableVibrateFallback: false,
  ignoreAndroidSystemSettings: false,
};
const LINK_TO_METHODS_OVERVIEW =
  "https://github.com/mkuczera/react-native-haptic-feedback/tree/master?tab=readme-ov-file#method-overview";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
        <Text>Link to types (=methods) overview:</Text>
        <Text
          onPress={() => {
            Linking.openURL(LINK_TO_METHODS_OVERVIEW);
          }}
          style={{ color: "blue" }}
        >
          {LINK_TO_METHODS_OVERVIEW}
        </Text>
        <View style={styles.buttonsBlock}>
          {hapticTypesArr.map((hapticType, index) => (
            <TouchableOpacity
              key={`btn-${index}`}
              onPress={() => trigger(hapticType, options)}
              style={styles.buttonStyle}
            >
              <Text>{hapticType}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    maxWidth: 500,
  },
  buttonsBlock: {
    marginVertical: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonStyle: {
    margin: 5,
    padding: 10,
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
});
