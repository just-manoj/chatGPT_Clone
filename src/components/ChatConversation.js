import { View, StyleSheet, FlatList } from "react-native";

import Chat from "./Chat";

const ChatConversation = (props) => {
  const { chatData } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Chat data={item} />}
      />
    </View>
  );
};

export default ChatConversation;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 30,
  },
});
