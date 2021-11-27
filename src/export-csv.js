import fs from 'fs';
import { stringify } from 'csv/sync';

const exportCSV = (trainRecords, testRecords, fileName = 'output') => {
    const trainRecordsOutput = stringify(trainRecords, { header: true });
    fs.writeFileSync(`./${fileName}.train.csv`, trainRecordsOutput)

    const testRecordsOutput = stringify(testRecords, { header: true });
    fs.writeFileSync(`./${fileName}.test.csv`, testRecordsOutput)
}

export default exportCSV;