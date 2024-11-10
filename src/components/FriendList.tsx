import React from "react";
import { Avatar } from "./Avatar";
import { IFriendListProps, Person } from "../interfaces";
import { FRIENDS_HEADER } from "../constants";

export const FriendList: React.FC<IFriendListProps> = (
  props: IFriendListProps
) => {
  return (
    <>
      <h2>{FRIENDS_HEADER}</h2>
      <div className="friend-list">
        {props.friends.map((friend: Person) => (
          <Avatar
            key={friend.id}
            friend={friend}
            isSelected={props.selectedFriendId === friend.id}
            onClickHandler={props.onSelected}
          />
        ))}
      </div>
    </>
  );
};
