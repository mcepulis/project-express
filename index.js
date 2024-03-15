console.clear();

import express from 'express';
import { timeHeader } from './middlewares/timeHeader.js';
import { helpMe } from './middlewares/helpMe.js';
import { router } from './routes/index.js';
import { apiRouter } from './api/index.js';
import { testRouter } from './api/test.js';


const app = express();
const port = 4811;

app.use(express.static('static'));

app.use(timeHeader);
app.use(helpMe);
app.use(testRouter);
app.use(apiRouter);
app.use(router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`URL: http://localhost:${port}`);
});