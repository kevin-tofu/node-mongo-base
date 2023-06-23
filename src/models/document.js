const { getDocument } = require('./item')

const document_find_all = (collection) => {
  return getDocument(collection).find()
}

const document_find_one = (collection, filter) => {
  return getDocument(collection).findOne(filter)
}

const document_find_one_update = (collection, filter, update) => {
  return getDocument(collection).findOneAndUpdate(
    filter,
    update,
    {
      upsert: true,
      new: true
    }
  )
}

const document_create = (collection, info) => {
  const _document = getDocument(collection)
  const d = new _document(info)
  // const d = new Document(info)
  return d.save()
}

const document_bulkWrite = (collection, operations) => {
  return getDocument(collection).bulkWrite(operations)
}

const document_delete_many = (filter) => {
  return getDocument(collection).deleteMany(filter)
}

exports.find_all = document_find_all
exports.find_one = document_find_one
exports.find_one_update = document_find_one_update
exports.create = document_create
exports.delete_many = document_delete_many
exports.bulkWrite = document_bulkWrite