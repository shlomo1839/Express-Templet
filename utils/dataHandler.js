import fs from 'fs/promises';

/* 
   STEP 2: Map your data keys to actual JSON filenames.
   Add or change filenames as needed for your project.
*/
const DB_FILES = {
    resource1: 'data_source_1.json',
    resource2: 'data_source_2.json'
};

export async function readData(key) {
    try {
        const data = await fs.readFile(DB_FILES[key], 'utf-8');
        return JSON.parse(data);
    } catch {
        return []; // Returns empty array if file is missing
    }
}

export async function writeData(key, data) {
    await fs.writeFile(DB_FILES[key], JSON.stringify(data, null, 2));
}
