interface Message {
    createdAt: string | null;
    id: string | null;
    message: string;
    receiverId: string;
    seen: boolean;
    senderId: string;
    sent: boolean;
    type: string | null;
    updatedAt: string | null;
  }
  
  export const setLocalMessage = (
    receiver: string,
    sender: string,
    messages: Message[]
  ) => {
    // Remove 'id' property and filter out duplicates based on 'sent === false'
    const uniqueMessages = messages
      .filter((message, index, self) => {
        const indexOfFirstOccurrence = self.findIndex(
          (m) => m.message === message.message && m.sent === false
        );
        return index === indexOfFirstOccurrence;
      })
      .map(({ id, ...rest }) => rest);
  
    localStorage.setItem(
      `${receiver}+${sender}+previous_messages`,
      JSON.stringify(uniqueMessages)
    );
    return;
  };
  
  export const getLocalMessage = (receiver: string, sender: string) => {
    let storedMessages = localStorage.getItem(
      `${receiver}+${sender}+previous_messages`
    );
    if (storedMessages) {
      return JSON.parse(storedMessages) as Omit<Message, 'id'>[]; // Omit 'id' property
    } else {
      return [];
    }
  };
  