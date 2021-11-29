import input from "./src/input.js"
import parseCSV from "./src/parse-csv.js";
import addOutput from "./src/add-output.js";
import shuffleRecords from "./src/shuffle-records.js";
import exportCSV from "./src/export-csv.js";

const App = () => {
    const testPercentage = input('enter test percentage : ');
    const fileName = input('enter file name : ');
    const records = parseCSV();
    const finalRecords = addOutput(records)
    const { trainRecords, testRecords, shuffledRecords } = shuffleRecords(finalRecords, testPercentage);
    exportCSV(shuffledRecords, trainRecords, testRecords, fileName);
}

App();