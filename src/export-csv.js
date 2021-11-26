import fs from 'fs';
import { stringify } from 'csv/sync';

const exportCSV = (records) => {
    const output = stringify(records, { header: true });
    fs.writeFileSync('./output.csv', output)
}

export default exportCSV;