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

export { apiRouter };