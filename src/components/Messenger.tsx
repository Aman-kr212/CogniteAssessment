import React from "react";
import { FriendList } from "./FriendList";
import { Chat } from "./Chat";
import { Message } from "../interfaces";
import { FRIEND_LIST, NO_FRIEND_SELECTED_MESSAGE } from "../constants";

export const Messenger: React.FC<{}> = () => {
  const [selectedFriendId, setSelectedFriendId] = React.useState<string>("");
  const [messages, setMessages] = React.useState<Map<string, Array<Message>>>(
    new Map()
  );

  const onFriendSelected = (id: string) => {
    setSelectedFriendId(id);
  };

  const onMessageUpdate = (content: string) => {
    const newMessage: Message = {
      id: Date.now(),
      content,
      time: new Date(),
    };
    const updatedMessages: Map<string, Array<Message>> = new Map(messages);
    const messageList: Array<Message> =
      updatedMessages.get(selectedFriendId) || [];
    updatedMessages.set(selectedFriendId, [...messageList, newMessage]);
    setMessages(updatedMessages);
  };

  const getMessages = (): Array<Message> => {
    return messages.get(selectedFriendId) || [];
  };

  return (
    <div>
      <FriendList
        friends={FRIEND_LIST}
        onSelected={onFriendSelected}
        selectedFriendId={selectedFriendId}
      />
      {selectedFriendId ? (
        <Chat messages={getMessages()} onMessageUpdate={onMessageUpdate} />
      ) : (
        <div>{NO_FRIEND_SELECTED_MESSAGE}</div>
      )}
    </div>
  );
};
