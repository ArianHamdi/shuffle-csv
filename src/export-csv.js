import fs from 'fs';
import { stringify } from 'csv/sync';

const exportCSV = (records, fileName) => {
    const output = stringify(records, { header: true });
    fs.writeFileSync(`./${fileName}.csv`, output)
}

export default exportCSV;