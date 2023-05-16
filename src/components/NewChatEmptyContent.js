import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import PrintInfo from "./PrintInfo";

const NewChatEmptyContent = () => {
  const exmplesInfo = [
    `"Explain quantum computing in simple terms"`,
    `"Got any creative ideas for a 10 year old’s birthday?"`,
    `"How do I make an HTTP request in Javascript?"`,
  ];

  const capabilitiesInfo = [
    "Remembers what user said earlier in the conversation",
    "Allows user to provide follow-up corrections",
    "Trained to decline inappropriate requests",
  ];

  const limitationsInfo = [
    "May occasionally generate incorrect information",
    "May occasionally produce harmful instructions or biased content",
    "Limited knowledge of world and events after 2021",
  ];

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.chatgptText}>ChatGPT</Text>
        <View style={styles.messageContainer}>
          <View style={styles.innerMessageContainer}>
            <Ionicons
              name="sunny-outline"
              size={33}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.exmplesText}>Examples</Text>
          </View>
          {exmplesInfo.map((example, index) => (
            <PrintInfo key={index} infoText={example} isExample />
          ))}
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.innerMessageContainer}>
            <Ionicons
              name="flash-outline"
              size={33}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.exmplesText}>Capabilities</Text>
          </View>
          {capabilitiesInfo.map((example, index) => (
            <PrintInfo key={index} infoText={example} />
          ))}
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.innerMessageContainer}>
            <Ionicons
              name="warning-outline"
              size={33}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.exmplesText}>Capabilities</Text>
          </View>
          {limitationsInfo.map((example, index) => (
            <PrintInfo key={index} infoText={example} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default NewChatEmptyContent;

const styles = StyleSheet.create({
  chatgptText: {
    marginBottom: 30,
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  pressed: { backgroundColor: "#202123" },
  messageContainer: {
    marginBottom: 15,
    width: "90%",
  },
  innerMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  exmplesText: {
    fontSize: 23,
    color: "white",
    fontWeight: "600",
  },
  icon: {
    marginRight: 10,
  },
});
