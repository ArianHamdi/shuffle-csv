import { shuffle } from 'lodash-es';

const calculateRecords = (records, percentage) => {
    const finalRecords = records.map(record => {
        const { Result } = record;
        const output = +Result === 0 ? 0 : 1;
        return { ...record, output }
    })
    const recordsLength = finalRecords.length
    const testLength = Math.floor(recordsLength * percentage / 100);
    const shuffledRecords = shuffle(finalRecords);
    const testRecords = shuffledRecords.slice(0, testLength);
    const trainRecords = shuffledRecords.slice(testLength, recordsLength)
    return { trainRecords, testRecords }
}

export default calculateRecords;