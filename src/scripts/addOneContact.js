import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    const contactsBuffer = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(contactsBuffer);

    contacts.push(createFakeContact());

    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (err) {
    console.error(err);
  }
};

await addOneContact();
