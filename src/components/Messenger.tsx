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
  const [draftMessage, setDraftMessage] = React.useState<string>("");

  const onFriendSelected = (id: string) => {
    if (selectedFriendId && draftMessage) {
      onMessageUpdate(draftMessage, true);
      setDraftMessage("");
    }
    setSelectedFriendId(id);
  };

  const onDraftMessageChange = (message: string): void => {
    setDraftMessage(message);
  };

  const onMessageUpdate = (content: string, isDraft?: boolean) => {
    const newMessage: Message = {
      id: Date.now(),
      content,
      time: new Date(),
      isDraft: !!isDraft,
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

  const getDraftMessage = (): string => {
    const friendMesssges: Array<Message> = messages.get(selectedFriendId) || [];
    if (friendMesssges.length) {
      const msg: Message = friendMesssges[friendMesssges.length - 1];
      return msg.isDraft ? msg.content : "";
    }
    return "";
  };

  return (
    <div>
      <FriendList
        friends={FRIEND_LIST}
        onSelected={onFriendSelected}
        selectedFriendId={selectedFriendId}
      />
      {selectedFriendId ? (
        <Chat
          key={selectedFriendId}
          messages={getMessages()}
          onMessageUpdate={onMessageUpdate}
          onDraftMessageUpdate={onDraftMessageChange}
          draftMessage={getDraftMessage()}
        />
      ) : (
        <div>{NO_FRIEND_SELECTED_MESSAGE}</div>
      )}
    </div>
  );
};
