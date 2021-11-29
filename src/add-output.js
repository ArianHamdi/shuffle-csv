const addOutput = rawRecords => {
    const records = rawRecords.map(record => {
        const { Result } = record;
        const output = +Result === 0 ? 0 : 1;
        return { ...record, output }
    })
    return records
}

export default addOutput;