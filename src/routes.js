const { Router } = require('express')
const multer = require('multer')

const storage = multer.memoryStorage()
const upload  = multer({ storage: storage})
// const upload = multer({ dest: 'uploads/' });

const router = Router()
// const router = express.Router()

const { 
  documents_get_all,
  documents_get_one,
  documents_post
} = require('./controller')

router.route('/documents')
  .get(documents_get_all)
//   .post(upload.single('file'), func)
  .post(
    // upload.single('files'),
    upload.array('files'),
    documents_post
  )

router.route('/documents/:docid')
  .get(documents_get_one)
  
module.exports = router