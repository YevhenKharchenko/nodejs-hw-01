import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

const generateContacts = async (number) => {
  try {
    const newContacts = Array.from({ length: number }, createFakeContact);
    const existingContacts = await getAllContacts();
    const updatedContacts = [...existingContacts, ...newContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts));
  } catch (err) {
    console.error(err);
  }
};

await generateContacts(5);
