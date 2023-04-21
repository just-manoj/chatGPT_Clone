import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import PrintInfo from "./PrintInfo";

const NewChatEmptyContent = () => {
  const exmplesInfo = [
    `"Explain quantum computing in simple terms"`,
    `"Got any creative ideas for a 10 year old’s birthday?"`,
    `"How do I make an HTTP request in Javascript?"`,
  ];
  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.chatgptText}>ChatGPT</Text>
        <View style={styles.exmplesContainer}>
          <Ionicons name="sunny-outline" size={33} color="white" />
          <Text style={styles.exmplesText}>Examples</Text>
        </View>
        {exmplesInfo.map((example, index) => (
          <PrintInfo key={index} infoText={example} isExample />
        ))}
      </View>
    </ScrollView>
  );
};

export default NewChatEmptyContent;

const styles = StyleSheet.create({
  chatgptText: {
    marginBottom: 30,
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  exmplesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  exmplesText: {
    fontSize: 24,
    color: "white",
  },
});
