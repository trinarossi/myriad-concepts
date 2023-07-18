const router = require("express").Router();
module.exports = router;

const cors = require('cors');
const bodyParser = require("body-parser");

router.use(cors());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//table of contents
//

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});