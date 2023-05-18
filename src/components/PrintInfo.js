import { Pressable, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const PrintInfo = (props) => {
  const { infoText, isExample, getRequest, makeARequest } = props || undefined;

  return (
    <Pressable
      disabled={!isExample && true}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={() => {
        getRequest(infoText.slice(1, infoText.length - 1));
        // makeARequest(infoText.slice(1, infoText.length - 1));
      }}
    >
      <Text style={styles.infoText}>
        {infoText}
        {isExample && <AntDesign name="arrowright" size={20} color="white" />}
      </Text>
    </Pressable>
  );
};

export default PrintInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
    padding: 16,
    backgroundColor: "#3E3F4B",
    borderRadius: 8,
  },
  pressed: { backgroundColor: "#202123" },
  infoText: {
    textAlign: "center",
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
});
