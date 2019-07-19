import fs from 'fs';
import path from 'path';
import { createClient } from 'contentful';

const SPACE = '8vi30ovw6i58';
const TOKEN = 'PsWmWFdQk0-wktSoPqbpUQ1Jai3QJUBrUSXhV5yDYb4';

const client = createClient({
  space: SPACE,
  accessToken: TOKEN,
});

const types = ['post'];

export const getcontent = async () => {
  console.log('> Starting import...');
  for (const type of types) {
    console.log('> Getting content for', type);
    const entries = await client.getEntries({
      content_type: type,
      include: 3,
    });
    if (entries.total === 1) {
      const { fields } = entries.items[0];
      fs.writeFileSync(
        path.join(__dirname, '..', 'data', `${type}.json`),
        JSON.stringify(fields)
      );
      console.log('> Content gotten and written for', type);
    }
  }
  return true;
};

if (process.argv[2] === 'install') {
  getcontent();
}
