import { View, Text, Image, StyleSheet } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

const Chat = (props) => {
  const { req, res } = props.data;

  return (
    <View>
      <View style={styles.chatContainer}>
        <Image
          source={require("../../assets/img/Chat-gpt-logo.jpg")}
          style={styles.logo}
        />
        <View style={styles.full}>
          <Text style={styles.text}>{req}</Text>
          <Feather name="edit" size={20} color="#777a88" style={styles.icon} />
        </View>
      </View>
      <View style={[styles.chatContainer, { backgroundColor: "#474954" }]}>
        <Image
          source={require("../../assets/img/Profile.jpg")}
          style={styles.logo}
        />
        <View style={styles.full}>
          <Text style={styles.text}>{res}</Text>
          <View
            style={{
              alignSelf: "flex-end",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Feather
              name="clipboard"
              size={20}
              color="#777a88"
              style={styles.icon2}
            />
            <AntDesign
              name="like2"
              size={20}
              color="#777a88"
              style={styles.icon2}
            />
            <AntDesign
              name="dislike2"
              size={20}
              color="#777a88"
              style={styles.icon2}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  full: { flex: 1 },
  chatContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  logo: {
    height: 30,
    width: 30,
    borderRadius: 2,
    marginRight: 15,
  },
  text: {
    marginRight: 60,
    marginBottom: 14,
    color: "white",
    fontSize: 18,
    textAlign: "justify",
    lineHeight: 23,
  },
  icon: {
    alignSelf: "flex-end",
    marginRight: 10,
  },
  icon2: {
    marginHorizontal: 7,
  },
});
