import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const PrintInfo = (props) => {
  const { infoText, isExample } = props;
  return (
    <View style={style.container}>
      <Text style={style.infoText}>
        {infoText}
        {isExample && (
          <AntDesign
            name="arrowright"
            size={20}
            color="white"
            style={{ marginLeft: 5, alignSelf: "flex-end" }}
          />
        )}
      </Text>
    </View>
  );
};

export default PrintInfo;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
    width: "92%",
    padding: 15,
    backgroundColor: "#3E3F4B",
    borderRadius: 8,
  },
  infoText: {
    textAlign: "center",
    color: "white",
    fontSize: 17,
    fontWeight: "400",
  },
});
