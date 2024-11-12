export interface Message {
  id: number;
  content: string;
  time: Date;
  isDraft: boolean;
}

export interface IChatProps {
  messages: Array<Message>;
  onMessageUpdate: (content: string, isDraft?: boolean) => void;
  draftMessage: string;
  onDraftMessageUpdate: (message: string) => void;
}