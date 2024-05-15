import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (err) {
    console.error(err);
  }
};

await removeAllContacts();
