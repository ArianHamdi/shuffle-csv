import fs from 'fs';
import { parse } from 'csv/sync';

const parseCSV = () => {
    const fileContent = fs.readFileSync('./data.csv', { encoding: 'utf8' });
    const records = parse(fileContent, {
        columns: true
    });
    return records;
}

export default parseCSV;