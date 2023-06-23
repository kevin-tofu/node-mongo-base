
const mongoose = require('mongoose')
  mongoose.connect(`mongodb://100.64.1.41:27017/documents`, {
})

const schema = new mongoose.Schema({
  docid: String,
  file_name: String,
  file_sentence: String,
  token: Number
})

// const Document = mongoose.model(
//   'Document',
//   new mongoose.Schema({
//     docid: String,
//     file_name: String,
//     file_sentence: String,
//     token: Number
//   })
// );

const getDocument = (collection) => {
  return mongoose.model(
    'Document',
    schema,
    collection
  );
}

exports.getDocument = getDocument
// exports.Document = Document