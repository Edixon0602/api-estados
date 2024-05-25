import express from 'express';
import indexRouter from './routes/index.mjs';
import cors from 'cors'

const port = process.env.PORT || 3000
const app = express();

app.use(express.static('public'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

export default app