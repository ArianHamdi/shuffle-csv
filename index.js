import getLength from "./src/get-length.js";
import parseCSV from "./src/parse-csv.js";
import shuffle from "./src/shuffle-records.js";
import exportCSV from "./src/export-csv.js";

const App = () => {
    const length = getLength();
    const records = parseCSV();
    const shuffledRecords = shuffle(records, length);
    exportCSV(shuffledRecords);
}

App();