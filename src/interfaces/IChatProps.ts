export interface Message {
  id: number;
  content: string;
  time: Date;
}

export interface IChatProps {
  messages: Array<Message>;
  onMessageUpdate: (content: string) => void;
}