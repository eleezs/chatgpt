const { interact } = require('../controller/interact');

const router = require('express').Router()

router.post('/interact', interact )

module.exports = router;