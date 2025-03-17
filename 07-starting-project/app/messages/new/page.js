import { redirect } from 'next/navigation';

import { addMessage } from '@/lib/messages';
import { revalidatePath, revalidateTag } from 'next/cache';

export default function NewMessagePage() {
  async function createMessage(formData) {
    'use server';

    const message = formData.get('message');
    addMessage(message);
    revalidatePath('/messages'); //This is better, more efficient, for nested content: add a second parameter: , 'layout' 
    /*
    revalidateTag('msg'); //if you assign tags to the request
    Example:
    const response = await fetch('http://localhost:8080/messages', {
      next: {tags: ['msg', 'msg2']}
    });

    */

    redirect('/messages');
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
