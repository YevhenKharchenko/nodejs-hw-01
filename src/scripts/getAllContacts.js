import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const buffer = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(buffer);

    return contacts;
  } catch (err) {
    console.error(err);
  }
};

console.log(await getAllContacts());
