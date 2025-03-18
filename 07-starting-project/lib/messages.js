import sql from 'better-sqlite3';
import { cache } from 'react';
import { unstable_cache as nextCache } from 'next/cache';

const db = new sql('messages.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}


export const getMessages = nextCache(  // this cache is make this date cachable by Next
  // this cache is to avoid request duplication
  cache(function getMessages() {
    console.log('Fetching messages from db');
    return db.prepare('SELECT * FROM messages').all();
  }), ['messages'] // any way to identify this cache
);


