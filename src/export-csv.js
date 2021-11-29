import fs from 'fs';
import { stringify } from 'csv/sync';

const exportCSV = (shuffleRecords, trainRecords, testRecords, fileName = 'output') => {

    const shuffleRecordsOutput = stringify(shuffleRecords, { header: true });
    fs.writeFileSync(`./output/${fileName}.csv`, shuffleRecordsOutput)

    const trainRecordsOutput = stringify(trainRecords, { header: true });
    fs.writeFileSync(`./output/${fileName}_train.csv`, trainRecordsOutput)

    const testRecordsOutput = stringify(testRecords, { header: true });
    fs.writeFileSync(`./output/${fileName}_test.csv`, testRecordsOutput)
}

export default exportCSV;