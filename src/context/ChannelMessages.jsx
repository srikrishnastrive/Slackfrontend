
import { createContext, useState } from 'react';

export const ChannelMessages = createContext();

export const ChannelMessagesProvider = ({ children }) => {
  const [messageList, setMessageList] = useState([]);

  return (
    <ChannelMessages.Provider value={{ messageList, setMessageList }}>
      {children}
    </ChannelMessages.Provider>
  );
};
