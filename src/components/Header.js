import { View, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const Header = (props) => {
  const { emptyConversation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Feather name="menu" size={27} color="white" />
        <Text style={styles.title}>New chat</Text>
        <Pressable onPress={emptyConversation}>
          <Feather name="plus" size={27} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomColor: "#777a88",
    borderBottomWidth: 0.5,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  title: {
    fontSize: 22,
    color: "white",
    fontWeight: "500",
  },
});
