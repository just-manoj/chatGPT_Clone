import { StyleSheet, View } from "react-native";
import NewChatEmptyContent from "./src/components/NewChatEmptyContent";
import InputBox from "./src/components/InputBox";

export default function App() {
  return (
    <View style={styles.container}>
      <NewChatEmptyContent />
      <InputBox />
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
