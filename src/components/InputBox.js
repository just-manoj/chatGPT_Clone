import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const InputBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outterInputContainer}>
        <View style={styles.innerInputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Send a message."
            placeholderTextColor={"#8e8ea0"}
          />
          <Pressable>
            <Feather
              name="send"
              size={19}
              color="#8E8EA0"
              style={styles.refreshIcon}
            />
          </Pressable>
        </View>
        <Pressable>
          <Feather
            name="refresh-ccw"
            size={19}
            color="white"
            style={styles.refreshIcon}
          />
        </Pressable>
      </View>
      <Text style={styles.footerInfo}>
        Free Research Preview. ChatGPT may produce inaccurate information about
        people, places, or facts.
        <Text style={[styles.textLink]}>ChatGPT May 12 Version</Text>
      </Text>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    height: 135,
    borderTopColor: "#3E3F4B",
    borderTopWidth: 1.5,
    paddingTop: 10,
  },
  outterInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  refreshIcon: {
    marginHorizontal: 9,
  },
  innerInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    height: 50,
    borderRadius: 7,
    paddingLeft: 7,
    backgroundColor: "#40414F",
  },
  inputText: {
    color: "#8e8ea0",
    fontSize: 19,
  },
  footerInfo: {
    textAlign: "center",
    paddingTop: 10,
    color: "white",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
  textLink: {
    textDecorationLine: "underline",
  },
});
