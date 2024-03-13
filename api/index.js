import { timeToWords } from './timeToWords.js';
import { Router } from "express";

const apiRouter = Router();

apiRouter.get('/api', (req, res) => {
    res.send('Sveiki atvyke i API puslapi...');
});

apiRouter.get('/api/sudetis/:num1/:num2', (req, res) => {
    res.send(`${Number(req.params.num1) + Number(req.params.num2)}`);
});

apiRouter.get('/api/atimtis/:num1/:num2', (req, res) => {
    res.send(`${Number(req.params.num1) - Number(req.params.num2)}`);
});

apiRouter.get('/api/daugyba/:num1/:num2', (req, res) => {
    res.send(`${Number(req.params.num1) * Number(req.params.num2)}`);
});

apiRouter.get('/api/dalyba/:num1/:num2', (req, res) => {
    res.send(`${Number(req.params.num1) / Number(req.params.num2)}`);
});


// Reikia priimti varda ir pavarde, ir graziname inicialus.
// /api/abbr/chuck/norris => C.N.
apiRouter.get('/api/abbr/:name/:surname', (req, res) => {
    const name = req.params.name;
    const surname = req.params.surname;
    res.send(`${name[0]}.${surname[0]}`);
    
});

// Kreipiantis konkreciai i toli URL yra grazinamas laikas: hh:mm:ss
apiRouter.get('/api/time', (req, res) => {
    res.send(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
});

// Kreipiantis konkreciai i toli URL yra grazinamas laikas tokiu formatu hh:mm:ss, bet visi skaiciai yra zodziai
// pvz.: 10:57:14 => desimt valandu, penkiasdesimt septynios minutes, keturiolika sekundziu
// pasistenkti apgalvoti visas galimas gramatikos situacijas
apiRouter.get('/api/time-as-text', (req, res) => {
    return res.send(timeToWords());
});


export { apiRouter };