import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NewChatEmptyContent from "./src/components/NewChatEmptyContent";

export default function App() {
  return (
    <View style={styles.container}>
      <NewChatEmptyContent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343541",
    paddingTop: 20,
  },
});
