console.clear();

import express from 'express';
import { PageHome } from './pages/PageHome.js';
import { Page404 } from './pages/Page404.js';
import { PageAbout } from './pages/PageAbout.js';
import { PageServicesList } from './pages/PageServicesList.js';
import { PageServiceInner } from './pages/PageServiceInner.js';
import { PageServicePricing } from './pages/PageServicePricing.js';
import { PageServiceTestimonials } from './pages/PageServiceTestimonials.js';
import { ServiceLocations } from './pages/PageServiceLocations.js';
import { ServiceTeam } from './pages/PageServiceTeam.js';
import { TeamUser } from './pages/PageServicesTeamUsers.js';
import { UserProject } from './pages/PageUserProjects.js';

const app = express();
const port = 4811;

app.use(express.static('static'));

app.get('/', (req, res) => {
    const page = new PageHome();
    res.send(page.render());
});

app.get('/about', (req, res) => {
    const page = new PageAbout();
    res.send(page.render());
});

app.get('/services', (req, res) => {
    const page = new PageServicesList();
    res.send(page.render());
});

app.get('/services/:serviceId', (req, res) => {
    const page = new PageServiceInner(req.params);
    res.send(page.render());
});

app.get('/services/:serviceId/pricing', (req, res) => {
    const page = new PageServicePricing(req.params);
    res.send(page.render());
});

app.get('/services/:serviceId/testimonials', (req, res) => {
    const page = new PageServiceTestimonials(req.params);
    res.send(page.render());
});

app.get('/services/:serviceId/locations', (req, res) => {
    const page = new ServiceLocations(req.params);
    res.send(page.render());
});

app.get('/services/:serviceId/team', (req, res) => {
    const page = new ServiceTeam(req.params);
    res.send(page.render());
});

app.get('/services/:serviceId/team/:username', (req, res) => {
    const page = new TeamUser(req.params);
    res.send(page.render());
});

app.get('/services/:serviceId/team/:userName/projects', (req, res) => {
    const page = new UserProject(req.params);
    res.send(page.render());
});

app.get('/services/:serviceId/team/:userName/projects/:projectId', (req, res) => {
    const page = new PageServiceInner(req.params);
    res.send(page.render());
});


app.use((req, res, next) => {
    const page = new Page404();
    res.status(404).send(page.render());
});

app.listen(port, () => {
    console.log(`URL: http://localhost:${port}`);
});