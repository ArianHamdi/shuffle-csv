import { shuffle } from 'lodash-es';

const shuffleRecords = (originalRecords, percentage) => {
    const recordsLength = originalRecords.length
    const testLength = Math.floor(recordsLength * percentage / 100);
    const shuffledRecords = shuffle(originalRecords);
    const testRecords = shuffledRecords.slice(0, testLength);
    const trainRecords = shuffledRecords.slice(testLength, recordsLength)
    return {
        trainRecords,
        testRecords,
        shuffledRecords
    }
}

export default shuffleRecords;