console.clear();

import express from 'express';
import { homePage } from './pages/home.js';
import { aboutPage } from './pages/about.js';
import { contactUsPage } from './pages/contactUs.js';
import { servicesPage } from './pages/services.js';
import { page404 } from './pages/404.js';
import { asmeninis } from './pages/asmeninis.js';
import { externalWeb } from './pages/external.js';

const app = express();
const port = 4811;
app.use(express.static("public"))
app.get('/', (req, res) => res.send(homePage()));
app.get('/about', (req, res) => res.send(aboutPage()));
app.get('/contact-us', (req, res) => res.send(contactUsPage()));
app.get('/services', (req, res) => res.send(servicesPage()));
app.get('/asmeninis', (req, res) => res.send(asmeninis()));

app.get('/externalWEB', (req, res) => res.send(externalWeb()));

app.use((req, res, next) => {
    res.status(404).send(page404());
});

app.listen(port, () => {
    console.log(`URL: http://localhost:${port}`);
});