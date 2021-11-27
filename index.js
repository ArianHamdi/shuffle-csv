import input from "./src/input.js"
import parseCSV from "./src/parse-csv.js";
import shuffle from "./src/shuffle-records.js";
import exportCSV from "./src/export-csv.js";

const App = () => {
    const length = input('how many rows do you want to pick from this file ? : ');
    const fileName = input('enter file name : ');
    const records = parseCSV();
    const shuffledRecords = shuffle(records, length);
    exportCSV(shuffledRecords, fileName);
}

App();