import {Person} from '../interfaces'


export const FRIEND_LIST: Array<Person> = [
  {
    id: '1',
    name: 'John Doe',
    img: 'https://picsum.photos/200'
  },
  {
    id: '2',
    name: 'Rufus Wade',
    img: 'https://picsum.photos/300'
  },
  {
    id: '3',
    name: 'Daphne Hart',
    img: 'https://picsum.photos/400'
  },
  {
    id: '4',
    name: 'Jessica Stevenson',
    img: 'https://picsum.photos/500'
  },
]

export const  NO_MESSAGE_FOUND: string = 'No messages yet. Start the conversation!';
export const FRIENDS_HEADER: string = 'Friends';
export const CHAT_HEADER: string = 'Chat';
export const NO_FRIEND_SELECTED_MESSAGE: string = 'Please select a friend to chat.'
export const MESSAGE_BUTTON_LABEL: string = 'Send';
export const MESSAGE_TEXTAREA_PLACEHOLDER: string = 'Enter message...';