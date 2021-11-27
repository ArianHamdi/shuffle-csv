import { shuffle } from 'lodash-es';

const shuffledRecords = (records, percentage) => {
    const recordsLength = records.length
    const testLength = Math.floor(recordsLength * percentage / 100);
    const shuffledRecords = shuffle(records);
    const testRecords = shuffledRecords.slice(0, testLength);
    const trainRecords = shuffledRecords.slice(testLength, recordsLength)
    return { trainRecords, testRecords }
}

export default shuffledRecords;