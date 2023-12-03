import { StyleSheet, View } from "react-native";
import { useState } from "react";

import NewChatEmptyContent from "./src/components/NewChatEmptyContent";
import ChatConversation from "./src/components/ChatConversation";
import InputBox from "./src/components/InputBox";
import APIRequest from "./src/util/APICall";
import Header from "./src/components/Header";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [chatData, setChatData] = useState([]);
  const [userRequestInput, setUserRequestInput] = useState();

  const getRequest = (req) => {
    setUserRequestInput(req);
  };

  const emptyConversation = () => {
    setChatData([]);
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
      <Header emptyConversation={emptyConversation} />
      {chatData.length < 1 ? (
        <NewChatEmptyContent getRequest={getRequest} />
      ) : (
        <ChatConversation chatData={chatData} />
      )}
      <InputBox
        getRequest={getRequest}
        makeARequest={makeARequest}
        userRequestInput={userRequestInput}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343541",
    paddingTop: 10,
  },
});
