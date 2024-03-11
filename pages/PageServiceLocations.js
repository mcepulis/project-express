import { PageTemplate } from '../lib/PageTemplate.js';

class ServiceLocations extends PageTemplate {
    constructor() {
        super();
        this.pageTitle = 'Service Locations';
        this.page ='locations';
    }

    main() {
        return `
        <h1>Embedding Google Map</h1>
        <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13605.022603066973!2d74.3518831!3d31.5171377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190566eb1a38bf%3A0xa8c7f816987e4d02!2sEducative!5e0!3m2!1sen!2s!4v1685301699963!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        `;
    }
}

export { ServiceLocations };