import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const contactsBuffer = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(contactsBuffer);

    for (let i = 0; i < contacts.length; i++) {
      const random = Math.floor(Math.random() * 2);
      if (random) {
        contacts.splice(i, 1);
      }
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (err) {
    console.error(err);
  }
};

await thanos();
