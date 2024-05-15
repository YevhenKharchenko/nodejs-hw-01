import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contactsBuffer = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(contactsBuffer);

    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (err) {
    console.error(err);
  }
};

await generateContacts(5);
