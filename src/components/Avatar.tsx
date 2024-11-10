import React from "react";
import { IAvatarProps } from "../interfaces";

export const Avatar: React.FC<IAvatarProps> = (props: IAvatarProps) => {
  return (
    <div
      onClick={() => props.onClickHandler(props.friend.id)}
      className="person"
    >
      <img
        className={props.isSelected ? "avatar selected" : "avatar"}
        src={props.friend.img}
        alt={props.friend.name}
      />

      <span className="name">{props.friend.name}</span>
    </div>
  );
};
