import express from 'express';
import STRUCTURE from '../Structure.mjs';
import { cleanUpSpecialChars } from '../Helpers.mjs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const indexRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* GET home page. */
indexRouter.get('/', function(req, res, next) {
  const filePath = path.join(__dirname, '../public', 'home.html')
  res.sendFile(filePath)
});

indexRouter.get('/all', function(req, res, next) {
  res.send(STRUCTURE)
})

indexRouter.get('/state/:state', function(req, res, next) {
  const state = STRUCTURE.find(state => {
    const cleanParam = req.params.state.toLowerCase()
    const cleanState = cleanUpSpecialChars(state.estado).replace(' ', '').toLowerCase()
    return cleanState === cleanParam
  })
  res.send(state)
})

indexRouter.get('/state/:state/:city/', function(req, res, next) {
  const stateParam = req.params.state.toLowerCase()
  const cityParam = req.params.city.toLowerCase()
  const state = STRUCTURE.find(state => {
    const cleanParam = req.params.state.toLowerCase()
    const cleanState = cleanUpSpecialChars(state.estado).replace(' ', '').toLowerCase()
    return cleanState === cleanParam
  })
  const province = state.municipios.find(province => {
    const cleanProvince = cleanUpSpecialChars(province.municipio).replace(' ', '').toLowerCase()
    return cleanProvince === cityParam
  })
  res.send(province)
})

export default indexRouter;
