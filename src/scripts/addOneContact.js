import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

const addOneContact = async () => {
  try {
    const existingContacts = await getAllContacts();
    const updatedContacts = [...existingContacts, createFakeContact()];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts));
  } catch (err) {
    console.error(err);
  }
};

await addOneContact();
