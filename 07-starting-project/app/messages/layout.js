import { getMessages } from "@/lib/messages";

export default function MessagesLayout({ children }) {

 const messages = getMessages();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
