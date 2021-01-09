const dbSetup = (req) => req.mongo.db;

const getAllDocuments = (r, colName, offset = 0, n = 20) =>
  dbSetup(r).collection(colName).find({}).skip(offset).limit(n).toArray();

const saveDocument = (r, colName, dataToSave) =>
  dbSetup(r).collection(colName).insertOne(dataToSave);

const getDocument = (r, colName, data) =>
  dbSetup(r).collection(colName).findOne(data);

module.exports = {
  dbSetup,
  getAllDocuments,
  saveDocument,
  getDocument,
};
