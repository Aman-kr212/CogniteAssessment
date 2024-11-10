import React from "react";
import { MessageInput } from "./MessageInput";
import { IChatProps, Message } from "../interfaces";
import { NO_MESSAGE_FOUND, CHAT_HEADER } from "../constants";

export const Chat: React.FC<IChatProps> = (props: IChatProps) => {
  return (
    <>
      <h2>{CHAT_HEADER}</h2>
      {props.messages.length === 0 ? (
        <p>{NO_MESSAGE_FOUND}</p>
      ) : (
        <div className="chat-window">
          {props.messages.map((msg: Message) => (
            <div key={msg.id} className="message">
              <span className="content">{msg.content}</span>
              <span className="timestamp">{msg.time.toLocaleTimeString()}</span>
            </div>
          ))}
        </div>
      )}

      <MessageInput onSend={props.onMessageUpdate} />
    </>
  );
};
