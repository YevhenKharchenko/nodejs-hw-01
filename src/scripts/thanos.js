import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';

export const thanos = async () => {
  try {
    const existingContacts = await getAllContacts();
    const updatedContacts = existingContacts.reduce((acc, el) => {
      const random = Math.floor(Math.random() * 2);
      random ? acc.push(el) : acc;

      return acc;
    }, []);

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts));
  } catch (err) {
    console.error(err);
  }
};

await thanos();
