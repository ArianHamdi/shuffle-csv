import input from "./src/input.js"
import parseCSV from "./src/parse-csv.js";
import shuffle from "./src/shuffle-records.js";
import exportCSV from "./src/export-csv.js";

const App = () => {
    const testPercentage = input('enter test percentage : ');
    const fileName = input('enter file name : ');
    const records = parseCSV();
    const { trainRecords, testRecords } = shuffle(records, testPercentage);
    exportCSV(trainRecords, testRecords, fileName);
}

App();