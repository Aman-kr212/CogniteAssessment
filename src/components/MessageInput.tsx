import React from "react";
import { IMessageInputProps } from "../interfaces";
import {
  MESSAGE_BUTTON_LABEL,
  MESSAGE_TEXTAREA_PLACEHOLDER,
} from "../constants";

export const MessageInput: React.FC<IMessageInputProps> = (
  props: IMessageInputProps
) => {
  const [message, setMessage] = React.useState<string>("");

  const handleSend = () => {
    props.onSend(message.trim());
    setMessage("");
  };

  return (
    <div className="message-input">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={1}
        placeholder={MESSAGE_TEXTAREA_PLACEHOLDER}
      />
      <button
        onClick={handleSend}
        disabled={message.trim().length ? false : true}
      >
        {MESSAGE_BUTTON_LABEL}
      </button>
    </div>
  );
};
