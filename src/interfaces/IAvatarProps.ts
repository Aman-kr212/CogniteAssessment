import { Person } from "./IFriendListProps";

export interface IAvatarProps {
  friend: Person;
  isSelected: boolean;
  onClickHandler: (id: string) => void;
}
