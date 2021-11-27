import input from "./src/input.js"
import parseCSV from "./src/parse-csv.js";
import calculateRecords from "./src/calculate-records.js";
import exportCSV from "./src/export-csv.js";

const App = () => {
    const testPercentage = input('enter test percentage : ');
    const fileName = input('enter file name : ');
    const records = parseCSV();
    const { trainRecords, testRecords } = calculateRecords(records, testPercentage);
    exportCSV(trainRecords, testRecords, fileName);
}

App();