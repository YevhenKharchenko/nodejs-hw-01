import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const contactsBuffer = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(contactsBuffer);

    return contacts.length;
  } catch (err) {
    console.error(err);
  }
};

console.log(await countContacts());
