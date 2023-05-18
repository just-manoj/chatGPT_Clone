import { View, StyleSheet, FlatList } from "react-native";
import { useRef } from "react";

import Chat from "./Chat";

const ChatConversation = (props) => {
  const { chatData } = props;
  const yourRef = useRef(null);
  return (
    <View style={styles.container}>
      <FlatList
        ref={yourRef}
        onContentSizeChange={() => yourRef.current.scrollToEnd()}
        onLayout={() => yourRef.current.scrollToEnd()}
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
  },
});
