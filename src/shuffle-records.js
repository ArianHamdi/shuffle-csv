import { sampleSize, shuffle } from 'lodash-es';

const shuffledRecords = (records, length) => {
    const shuffledRecords = shuffle(records);
    const pickedRecords = sampleSize(shuffledRecords, length);
    return pickedRecords;
}

export default shuffledRecords;