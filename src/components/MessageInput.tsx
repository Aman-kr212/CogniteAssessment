import React from "react";
import { IMessageInputProps } from "../interfaces";
import {
  MESSAGE_BUTTON_LABEL,
  MESSAGE_TEXTAREA_PLACEHOLDER,
} from "../constants";

export const MessageInput: React.FC<IMessageInputProps> = (
  props: IMessageInputProps
) => {
  const [message, setMessage] = React.useState<string>(props.draftMessage);

  const handleSend = () => {
    props.onDraftMessageUpdate("");
    props.onSend(message.trim());
    setMessage("");
  };

  const onInputChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setMessage(event.target.value);
  };

  return (
    <div className="message-input">
      <textarea
        value={message}
        onChange={onInputChangeHandler}
        rows={1}
        placeholder={MESSAGE_TEXTAREA_PLACEHOLDER}
        onBlur={(e) => props.onDraftMessageUpdate(e.target.value)}
      />
      <button
        onClick={handleSend}
        disabled={message && message.trim().length ? false : true}
      >
        {MESSAGE_BUTTON_LABEL}
      </button>
    </div>
  );
};
