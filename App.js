import { StyleSheet, View } from "react-native";
import { useState } from "react";

import NewChatEmptyContent from "./src/components/NewChatEmptyContent";
import ChatConversation from "./src/components/ChatConversation";
import InputBox from "./src/components/InputBox";
import APIRequest from "./src/util/APICall";

export default function App() {
  const [chatData, setChatData] = useState([]);
  const [userRequestInput, setUserRequestInput] = useState();

  const getRequest = (req) => {
    setUserRequestInput(req);
  };

  const makeARequest = async () => {
    const queryResult = await APIRequest(userRequestInput);
    setChatData((chatDatas) => {
      return [...chatDatas, queryResult];
    });
    setUserRequestInput("");
  };

  return (
    <View style={styles.container}>
      {chatData.length < 1 ? (
        <NewChatEmptyContent />
      ) : (
        <ChatConversation chatData={chatData} />
      )}
      <InputBox
        getRequest={getRequest}
        makeARequest={makeARequest}
        userRequestInput={userRequestInput}
      />
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
