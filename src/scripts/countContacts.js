import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await getAllContacts();

    return contacts.length;
  } catch (err) {
    console.error(err);
  }
};

console.log(await countContacts());
