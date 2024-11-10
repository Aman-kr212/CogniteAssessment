
export interface Person {
  id: string;
  name: string;
  img: string;
}

export interface IFriendListProps {
  friends: Array<Person>;
  selectedFriendId: string;
  onSelected: (id: string) => void;
}