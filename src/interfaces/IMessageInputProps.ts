export interface IMessageInputProps {
  onSend: (message: string, isDraft?: boolean) => void;
  onDraftMessageUpdate: (message: string) => void;
  draftMessage: string;
}