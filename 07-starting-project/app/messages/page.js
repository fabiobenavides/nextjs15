import Messages from '@/components/messages';

export default async function MessagesPage() {
  const response = await fetch('http://localhost:8080/messages', {
    //cache: 'no-store', //next 14 default 'force-cache' -- next 15 default 'no-store' less agressive
    next: {
      revalidate: 5 //seconds for next revalidate cache
    }
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
