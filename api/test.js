import { testWWW } from '../pages/PageTest.js';
import { Router } from "express";

const testRouter = Router();

testRouter.get('/test', (req, res) => {
    const page = new testWWW(req.params);
    res.send(page.render());
});


export { testRouter };  