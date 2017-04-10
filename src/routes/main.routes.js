// Import node module
import express from 'express';
const router = express.Router();

// Arrow functions
router.get('/', (req, res) => {
  res.send({message: 'Hello World!!'});
});

router.get('/version', (req, res) => {
  res.send({version: '1.0.0.0'});
});

// Exporting an object as the default import for this module
export default router;
