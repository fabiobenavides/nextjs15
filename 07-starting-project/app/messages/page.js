import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';

//export const revalidate = 5; //revalidate for the entire page in case there are multiples request
//export const dynamic = 'force-dynamic'; //'force-dynamic' same as fetch: cache: 'no-store'

export default function MessagesPage() {

  //unstable_noStore(); //same as no-store
  /* 
  const response = await fetch('http://localhost:8080/messages');
  const messages = await response.json();
  */
  const messages = getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
